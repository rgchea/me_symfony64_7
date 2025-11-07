<?php

namespace App\Controller;


use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Session\Session;

use Symfony\Component\HttpFoundation\ResponseHeaderBag;
// Include PhpSpreadsheet required namespaces
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Response;



use App\Entity\Claim;
use App\Form\ClaimType;
use App\Service\CustomHelper;
use App\Entity\Guide;
use App\Entity\UserNotification;
/**
 * Claim controller.
 *
 */
class ClaimController extends AbstractController
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
        $this->repository = $this->em->getRepository(Claim::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }


    /**
     * Lists all Claim entities.
     *
     */
    public function indexAction(CustomHelper $customHelper)
    {

    	$customHelper->setVars('claim');
        $this->initialise();

        $user = $this->userLogged;

        $filter = array();

        $filter["filter_status"] = "Todos";
        $filter["filter_created_from"] = date("Y-m-d");
        $filter["filter_created_to"] = date("Y-m-d");
        $filter["filter_dates"] = 1;


        if(isset($_REQUEST["toExcel"]) && $_REQUEST["toExcel"] == "true") {

            /*
            print "<pre>";
            var_dump($_REQUEST);
            die;
            */

            $table = $_REQUEST["tableArray"];

            //$first_value = reset($array); // First element's value
            $first_key = key($table); // First element's key

            $firstValue = $table[$first_key];

            if (is_array($table)) {

                //ADD HEADERS
                $headers = array("ID RECLAMO", "CREADO POR", "FECHA", "TIPO", "RECLAMO", "STATUS RECLAMO", "GUIA", "REPOSICION", "COMPRA DE PRODUCTO", "MONTO COMPRA DE PRODUCTO", "OBSERVACIONES");

                //adds element at the beginnig of array
                array_unshift($table, $headers);

                $spreadsheet = new Spreadsheet();

                /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
                $sheet = $spreadsheet->getActiveSheet();

                $sheet
                    ->fromArray(
                        $table,  // The data to set
                        NULL,        // Array values with this value will not be set
                        'A1'         // Top left coordinate of the worksheet range where
                    //    we want to set these values (default is A1)
                    );

                $sheet->setTitle("Comisiones");

                // Create your Office 2007 Excel (XLSX Format)
                $writer = new Xlsx($spreadsheet);

                // Create a Temporary file in the system
                $now = date("Y-m-d");
                $fileName = 'Reclamos'.$now.'.xlsx';
                $temp_file = tempnam(sys_get_temp_dir(), $fileName);

                // Create the excel file in the tmp directory of the system
                $writer->save($temp_file);

                // Return the excel file as an attachment
                return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
            }



        }

        if(isset($_REQUEST["filter"])){
            $filter["filter_status"] = $_REQUEST["filter_status"];
            $filter["filter_created_from"] = $_REQUEST["filter_created_from"];
            $filter["filter_created_to"] = $_REQUEST["filter_created_to"];


            if(!isset($_REQUEST["filter_dates"])){

                $filter["filter_dates"] = 0;
                $now = date("Y-m-d");
                $filter["filter_created_from"] = strtotime($now.' -100 year');
                $filter["filter_created_from"] = date('Y-m-d', $filter["filter_created_from"]);
                //var_dump(date('Y-m-d', $filter["filter_created_from"]));die;
                $filter["filter_created_to"] = $now;
            }

        }


        $entities = $this->em->getRepository(Guide::class)->getByReplacementStatus($filter["filter_status"], $filter["filter_created_from"], $filter["filter_created_to"]);
        ///AGREGAR FILTRO DE ESTADOS
        ///FILTRO DE FECHA
        ///
        if(isset($_REQUEST["filter"])) {
            $filter["filter_created_from"] = $_REQUEST["filter_created_from"];
            $filter["filter_created_to"] = $_REQUEST["filter_created_to"];
        }


        return $this->render('Claim/index.html.twig', array(
            'entities' => $entities,
            'filter_status' => $filter["filter_status"],
            'filter_created_from' => $filter["filter_created_from"],
            'filter_created_to' => $filter["filter_created_to"],
            'filter_dates' => $filter["filter_dates"],
            'user' => $user
        ));
    }

    

    /**
     * Displays a form to edit an existing Claim entity.
     *
     */
    public function editAction(Request $request, $id, CustomHelper $customHelper)
    {
    	$customHelper->setVars('claim');
        $this->initialise();

        $entity = $this->repository->find($id);
				
        $deleteForm = $this->createDeleteForm($entity);
		$editForm = $this->createEditForm($entity);

        $editForm->handleRequest($request);


        $objGuide = $this->em->getRepository(Guide::class)->findOneByClaim($id);

        return $this->render('Claim/edit.html.twig', array(
            'entity' => $entity,
            'guide' => $objGuide,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }
	
	
	
    /**
    * Creates a form to edit a Claim entity.
    *
    * @param Claim $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createEditForm($entity)
    {
    	//$this->setVars();
        $form = $this->createForm(ClaimType::class, $entity, array(
            'action' => $this->generateUrl('backend_admin_claim_update', array('id' => $entity->getId())),
            //'method' => 'PUT',
            //'client' => $this->userLogged,
        ));

        //$form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }
	
	
    /**
     * Edits an existing Claim entity.
     *
     */
    public function updateAction(Request $request, $id, CustomHelper $customHelper)
    {
    	$customHelper->setVars('claim');
        $this->initialise();

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Claim entity.');
        }

        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {

            $objUserNotification = $this->em->getRepository(UserNotification::class)->findOneByClaim($id);
            if($objUserNotification != NULL){
                $objUserNotification->setIsRead(1);
                $this->em->persist($objUserNotification);
            }

            $this->em->flush();

			$customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('backend_admin_claim_index', array('id' => $id)));
			 
        }

        return $this->render('Claim/edit.html.twig', array(
            'entity'      => $entity,
            'form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Creates a form to delete a Claim entity.
     *
     * @param Claim
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('backend_admin_claim_delete', array('id' => $entity->getId())))
            ->setMethod('DELETE')
            ->getForm()
            ;
    }



}
