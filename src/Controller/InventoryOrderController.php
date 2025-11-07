<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Translation\TranslatorInterface;
//use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Mailer\MailerInterface;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Response;


use App\Entity\InventoryOrderHeader;
use App\Entity\InventoryOrderProduct;
use App\Entity\InventoryProduct;
use App\Service\CustomHelper;


/**
 * InventoryOrder controller.
 *
 */
class InventoryOrderController extends AbstractController
{


    private EntityManagerInterface $em;
    protected $repository;
    private RequestStack $requestStack;
    private ?SessionInterface $session = null; // will be set lazily
    private $userLogged;
    private $role;

    public function __construct(EntityManagerInterface $em, RequestStack $requestStack)
    {
        $this->em = $em;
        $this->requestStack = $requestStack;
    }

    /** Lazily fetch the current request's session (safe in dev/CLI). */
    private function session(): SessionInterface
    {
        if ($this->session !== null) {
            return $this->session;
        }
        $session = $this->requestStack->getCurrentRequest()?->getSession();
        if (!$session) {
            throw new \RuntimeException('No active session (CLI or no request).');
        }
        return $this->session = $session;
    }


    // Set up all necessary variable
    protected function initialise(): void
    {
        $this->session = $this->session();
        $this->repository = $this->em->getRepository(InventoryOrderHeader::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }


    public function indexAction(Request $request, CustomHelper $customHelper)
    {


        //var_dump($this->translator->trans('label_welcome'));
        $customHelper->setVars('inventoryOrder');
        $this->initialise();

        //print $this->translator->getLocale();die;

        return $this->render('InventoryOrder/index.html.twig');


    }


    public function listDatatablesAction(Request $request, CustomHelper $customHelper)
    {

        $customHelper->setVars('inventoryOrder');

        // Set up required variables
        $this->initialise();


        // Get the parameters from DataTable Ajax Call
        if ($request->getMethod() == 'POST')
        {
            $bag = $request->isMethod('POST') ? $request->request : $request->query;
            //scalars
            $draw   = $bag->getInt('draw', 0);
            $start  = $bag->getInt('start', 0);
            $length = $bag->getInt('length', 10);
            // arrays
            $columns = $bag->all('columns');  // <-- FIX
            $order   = $bag->all('order');
            $search  = $bag->all('search');

        }
        else // If the request is not a POST one, die hard
            die;

        // Process Parameters & filters
        $filters = array();

        $filters["filter_from"] = $_REQUEST["filter_from"];
        $filters["filter_to"] = $_REQUEST["filter_to"];


        $results = $this->repository->getRequiredDTData($start, $length, $order, $search, $columns, $filters);
        $objects = $results["results"];
        $selected_objects_count = count($objects);

        $i = 0;
        $response = "";

        foreach ($objects as $key => $entity)
        {
            //print "<pre>";
            //var_dump($entity);die;

            $response .= '["';

            $j = 0;
            $nbColumn = count($columns);
            foreach ($columns as $key => $column)
            {
                // In all cases where something does not exist or went wrong, return -
                $responseTemp = "-";

                switch($column['name'])
                {
                    case 'id':
                    {
                        $responseTemp = $entity->getId();

                        break;
                    }

                    case 'status':
                    {
                        $responseTemp = $entity->getStatus();
                        break;
                    }

                    case 'comment':
                    {
                        $responseTemp = substr($entity->getComment(), 0, 15) ;
                        break;
                    }
                    case 'actions':
                    {
                        $urlEdit = $this->generateUrl('backend_admin_inventoryorder_edit', array('id' => $entity->getId()));
                        $edit = "<a href='".$urlEdit."'><div class='btn btn-sm btn-primary'><span class='fa fa-search'></span></div></a>&nbsp;&nbsp;";

                        $urlDelete = $this->generateUrl('backend_admin_inventoryorder_delete', array('id' => $entity->getId()));
                        $delete = "<a class='btn btn-danger btn-sm btnDelete' href='".$urlDelete."'><i class='fa fa-trash'></i></a>";


                        $responseTemp = $edit.$delete;
                        break;
                    }

                }

                // Add the found data to the json
                $response .= $responseTemp;

                if(++$j !== $nbColumn)
                    $response .='","';
            }

            $response .= '"]';

            // Not on the last item
            if(++$i !== $selected_objects_count)
                $response .= ',';
        }
        $myItems = $response;
        //($request, $repository, $results, $myItems){
        $return = $customHelper->serviceDataTable($request, $this->repository, $results, $myItems);

        return $return;


    }




    /**
     * Creates a new InventoryOrder entity.
     *
     */
    public function newAction(Request $request, CustomHelper $customHelper)
    {

        $customHelper->setVars('inventoryOrder');
        $this->initialise();

        $products = $this->em->getRepository(InventoryProduct::class)->findBy(array("enabled" => 1), array("name" => "ASC"));


        return $this->render('InventoryOrder/new.html.twig', array(
            'products' => $products,
            'role' => $this->role
            //'form' => $form->createView(),
        ));


    }


    /**
     * Displays a form to edit an existing InventoryOrder entity.
     *
     */
    public function editAction(Request $request, $id, CustomHelper $customHelper)
    {
        $customHelper->setVars('inventoryOrder');
        $this->initialise();


        $orderProduct = $this->em->getRepository(InventoryOrderProduct::class)->findByInventoryOrderHeader($id);
        $products = $this->em->getRepository(InventoryProduct::class)->findBy(array("enabled" => 1), array("name" => "ASC"));

        $entity = $this->em->getRepository(InventoryOrderHeader::class)->find($id);


        return $this->render('InventoryOrder/edit.html.twig', array(
            'orderProduct' => $orderProduct,
            'products' => $products,
            'edit' => 1,
            'entity' => $entity,
            'role' => $this->role
            //'form' => $form->createView(),
        ));


    }

    /**
     * Deletes a InventoryOrder entity.
     *
     */
    public function deleteAction(Request $request, $id, CustomHelper $customHelper)
    {

        $customHelper->setVars('inventoryOrder');
        $this->initialise();
        $em = $this->em;

        $entity = $em->getRepository(InventoryOrderHeader::class)->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find InventoryOrder entity.');
        }

        else{
            $entity->setEnabled(false);
            $em->persist($entity);
            $em->flush();
        }

        //}

        $customHelper->flashSuccess($request);
        return $this->redirectToRoute('backend_admin_inventoryorder_index');
    }



