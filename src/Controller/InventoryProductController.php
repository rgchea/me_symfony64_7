<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Translation\TranslatorInterface;
//use Symfony\Component\Form\Extension\Core\Type\SubmitType;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\InventoryProduct;
use App\Form\InventoryProductType;
use App\Service\CustomHelper;
/**
 * InventoryProduct controller.
 *
 */
class InventoryProductController extends AbstractController
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
        $this->repository = $this->em->getRepository(InventoryProduct::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }


    public function indexAction(Request $request, CustomHelper $customHelper)
    {


        //var_dump($this->translator->trans('label_welcome'));
        $customHelper->setVars('inventoryProduct');
        $this->initialise();

        //print $this->translator->getLocale();die;

        return $this->render('InventoryProduct/index.html.twig');


    }


    public function listDatatablesAction(Request $request, CustomHelper $customHelper)
    {

        $customHelper->setVars('inventoryProduct');

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

        // Process Parameters

        $results = $this->repository->getRequiredDTData($start, $length, $order, $search, $columns, $dateRange =  null);
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

                    case 'name':
                    {
                        $responseTemp = $entity->getName();
                        break;
                    }
                    case 'category':
                    {
                        $responseTemp = $entity->getInventoryProductCategory()->getName();
                        break;
                    }

                    case 'quantity':
                    {
                        $responseTemp = $entity->getQuantity();
                        break;
                    }

                    case 'actions':
                    {
                        $urlEdit = $this->generateUrl('backend_admin_inventoryproduct_edit', array('id' => $entity->getId()));
                        $edit = "<a href='".$urlEdit."'><div class='btn btn-sm btn-primary'><span class='fa fa-search'></span></div></a>&nbsp;&nbsp;";

                        $urlDelete = $this->generateUrl('backend_admin_inventoryproduct_delete', array('id' => $entity->getId()));
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
     * Creates a new InventoryProduct entity.
     *
     */
    public function newAction(Request $request, CustomHelper $customHelper)
    {
        $customHelper->setVars('inventoryProduct');
        $this->initialise();

        $entity = new InventoryProduct();
        $form   = $this->createCreateForm($entity);


        return $this->render('InventoryProduct/new.html.twig', array(
            'entity' => $entity,
            'form' => $form->createView(),
        ));
    }



    /**
     * Displays a form to edit an existing InventoryProduct entity.
     *
     */
    public function editAction(Request $request, $id, CustomHelper $customHelper)
    {
        $customHelper->setVars('inventoryProduct');
        $this->initialise();
        
        $em = $this->em;

        $entity = $this->repository->find($id);

        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createEditForm($entity);

        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            
            $em->persist($entity);
            $em->flush();

            return $this->redirectToRoute('backend_admin_inventoryproduct_edit', array('id' => $id));
        }

        return $this->render('InventoryProduct/edit.html.twig', array(
            'entity' => $entity,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a InventoryProduct entity.
     *
     */
    public function deleteAction(Request $request, $id, CustomHelper $customHelper)
    {

        $customHelper->setVars('inventoryProduct');
        $this->initialise();
        
        $em = $this->em;

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find InventoryProduct entity.');
        }

        else{
            $entity->setEnabled(false);
            $em->persist($entity);
            $em->flush();

        }

        //}

        $customHelper->flashSuccess($request);
        return $this->redirectToRoute('backend_admin_inventoryproduct_index');
    }

    /**
     * Creates a form to delete a InventoryProduct entity.
     *
     * @param InventoryProduct $user The InventoryProduct entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('backend_admin_inventoryproduct_delete', array('id' => $entity->getId())))
            ->setMethod('DELETE')
            ->getForm()
            ;
    }




    /**
     * Creates a new InventoryProduct entity.
     *
     */
    public function createAction(Request $request, CustomHelper $customHelper)
    {

        $customHelper->setVars('inventoryProduct');
        $this->initialise();
        
        $entity = new InventoryProduct();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);
        /*print "<pre>";
        var_dump($form->getErrorsAsString());die;
         * */

        /////
        if ($form->isValid() ) {


            $em = $this->em;
            //var_dump($entity);die;

            $customHelper->blameOnMe($entity, 'update');

            $em->persist($entity);
            $em->flush();

            $unload = intval($_REQUEST["unload"]);
            $quantity = $entity->getQuantity();
            $newQuantity = $quantity - $unload;

            $entity->setQuantity($newQuantity);
            $em->persist($entity);
            $em->flush();

            $customHelper->flashSuccess($request);
            //return $this->redirect($this->generateUrl('backend_admin_inventoryproduct_index'));

            return $this->redirectToRoute('backend_admin_inventoryproduct_index');


        }

        ////

        //return $this->redirectToRoute('backend_admin_inventoryproduct_edit', array('id' => $id));

        /////


        return $this->render('InventoryProduct/new.html.twig', array(
            'entity' => $entity,
            'form'   => $form->createView(),
        ));
    }

    /**
     * Creates a form to create a InventoryProduct entity.
     *
     * @param InventoryProduct $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm($entity)
    {
        //$this->setVars();
        $form = $this->createForm(InventoryProductType::class, $entity, array(
            'action' => $this->generateUrl('backend_admin_inventoryproduct_create'),
            'method' => 'POST'
        ));


        return $form;
    }


    /**
     * Creates a form to edit a InventoryProduct entity.
     *
     * @param InventoryProduct $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createEditForm($entity)
    {
        //$this->setVars();
        $form = $this->createForm(InventoryProductType::class, $entity, array(
            'action' => $this->generateUrl('backend_admin_inventoryproduct_update', array('id' => $entity->getId())),

            //'client' => $this->userLogged,
        ));


        return $form;
    }


    /**
     * Edits an existing InventoryProduct entity.
     *
     */
    public function updateAction(Request $request, $id, CustomHelper $customHelper)
    {
        /*
        print "<pre>";
        var_dump($_REQUEST["user"]["username"]);die;*/

        $customHelper->setVars('inventoryProduct');
        $this->initialise();

        $em = $this->em;

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find InventoryProduct entity.');
        }


        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);





        ////
        if ($editForm->isValid()) {

            //getInventoryProductId
            //LOG
            /*
            $user_id = $this->get('security.context')->getToken()->getInventoryProduct()->getId();

            $user = $em->getRepository('WbcAdministratorBundle:InventoryProduct')->find($user_id);
            $text = $user . ' has updated the user <strong>' . $entity . '</strong>';
            $this->get('log')->add($text, $user, 'update');
			 *
			 */
            $customHelper->blameOnMe($entity, 'update');
            $em->persist($entity);
            $em->flush();

            $unload = intval($_REQUEST["unload"]);
            $quantity = $entity->getQuantity();
            $newQuantity = $quantity - $unload;

            $entity->setQuantity($newQuantity);
            $em->persist($entity);
            $em->flush();

            $customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('backend_admin_inventoryproduct_index', array('id' => $id)));

        }
        ////

        return $this->redirectToRoute('backend_admin_inventoryproduct_edit', array('id' => $id));
        /*
        return $this->render('InventoryProduct/edit.html.twig', array(
            'entity'      => $entity,
            'form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
         *
         */
    }




    public function unloadAction(Request $request, CustomHelper $customHelper)
    {

        $customHelper->setVars('inventoryProductUnload');
        $this->initialise();


        //var_dump($entity);die;

        if(isset($_REQUEST["submit"])){
            //print "<pre>";
            //var_dump($_REQUEST);DIE;

            foreach ($_REQUEST["products"] as $key => $value){

                $objProduct = $this->repository->find(intval($value));
                $myQuantity = intval($_REQUEST["quantity"][$key]);

                $productQuantity =  intval($objProduct->getQuantity());
                $newQuantity = $productQuantity - $myQuantity;
                $objProduct->setQuantity($newQuantity);
                $this->em->persist($objProduct);

            }

            //$em->persist($entity);
            $this->em->flush();
            $customHelper->flashSuccess($request);

        }

        $products = $this->em->getRepository(InventoryProduct::class)->findBy(array("enabled" => 1), array("name" => "ASC"));

        return $this->render('InventoryProduct/unload.html.twig', array(
            'products' => $products,
            //'role' => $this->role
            //'form' => $form->createView(),
        ));


    }

}
