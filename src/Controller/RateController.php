<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Session\Session;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\Rate;
use App\Form\RateType;
use App\Entity\Category;
use App\Entity\Service;
use App\Service\CustomHelper;
/**
 * Rate controller.
 *
 */
class RateController extends AbstractController
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
        $this->repository = $this->em->getRepository(Rate::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }


    /**
     * Lists all Rate entities.
     *
     */
    public function indexAction(CustomHelper $customHelper)
    {

    	$customHelper->setVars('rate');
        $this->initialise();
        
        $em = $this->em;

        //$entities = $this->repository->findAll();

        return $this->render('Rate/index.html.twig');
    }



    public function listDatatablesAction(Request $request, CustomHelper $customHelper)
    {



        $customHelper->setVars('rate');

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
        $results = $this->repository->getRequiredDTData($start, $length, $order, $search, $columns);
        $objects = $results["results"];
        $selected_objects_count = count($objects);

        $i = 0;
        $response = "";

        foreach ($objects as $key => $entity)
        {
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


                    case 'service':
                    {

                        $responseTemp = $entity->getService()->getName();
                        break;

                    }

                    case 'category':
                    {
                        $responseTemp = $entity->getCategory()->getName();
                        break;
                    }
                    case 'weight':
                    {

                        $responseTemp = $entity->getWeight();
                        break;
                    }

                    case 'price':
                    {
                        $responseTemp = $entity->getPrice();
                        break;
                    }
                    case 'commission':
                    {

                        $responseTemp = $entity->getCommission();
                        break;
                    }


                    case 'actions':
                    {

                        $urlEdit = $this->generateUrl('rate_edit', array('id' => $entity->getId()));
                        $edit = "<a href='".$urlEdit."'><div class='btn btn-sm btn-primary'><span class='fa fa-search'></span></div>  </a>&nbsp;&nbsp;";

                        $urlDelete = $this->generateUrl('rate_delete', array('id' => $entity->getId()));
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
     * Creates a new Rate entity.
     *
     */
    public function newAction(Request $request, CustomHelper $customHelper)
    {
    	$customHelper->setVars('rate');
        $this->initialise();
 
        $entity = new Rate();
        $form   = $this->createCreateForm($entity);
		 
	
        return $this->render('Rate/new.html.twig', array(
            'entity' => $entity,
            'form' => $form->createView(),
        ));
    }

 

    /**
     * Finds and displays a Rate entity.
     *
     */
    public function showAction($entity)
    {
        $deleteForm = $this->createDeleteForm($entity);

        return $this->render('backend_admin_role/show.html.twig', array(
            'entity' => $entity,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing Rate entity.
     *
     */
    public function editAction(Request $request, $id, CustomHelper $customHelper)
    {
    	$customHelper->setVars('rate');
        $this->initialise();
        
        $em = $this->em;

        $entity = $this->repository->find($id);
				
        $deleteForm = $this->createDeleteForm($entity);
		$editForm = $this->createEditForm($entity);
        
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->em;
            $em->persist($entity);
            $em->flush();

            return $this->redirectToRoute('rate_edit', array('id' => $id));
        }

        return $this->render('Rate/edit.html.twig', array(
            'entity' => $entity,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }
	
    /**
     * Deletes a Rate entity.
     *
     */
    public function deleteAction(Request $request, $id, CustomHelper $customHelper)
    {
    	
		$customHelper->setVars('rate');
		$this->initialise();
		
        $em = $this->em;

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Rate entity.');
        }

        $form = $this->createDeleteForm($entity);
        $form->handleRequest($request);

        //if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->em;

			try{
				
	            $em->remove($entity);
	            $em->flush();        		
			
            } catch (\Doctrine\DBAL\DBALException $e) {
            	//var_dump($e->getCode());die;
                if ($e->getCode() == 0)
                {
                	//var_dump($e->getPrevious()->getCode());die;
                    if (intval($e->getPrevious()->getCode()) == 23000)
                    {
                        $customHelper->flashWarningForeignKey($request);
                        return $this->redirectToRoute('rate_index');
                    }
                    else
                    {
                        throw $e;
                    }
                }
                else
                {
                    throw $e;
                }
            }	   		
        	
        //}
		
		$customHelper->flashSuccess($request);
        return $this->redirectToRoute('rate_index');
    }

    /**
     * Creates a form to delete a Rate entity.
     *
     * @param Rate $role The Rate entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('rate_delete', array('id' => $entity->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
	
	
	
	
    /**
     * Creates a new Rate entity.
     *
     */
    public function createAction(Request $request, CustomHelper $customHelper)
    {
    	
		$customHelper->setVars('rate');
        $this->initialise();

        $entity = new Rate();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);
		/*print "<pre>";
		var_dump($form->getErrorsAsString());die;
		 * */
		 
        if ($form->isValid()) {
			$em = $this->em;
            $em->persist($entity);
            $em->flush();

			$customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('rate_index'));
        }
		/*
		else{
			print "FORMULARIO NO VALIDO";DIE;
		}
		 * */

        return $this->render('Rate/new.html.twig', array(
            'entity' => $entity,
            'form'   => $form->createView(),
        ));
    }

    /**
     * Creates a form to create a Rate entity.
     *
     * @param Rate $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm($entity)
    {
    	
        $form = $this->createForm(RateType::class, $entity, array(
            'action' => $this->generateUrl('rate_create'),
            'method' => 'POST'
            //'client' => $this->userLogged,
        ));

        //$form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }	
	

	
	
    /**
    * Creates a form to edit a Rate entity.
    *
    * @param Rate $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createEditForm($entity)
    {
    	
        $form = $this->createForm(RateType::class, $entity, array(
            'action' => $this->generateUrl('rate_update', array('id' => $entity->getId())),
            
            //'client' => $this->userLogged,
        ));

        //$form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }
	
	
    /**
     * Edits an existing Rate entity.
     *
     */
    public function updateAction(Request $request, $id, CustomHelper $customHelper)
    {
    	$customHelper->setVars('rate');
        $this->initialise();
        
        $em = $this->em;

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Rate entity.');
        }

        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {
            $em->flush();

			$customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('rate_index', array('id' => $id)));
			 
        }

        return $this->render('Rate/edit.html.twig', array(
            'entity'      => $entity,
            'form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }


    public function cloneAction(Request $request, CustomHelper $customHelper)
    {

        $customHelper->setVars('rate');
        $this->initialise();
        
        $em = $this->em;

        $categories = $em->getRepository(Category::class)->findBy(array(), array("name" => "ASC"));

        return $this->render('Rate/clone.html.twig', array(
            'categories' => $categories,
        ));
    }


    public function cloneSaveAction(Request $request, CustomHelper $customHelper)
    {


        $customHelper->setVars('rate');
        $this->initialise();
        
        $em = $this->em;

        if(isset($_REQUEST["submitClone"])){


            $newCategoryName = $_REQUEST["submitClone"];

            $newCategory = new Category();
            $newCategory->setName($newCategoryName);

            $em->persist($newCategory);


            unset($_REQUEST["submitClone"]);

            //print "<pre>";
            //var_dump($_REQUEST);DIE;

            foreach ($_REQUEST["rate"] as $key => $value){
                //print "<pre>";
                //var_dump($value);die;

                $newRate = new Rate();

                $objService = $em->getRepository(Service::class)->findOneById(intval($value["service"]));
                $newRate->setService($objService);
                $newRate->setCategory($newCategory);
                $newRate->setWeight(floatval($value["weight"]));
                $newRate->setPrice(floatval($value["price"]));
                $newRate->setCommission(floatval($value["commission"]));

                $em->persist($newRate);

            }

            $em->flush();

            $customHelper->flashSuccess($request);
            return $this->redirectToRoute('rate_index');


        }
        else{

            //$rates = $this->repository->findBy(array("category" => intval($_REQUEST["cloneCategory"])));

            $rates = $this->repository->getRatesByCategory(intval($_REQUEST["cloneCategory"]));

            //print "<pre>";
            //var_dump($rates);die;

            return $this->render('Rate/cloneSave.html.twig', array(
                'rates' => $rates,
                'newCategory' => trim($_REQUEST["categoryName"]),
            ));
        }

    }



    public function loadAction(Request $request, CustomHelper $customHelper){
        /*EL FORMATO DEL ARCHIVO DEBE DE SER MS-DOS CSV*/
        /*MAC LOS FORMATEA MAL*/

        $customHelper->setVars('rate');
        // Set up required variables
        $this->initialise();


        if(isset($_REQUEST["loadSubmit"])){
            set_time_limit(2000000);

            $errors = 0;
            $csvData = array();
            $tmpName = $_FILES['file']['tmp_name'];
            //$csvAsArray = array_map('str_getcsv', file($tmpName));

            $file_handle = fopen($tmpName, 'r');
            while (!feof($file_handle) ) {
                $line_of_text[] = fgetcsv($file_handle, 1024);
            }
            fclose($file_handle);

            /*
            print "<pre>";
            var_dump($line_of_text) ;die;
             * */

            $big = array();
            $j = 0;
            $k = 0;

            $errors = 0;

            foreach ($line_of_text as $key => $value) {
                //print "<pre>";
                //var_dump($value);die;

                if($key != 0){
                    if( is_array($value)){
                        if(count($value) >= 3){

                            //**buscarlo en base de datos y sustituir con ID

                            //0 - SERVICIO
                            //1 - CATEGORIA
                            //2 - PESO
                            //3 - PRECIO
                            //4 - COMISION

                            $service = trim(strtoupper($value[0]));
                            $category = trim(strtoupper($value[1]));
                            $weight = number_format(floatval($value[2]), 2, ".", "");
                            $price = number_format(floatval($value[3]), 2, ".", "") ;
                            $comission = isset($value[4]) ? floatval($value[4]) : 0.00;

                            //print "<pre>";
                            //var_dump($weight);die;

                            $ObjService = $this->em->getRepository(Service::class)->findOneByName($service);
                            if($ObjService){
                                $serviceID = $ObjService->getId();
                                //var_dump($serviceID);die;
                            }
                            else{
                                $errors++;
                                $request->getSession()->getFlashBag()->add('warning', $service.', este servicio no existe.');
                                break;
                                //throw $this->createNotFoundException($service.', este servicio no existe.');
                            }

                            $ObjCategory = $this->em->getRepository(Category::class)->findOneByName($category);
                            if($ObjCategory){
                                $categoryID = $ObjCategory->getId();
                                //var_dump($categoryID);die;
                            }
                            else{
                                //throw $this->createNotFoundException($category.', esta categoria no existe.');
                                $errors++;
                                $request->getSession()->getFlashBag()->add('warning', $category.', esta categoria no existe.');
                                break;

                            }

//                            $objRate = $this->repository->findOneBy(
//                                array("service" => $serviceID, "category" => $categoryID, "weight" => $weight));

                            $getRate = $this->repository->getMyRate($serviceID, $categoryID, $weight);
                            //var_dump($getRate);die;

                            if($getRate != NULL){
                                //var_dump($objRate->getId());die;
                                //UPDATE
                                $objRate = $this->repository->find($getRate);
                                $objRate->setPrice($price);
                                $objRate->setCommission($comission);
                            }
                            else{
                                /*
                                print "<pre>";
                                print "new rate";
                                var_dump($price);
                                var_dump($weight);
                                var_dump($categoryID);
                                var_dump($serviceID);
                                die;
                                */

                                //INSERT
                                $objRate = new Rate();
                                $objRate->setCategory($ObjCategory);
                                $objRate->setService($ObjService);
                                $objRate->setPrice($price);
                                $objRate->setWeight($weight);
                                $objRate->setCommission($comission);
                            }

                            $this->em->persist($objRate);
                            //$this->em->flush();
                        }


                    }
                }


            }
            //die;

            $this->em->flush();

            //print "finished, now generate csv";die;
            /*
            $fp = fopen('newpa.csv', 'w');

            foreach ($big as $fields) {
                fputcsv($fp, $fields);
            }
            fclose($fp);
             *
             */

            if($errors > 0){
                $request->getSession()->getFlashBag()->add('warning',"Los registros no fueron ingresados, formato inválido");
            }

            $customHelper->flashSuccess($request);

            return $this->redirectToRoute('rate_load');
        }



        return $this->render('Rate/load.html.twig', array());

    }





}