    /**
     * Creates a new InventoryOrder entity.
     *
     */
    public function createAction(Request $request, CustomHelper $customHelper, MailerInterface $mailer)
    {

        $customHelper->setVars('inventoryOrder');
        $this->initialise();

        //print "<pre>";
        //var_dump($_REQUEST);DIE;
        //var_dump($entity);die;

        if(isset($_REQUEST["products"])){

            $newOrderHeader = new InventoryOrderHeader();

            $myComment = trim($_REQUEST["comment"]);
            if($myComment != ""){
                $myComment .= "//".$this->userLogged->getName()." ".$this->userLogged->getLastName();
            }

            $newOrderHeader->setStatus("Pendiente");
            $newOrderHeader->setComment($myComment);
            $customHelper->blameOnMe($newOrderHeader);

            $this->em->persist($newOrderHeader);
            $strProductDetail = "";

            foreach ($_REQUEST["products"] as $key => $value){

                $newOrderProduct = new InventoryOrderProduct();
                $newOrderProduct->setInventoryOrderHeader($newOrderHeader);
                $objProduct = $this->em->getRepository(InventoryProduct::class)->find(intval($value));
                $newOrderProduct->setInventoryProduct($objProduct);
                $myQuantity = intval($_REQUEST["quantity"][$key]);
                $newOrderProduct->setQuantity($myQuantity);
                $this->em->persist($newOrderProduct);

                $strProductDetail .= "<tr style='border: 1px solid black;text-align: left;'><td  >".$objProduct->getName()."</td><td>".$myQuantity."</td></tr>";
            }

            $strTableProductDetail = "<table style='border: 1px solid black;text-align: right;border-collapse: collapse;width: 50%;'><tbody><tr><td width='80%'><b>Producto</b></td><td width='20%'><b>Cantidad</b></td></tr>".$strProductDetail."</tbody></table>";

            //$em->persist($entity);
            $this->em->flush();

            //enviar correo a Susan
            $myBody = "El usuario ".$this->userLogged->getUsername()." ha solicitado productos para inventario:<br/><br/>";

            $myBody .= $strTableProductDetail;

            if($myComment != ""){
                $myBody .= "<br/>Comentario: ".$myComment;
            }

            $myOrderID = $newOrderHeader->getId();

            $myURL = $this->generateUrl('backend_admin_inventoryorder_edit', array("id" => $myOrderID), true );

            $myBody .= "<br/><a href='".$myURL."'>Ver Orden</a>";

            $to = 'scabrera@mayaexpress.com.gt';
            //$to = 'cheametal@gmail.com';
            $message = $customHelper->generalTemplateMail("Nueva orden de compra #".$myOrderID, $to , $myBody, null, $mailer );


            $customHelper->flashSuccess($request);
            //return $this->redirect($this->generateUrl('backend_admin_inventoryorder_index'));

        }


        return $this->redirectToRoute('backend_admin_inventoryorder_index');




    }


    /**
     * Edits an existing InventoryOrder entity.
     *
     */
    public function updateAction(Request $request, $id, CustomHelper $customHelper, MailerInterface $mailer)
    {

        //print "<pre>";
        //var_dump($_REQUEST);die;

        ///validar si es usuario ADMIN

        $customHelper->setVars('inventoryOrder');
        $this->initialise();

        $entity = $this->em->getRepository(InventoryOrderHeader::class)->find($id);
        $products = $this->em->getRepository(InventoryOrderProduct::class)->findByInventoryOrderHeader($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find InventoryOrder entity.');
        }


        $entity->setComment(trim($_REQUEST["comment"]));

        if(isset($_REQUEST["invoiceNumber"])){

            $entity->setStatus("Finalizada");
            $entity->setInvoiceNumber(trim($_REQUEST["invoiceNumber"]));
            $entity->setInvoiceAmount(floatval($_REQUEST["invoiceAmount"]));

            foreach ($products as $key => $value){

                $objInventoryOrderProduct = $this->em->getRepository(InventoryOrderProduct::class)->find( $value->getId());
                $objInventoryProduct =   $this->em->getRepository(InventoryProduct::class)->find( $value->getInventoryProduct()->getId());
                $tmpProductQuantity = intval($objInventoryProduct->getQuantity());
                $newStock = $tmpProductQuantity + $objInventoryOrderProduct->getQuantity();
                $objInventoryProduct->setQuantity($newStock);
                $this->em->persist($objInventoryProduct);
                //$this->em->flush();
            }

        }
        else{
            if(intval($_REQUEST["authValue"]) == 0){
                $entity->setStatus("Rechazada");
            }
            else{
                $entity->setStatus("Autorizada");
            }

        }

        $this->em->persist($entity);
        $this->em->flush();

        $createdByEmail = trim($entity->getCreatedBy()->getEmail());

        if($entity->getStatus("Finalizada")){
            $to = array($createdByEmail, "scabrera@mayaexpress.com.gt") ;
        }
        else{
            $to = trim($entity->getCreatedBy()->getEmail());
        }


        $content = "La orden de compra #{$id} ha sido ".$entity->getStatus()."<br/>";

        $strProductDetail = "";

        foreach ($products as $key => $value){
            $strProductDetail .= "<tr style='border: 1px solid black;text-align: left;'><td  >".$value->getInventoryProduct()->getName()."</td><td>".$value->getQuantity()."</td></tr>";
        }

        $strTableProductDetail = "<table style='border: 1px solid black;text-align: right;border-collapse: collapse;width: 50%;'><tbody><tr><td width='80%'><b>Producto</b></td><td width='20%'><b>Cantidad</b></td></tr>".$strProductDetail."</tbody></table>";

        $content .= "<br/>".$strTableProductDetail."<br/>";

        if(isset($_REQUEST["invoiceNumber"])){
            $content .= "<br/># Factura:".$entity->getInvoiceNumber()."<br/>";
        }

        $myURL = $this->generateUrl('backend_admin_inventoryorder_edit', array("id" => $id), true );
        $content .= "<br/><a href='".$myURL."'>Ver Orden</a>";


        $message = $customHelper->generalTemplateMail("Orden de compra #".$id, $to , $content, null, $mailer);

        $customHelper->flashSuccess($request);
        return $this->redirect($this->generateUrl('backend_admin_inventoryorder_index', array('id' => $id)));


    }

}
