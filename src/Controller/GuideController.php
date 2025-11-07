<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Notifier\Message\SmsMessage;
use Symfony\Component\Notifier\TexterInterface;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Response;


use App\Entity\Guide;
use App\Entity\Claim;
use App\Entity\Dealer;
use App\Entity\Manifiesto;
use App\Entity\Service;
use App\Entity\Rate;
use App\Form\ClaimType;
use App\Form\GuideType;

use Symfony\Component\HttpFoundation\JsonResponse;
use App\Service\CustomHelper;
/**
 * Guide controller.
 *
 */
class GuideController extends AbstractController
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
        $this->repository = $this->em->getRepository(Guide::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }


    /**
     * Lists all Guide entities.
     *
     */
    
    
    public function filter($request){
        $_REQUEST = $request;
        
        $this->initialise();
        $em = $this->em;
        $user = $this->userLogged;

        $arrayFilter = array();
        $month = date('m');
        $year = date('Y');
//        $fdom = date('Y-m-d', mktime(0,0,0, $month, 1, $year));
//        $fdom2 = date('d/m/Y', mktime(0,0,0, $month, 1, $year));
        $fdom = date("Y-m-d");
        
        $arrayFilter["filter_dates"] = $filter_dates = 1;
        $arrayFilter["filter_created_from"] = $fdom;
        $arrayFilter["filter_created_to"] = date("Y-m-d");
        $arrayFilter["filter_tipo"] = 0;
//        $filter_created_from = $fdom2;
        $filter_created_from = date("Y-m-d");
        $filter_created_to = date("Y-m-d");
        $select_dealer = "";
        $code = "";
        $select_status = "";

        
        if(isset($_REQUEST["filter"])){
                /*
                print "<pre>";
                print_r($_REQUEST);die;
                 * */
            $select_dealer = $arrayFilter["filter_dealer"] = $_REQUEST["select_dealer"];
            $select_status = $arrayFilter["filter_status"] = $_REQUEST["select_status"];

            $filter_created_from = $arrayFilter["filter_created_from"] = $_REQUEST["created_from"];
            //$filter_created_from = $_REQUEST["created_from"];

            $filter_created_to = $arrayFilter["filter_created_to"] = $_REQUEST["created_to"];
            //$filter_created_to = $_REQUEST["created_to"];

            $filter_dates = isset($_REQUEST["filter_dates"]) && 1 ? 1 : 0;
            $arrayFilter["filter_dates"] = $filter_dates;
            
            $code = $_REQUEST["code"];
            $arrayFilter["code"] = $code;
        }

        $arrReturn = array('arrayFilter' => $arrayFilter,
                            'filter_created_from' => $filter_created_from,
                            'filter_created_to' => $filter_created_to,
                            'filter_dates' => $filter_dates,
                            'select_dealer' => $select_dealer,
                            'select_status' => $select_status,
                            'code' => $code,
                            );

        return $arrReturn;
    }
    
    
    public function indexAction(CustomHelper $customHelper)
    {
        $customHelper->setVars('guide');
        $this->initialise();

        $role = $this->role;

        $dealer = $this->em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array('name' => 'ASC'));

        return $this->render('Guide/index.html.twig', array(
            'dealer' => $dealer,
            'role' => $role,
        ));



    }


    public function listDatatablesAction(Request $request, CustomHelper $customHelper)
    {

        $customHelper->setVars('guide');
        // Set up required variables
        $this->initialise();

        //print "<pre>";
        //var_dump($_REQUEST);DIE;


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
            /* OLD CODE
            $draw = intval($request->request->get('draw'));
            $start = $request->request->get('start');
            $length = $request->request->get('length');
            $search = $request->request->get('search');
            $orders = $request->request->get('order');
            $columns = $request->request->get('columns');
            */

        }
        else // If the request is not a POST one, die hard
            die;


        // Process Parameters & filters
        $filters = array();

        $filters["filter_from"] = $_REQUEST["filter_from"];
        $filters["filter_to"] = $_REQUEST["filter_to"];
        $filters["filter_dealer"] = intval($_REQUEST["filter_dealer"]);
        $filters["filter_status"] = trim($_REQUEST["filter_status"]);
        $filters["filter_courier"] = trim($_REQUEST["filter_courier"]);

        $filters["filter_code"] = trim($_REQUEST["filter_code"]);
        $filters["filter_receiver"] = trim($_REQUEST["filter_receiver"]);
        $filters["filter_receiver_phone"] = trim($_REQUEST["filter_receiver_phone"]);
        $filters["filter_status_ex"] = trim($_REQUEST["filter_status_ex"]);

        $results = $this->em->getRepository(Guide::class)->getRequiredDTData($start, $length, $order, $search, $columns, $filters);

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
                    case 'code':
                    {
                        $responseTemp = $entity->getCode();
                        break;
                    }

                    case 'alternateCode':
                    {
                        $responseTemp = $entity->getAlternateCode();
                        break;
                    }
                    case 'createdAt':
                    {
                        $responseTemp = $entity->getManifiesto()->getCreatedAt()->format("d-m-Y");
                        break;
                    }

                    case 'service':
                    {
                        $responseTemp = $entity->getService()->getName();
                        break;
                    }
                    case 'tracking':
                    {

                        $responseTemp = $entity->getTracking()." -";
                        break;
                    }

                    case 'comment':
                    {
                        $comment = strlen($entity->getComment()) > 80 ? substr($entity->getComment(), 0 ,80)."..." : $entity->getComment();

                        $responseTemp = $comment;
                        break;
                    }
                    case 'status':
                    {

                        $responseTemp = $entity->getStatus();
                        break;
                    }
                    case 'newShipping':
                    {
                        $responseTemp = $entity->getNewShipping() != NULL ? $entity->getNewShipping()->getName() : '';
                        break;
                    }

                    case 'goToUsps':
                    {
                        $responseTemp = "<a target='blank' href='https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=1&text28777=&tLabels=".$entity->getTracking()."'>Ir a USPS</a>";
                        break;
                    }

                    case 'goToUps':
                    {
                        $responseTemp = "<a target='_blank' href='https://wwwapps.ups.com/WebTracking/track?trackNums=".$entity->getTracking()."'>Ir a UPS</a>";
                        break;
                    }

                    case 'uspsCharge':
                    {
                        $responseTemp =  "<a target='_blank' href='https://tools.usps.com/go/TrackConfirmAction?tRef=fullpage&tLc=1&text28777=&tLabels=".$entity->getTrackingCharge()."'>Ir a USPS</a>";
                        break;
                    }

                    case 'fedex':
                    {
                        $responseTemp = $entity->getFedex();
                        break;
                    }

                    case 'goToFedex':
                    {
                        $responseTemp = "<a target='_blank' href='https://www.fedex.com/apps/fedextrack/index.html?action=track&tracknumbers=".$entity->getFedex()."&locale=en_US&cntry_code=us'>Ir a FEDEX</a>";
                        break;
                    }
                    case 'dhl':
                    {
                        //$responseTemp = "<a target='_blank' href='http://www.dhl.com/es/express/tracking.html?AWB=".$entity->getDhl()."'>".$entity->getDhl()."</a>";
                        $responseTemp = "<a target='_blank' style='color:blue' href='https://www.dhl.com/gt-es/home/tracking/tracking-express.html?submit=1&tracking-id=".$entity->getDhl()."'>".$entity->getDhl()."</a>";
                        break;
                    }

                    case 'dealer':
                    {

                        if($entity->getManifiesto()){
                            $responseTemp = $entity->getManifiesto()->getDealer()->getName();
                        }
                        else{
                            $responseTemp = "--";
                        }

                        break;
                    }
                    case 'senderName':
                    {
                        $responseTemp = $entity->getSenderName();
                        break;
                    }

                    case 'senderPhone':
                    {
                        $responseTemp = $entity->getSenderPhone();
                        break;
                    }

                    case 'receiverName':
                    {
                        $responseTemp = $entity->getReceiverName();
                        break;
                    }

                    case 'receiverAddress':
                    {
                        $responseTemp = $entity->getReceiverAddress();
                        break;
                    }


                    case 'receiverPhone':
                    {
                        $responseTemp = $entity->getReceiverPhone();
                        break;
                    }
                    case 'weight':
                    {
                        $responseTemp = $entity->getWeight();
                        break;
                    }
                    case 'sentData':
                    {
                        $responseTemp = $entity->getSentData();
                        break;
                    }
                    case 'price':
                    {
                        $responseTemp = $entity->getPrice();
                        break;
                    }
                    case 'paymentStatus':
                    {
                        $responseTemp = $entity->getPaymentStatus();
                        break;
                    }
                    case 'claim':
                    {
                        if($entity->getClaim()){
                            $responseTemp = $entity->getClaim()->getClaim();
                        }
                        else{
                            $path = $this->generateUrl('process_claim', array('id' => $entity->getId()));
                            $responseTemp = "<a href='".$path."'>Agregar Reclamo</a>";

                        }
                        //$responseTemp = "";
                        //return $responseTemp;
                        break;
                    }
                    case 'trackingCharge':
                    {
                        $responseTemp = $entity->getTrackingCharge();
                        break;
                    }

                    case 'actions':
                    {

                        $urlEdit = $this->generateUrl('guide_edit', array('id' => $entity->getId()));
                        if($this->role == "DIGITADOR"){
                            $edit = "<a href='".$urlEdit."' target='_self'><div class='btn btn-sm btn-primary'><span class='fa fa-search'></span></div>  </a>&nbsp;&nbsp;";
                        }
                        else{
                            $edit = "<a href='".$urlEdit."' target='_blank'><div class='btn btn-sm btn-primary'><span class='fa fa-search'></span></div>  </a>&nbsp;&nbsp;";
                        }

                        $urlModal = "<a onclick='modalInfo(".$entity->getId().")' class='btn btn-sm btn-info viewModal' id='info_".$entity->getId()."'  href='#' data-toggle='modal' data-target='#myModal'>";
                        $urlModal .= "<span class='fa fa-info-circle'></span></a>";

                        $responseTemp = $edit.$urlModal;
                        break;
                    }

                }

                if($responseTemp !== null){
                    // Add the found data to the json
                    $response .= $customHelper->escapeJsonString($responseTemp);

                }

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
    
    
    public function viewAction(Request $request, CustomHelper $customHelper){
    	
    	//print "entra";die;
    	$this->initialise();

        $role = $this->role;
        $em = $this->em;

        $entity = $this->repository->viewGuide($request->request->get('guide_id'));
    	//var_dump($entity);die;
    	
        return $this->render('Guide/view.html.twig', array(
            'entity' => $entity,
            'role' => $role,
        ));    	
    	
    
    	
	
	}

    /**
     * Creates a new Guide entity.
     *
     */
    public function newAction(Request $request, CustomHelper $customHelper)
    {
    	$customHelper->setVars('guide');
        $this->initialise();
 
        $entity = new Guide();
        $form   = $this->createCreateForm($entity);
	
        return $this->render('Guide/new.html.twig', array(
            'entity' => $entity,
            'form' => $form->createView(),
        ));
    }

 

    /**
     * Finds and displays a Guide entity.
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
     * Displays a form to edit an existing Guide entity.
     *
     */
    public function editAction(Request $request, $id, CustomHelper $customHelper)
    {
        
    	$customHelper->setVars('guide');
    	$this->initialise();
    	
        $em = $this->em;
    	
		$role = $this->role;

    	//print $role;
    	//die;
        //$user = $this->getUser();
        //$role = $user->getRole();

        $entity = $this->repository->find($id);
				
        $deleteForm = $this->createDeleteForm($entity);

		
		$editForm = $this->createEditForm($entity);

        $editForm->handleRequest($request);
		
   		//die;

        return $this->render('Guide/edit.html.twig', array(
            'role' => $role,
            'entity' => $entity,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
			
		
    }
	
    /**
     * Deletes a Guide entity.
     *
     */
    public function deleteAction(Request $request, $id, CustomHelper $customHelper)
    {
    	
		$customHelper->setVars('guide');
        $this->initialise();
        
        $em = $this->em;

        $entity = $this->repository->find($id);		
        $form = $this->createDeleteForm($entity);
        $form->handleRequest($request);

        //if ($form->isSubmitted() && $form->isValid()) {


            if (!$entity) {
                throw $this->createNotFoundException('Unable to find Guide entity.');
            }

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
                        return $this->redirectToRoute('guide_index');
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
        return $this->redirectToRoute('guide_index');
    }

    /**
     * Creates a form to delete a Guide entity.
     *
     * @param Guide $role The Guide entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('guide_delete', array('id' => $entity->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
	
	
	
	
    /**
     * Creates a new Guide entity.
     *
     */
    public function createAction(Request $request, CustomHelper $customHelper)
    {
    	
		$customHelper->setVars('guide');
        $this->initialise();

        $em = $this->em;

        $entity = new Guide();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);
		/*print "<pre>";
		var_dump($form->getErrorsAsString());die;
		 * */
		 
        if ($form->isValid()) {
        	//$myRequest = $request->request->get("globalchain");
			//var_dump($myRequest);die;

			//var_dump($request->get("bank");die;
			
			//$entity->setName( strtoupper($customHelper->quitar_tildes(trim($myRequest["name"])))  );
			
            $em->persist($entity);
            $em->flush();


			$customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('guide_index'));
			 
        }
		/*
		else{
			print "FORMULARIO NO VALIDO";DIE;
		}
		 * */

        return $this->render('Guide/new.html.twig', array(
            'entity' => $entity,
            'form'   => $form->createView(),
        ));
    }

    /**
     * Creates a form to create a Guide entity.
     *
     * @param Guide $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm($entity)
    {
    	
        $form = $this->createForm(GuideType::class, $entity, array(
            'action' => $this->generateUrl('guide_create'),
            'method' => 'POST'
            //'client' => $this->userLogged,
        ));

        //$form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }	
	

	
	
    /**
    * Creates a form to edit a Guide entity.
    *
    * @param Guide $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createEditForm($entity)
    {
    	
		$this->initialise();
		$userRole = $this->role;
		//$userLogged = $session->get('user_logged');

        $form = $this->createForm(GuideType::class , $entity, array(
            'action' => $this->generateUrl('guide_update', array('id' => $entity->getId(), 'status' => $entity->getStatus())),
            
            'status' => $entity->getStatus(),
            'role' => $userRole,
        ));

        //$form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }
	
	
    /**
     * Edits an existing Guide entity.
     *
     */
    public function updateAction(Request $request, $id, CustomHelper $customHelper, TexterInterface $texter)
    {

        //print "<pre>";
        //var_dump($_REQUEST);die;
        //284554

        $customHelper->setVars('guide');
        $this->initialise();
        
        $em = $this->em;

        $userLogged = $user = $this->userLogged;
        $role = $this->role;

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Guide entity.');
        }
        $price_before = $entity->getPrice();
        $price_update = floatval($_REQUEST['backend_adminbundle_guide']['price']);

        /*
        print "<pre>";
        var_dump($_REQUEST);die;
        */
        $_REQUEST['backend_adminbundle_guide']['nit'] = "";

        $manifiesto_id = intval($entity->getManifiesto()->getId());
                    $manifiesto = $em->getRepository(Manifiesto::class)->find($manifiesto_id);

        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);
        $status_actual = $_GET['status'];
        //var_dump($status_actual );die;
//        echo $status_actual;

        //echo "<pre>";
        //var_dump($_REQUEST);die;
        if (isset($_REQUEST['backend_adminbundle_guide']['status'])) {
            $status = $_REQUEST['backend_adminbundle_guide']['status'];
        } else {
            $status = $entity->getStatus();
        }

        if ($manifiesto) {

            //print  "price before: $price_before - Price up: $price_update";
            $myPrice = $price_before - $price_update;
            //var_dump($myPrice);die;
            if ($myPrice < 0) {
                $entity->setPaymentStatus("Pendiente de Pago");
            } else{
                //$entity->setPaymentStatus("Cancelado");
            }

	            ///validar servicio anterior con nuevo servicio
                /// si el anterior era por cobrar y el nuevo no es por cobrar el status es pendiente de pago.
	            $serviceNew = $em->getRepository(Service::class)->find(intval($_REQUEST["backend_adminbundle_guide"]["service"]));
                $serviceNew = $serviceNew->getClaimPayment();

                $serviceBefore = $entity->getService()->getClaimPayment();
                if($serviceBefore == true && $serviceNew == false){
                    $entity->setPaymentStatus("Pendiente de Pago");
                    $manifiesto->setStatus("Pendiente de Pago");
                }
                //var_dump($serviceBefore);
                //var_dump($serviceNew);
                //die;

                $em->persist($entity);
                $em->persist($manifiesto);
                $em->flush();
	//            echo " --- total: $total";

	//                echo $status_actual . "------" . $status . "----" . $role;


	//            $service_name = $entity->getService()->getName();
	//            echo "<br>status: $status";
	//            echo "<br>name: $service_name";

                $service = $entity->getService();

                //si es por cobrar y status retorno o retorno a chicago
                if($service->getClaimPayment() == 1){

                    if ($status == "Retorno" || $status == "Retorno Chicago"){
                        $entity->setCommission(0.00);
                        $entity->setPrice(0.00);
                    }

                }

                //devolución siempre 0 y abandono no importa el servicio.

	            if ($status == "Devolución" || $status == "Abandono"){
	                $entity->setCommission(0.00);
	                $entity->setPrice(0.00);
	            }


	            $entity->setUpdatedBy($userLogged);
				$entity->setStatus($status);

                $em->persist($entity);
                $em->flush();


                            $manifiestoTotal = $em->getRepository(Manifiesto::class)->getTotalManifiesto($manifiesto_id);
            $manPayment = $em->getRepository(Manifiesto::class)->getPaymentManifiesto($manifiesto_id);
                $newBalance = floatval($manifiestoTotal - $manPayment);

                $manifiesto->setTotal(floatval($manifiestoTotal));
                $manifiesto->setBalance(floatval($newBalance));
                //var_dump($newBalance);die;
                if($newBalance > 0){
                    $manifiesto->setStatus("Pendiente de Pago");
                }

                $em->persist($manifiesto);
	            $em->flush();

                $detail = "Reporte General / Guía";
                $customHelper->addLog($detail, $user, 'UPDATE', $entity);


                //SEND SMS
                if($_REQUEST["status"] != $status){
                    //print "entra 1";die;

                    if($status == "Notice Left"){
                        //print "entra 2";die;

                        $receiverPhone = intval($_REQUEST["backend_adminbundle_guide"]["receiverPhone"]);

                        if($receiverPhone != 0){

                            try{

                                //$twilio = $this->get('twilio.api');//old way
                                $phoneTo = "+1".$receiverPhone;
                                //$phoneTo = "+50241550669";
                                $myComment = trim($_REQUEST["backend_adminbundle_guide"]["smsMessage"]);

                                if($myComment != "") {
                                    //$sms1 = "FAVOR RECOGER ENVÍO A OFICINA POSTAL, INDICAR QUE FUE ENVIADO DE CHICAGO IL. LLEVAR DOCUMENTO DE IDENTIFICACIÓN. DUDAS LLAMAR AL NUMERO 618-944-8208 ¡GRACIAS!";
                                    $sms1 = "Tenemos una entrega pendiente, por favor recolectar su paquete en la siguiente oficina:";

                                    $customHelper->sendMySMS($texter, $phoneTo, $sms1);
                                    $customHelper->sendMySMS($texter, $phoneTo, $myComment);

                                }
                            }
                            catch (Exception $e){
                                $error =  'Mensajería twilio: '.$e->getMessage();
                                $customHelper->flashWarningCustom($request, $error);
                                //die;
                            }
                        }

                    }
                }

	
	            $customHelper->flashSuccess($request);
	            return $this->redirect($this->generateUrl('guide_index', array('id' => $id)));				
				
			}

			 
        //}
		/*
				else{
					$string = (string) $editForm->getErrors(true, false);
					var_dump($string);die;
				}
		 * 
		 */

        return $this->render('Guide/edit.html.twig', array(
        	'role' => $role,
            'entity'      => $entity,
            'form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }




	public function changePriceAction(Request $request){
		
		
    	//$customHelper->setVars('guide');
        $this->initialise();
        $em = $this->em;

        $service = $_REQUEST["service"];
		$weight = floatval($_REQUEST["weight"]);
		$category = $_REQUEST["category"];
		
		//var_dump($_REQUEST);die;
		
		            $rate = $em->getRepository(Rate::class)->findOneBy(array("service" => $service, "weight" => $weight, "category" => $category));
            $service = $em->getRepository(Service::class)->find($service);

		//var_dump($rate->getId());die;

		$response = array();
		
		if($service){

		    /*
			if($service->getClaimPayment() == 1){//es por cobrar
				
				$response["price"] = 0.00;
				$response["commission"] = 0.00;
				$response["data"] = 1;			
				return new JsonResponse($response);
					
			}
			else{
				
				if($rate){
					$rate = $rate[0];
					$response["price"] = $rate->getPrice();
					$response["commission"] = $rate->getCommission();
					$response["data"] = 1;

				}
				else{
					$response["data"] = 0;

				}

				
			}
		    */

            if($rate){

                $response["price"] = $rate->getPrice();
                $response["commission"] = $rate->getCommission();
                $response["data"] = 1;

            }
            else{
                $response["data"] = 0;

            }

        }


		return new JsonResponse($response);
			
		
	}


    public function refundAction(Request $request, CustomHelper $customHelper){

        $customHelper->setVars('guideRefund');
        $this->initialise();

        $em = $this->em;
        $user = $this->userLogged;
        $role = $this->role;

        $_REQUEST["select_dealer"] = "";
        $_REQUEST["select_status"] = "Ingresado";
        $_REQUEST["created_from"] = "";
        $_REQUEST["created_to"] = "";
        $_REQUEST["filter_dates"] = 0;

        $arrayReturn = $this->filter($_REQUEST);
        /*
            $requestFrom = implode("-", array_reverse(explode("/", $_REQUEST["created_from"])));
            $requestTo = implode("-", array_reverse(explode("/", $_REQUEST["created_to"])));
            */

        $code = $arrayReturn['code'];

        $entities  = array();

        if(isset($_REQUEST["filter"])){
            if ($code != ""){
                //            echo $code; die;
                $entities = $this->repository->dataGuideCode($code);
            }
        }

        return $this->render('Guide/refund.html.twig', array(
            'entities' => $entities,
            'role' => $role,
        ));

    }


    public function refundUpdateAction(Request $request, $id, CustomHelper $customHelper)
    {
        //print "<pre>";
        //var_dump($_REQUEST);die;
        //aqui refundupdate chea

        $customHelper->setVars('guideRefund');
        $this->initialise();

        $em = $this->em;

        $userLogged = $user = $this->userLogged;
        $role = $this->role;

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Guide entity.');
        }


        $manifiesto_id = $entity->getManifiesto()->getId();
        $manifiesto = $em->getRepository(Manifiesto::class)->findOneById($manifiesto_id);

        if($manifiesto){

            ///validar servicio anterior con nuevo servicio
            /// si el anterior era por cobrar y el nuevo no es por cobrar el status es pendiente de pago.


            //devolución siempre 0.00 y abandono no importa el servicio.
            $entity->setStatus("Devolución");
            $entity->setCommission(0.00);
            $entity->setPrice(0.00);

            $em->persist($entity);
            $em->flush();

            $detail = "Guía cambio a devolución / Guía";
            $customHelper->addLog($detail, $user, 'UPDATE', $entity);

            $customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('guide_refund', array('id' => $id)));

        }


        return $this->render('Guide/servicesEdit.html.twig', array(
            'role' => $role,
            'entity'      => $entity,
        ));
    }


	public function servicesAction(Request $request, CustomHelper $customHelper){

        $customHelper->setVars('guideServices');
        $this->initialise();
        
        $em = $this->em;
        $user = $this->userLogged;
        $role = $this->role;


        $dealer = $em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array('name' => 'ASC'));
        $arrayReturn = $this->filter($_REQUEST);

        /*
            $requestFrom = implode("-", array_reverse(explode("/", $_REQUEST["created_from"])));
            $requestTo = implode("-", array_reverse(explode("/", $_REQUEST["created_to"])));
            */

        $filter_created_from = $arrayReturn['filter_created_from'];
        $filter_created_to = $arrayReturn['filter_created_to'];
        //var_dump($filter_created_from);die;

        $filter_dates = $arrayReturn['filter_dates'];
        $select_dealer = $arrayReturn['select_dealer'];
        $select_status = $arrayReturn['select_status'];
        $code = $arrayReturn['code'];


//        $entities = $this->repository->findAll();
        if ($code != ""){
//            echo $code; die;
            $entities = $this->repository->dataGuideCode($code);

        }else{
            $entities = $this->repository->dataGuides($select_dealer, $select_status, $arrayReturn['filter_created_to'], $arrayReturn['filter_created_from']);
        }


        return $this->render('Guide/services.html.twig', array(
            'dealer' => $dealer,
            'filter_created_from' => $filter_created_from,
            'filter_created_to' => $filter_created_to,
            'filter_dates' => $filter_dates,
            'select_dealer' => $select_dealer,
            'select_status' => $select_status,
            'entities' => $entities,
            'role' => $role,
        ));

    }


    public function servicesEditAction(Request $request, $id, CustomHelper $customHelper)
    {

        $customHelper->setVars('guideServices');
        $this->initialise();
        
        $em = $this->em;

        $role = $this->role;

        $entity = $this->repository->find($id);

        $deleteForm = $this->createDeleteForm($entity);

        $editForm = $this->createEditForm($entity);

        $editForm->handleRequest($request);

        //die;

        return $this->render('Guide/servicesEdit.html.twig', array(
            'role' => $role,
            'entity' => $entity,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));


    }


    /**
     * Edits an existing Guide entity.
     *
     */
    public function servicesUpdateAction(Request $request, $id, CustomHelper $customHelper)
    {
        //print "<pre>";
        //var_dump($_REQUEST);die;

        $customHelper->setVars('guideServices');
        $this->initialise();
        
        $em = $this->em;

        $userLogged = $user = $this->userLogged;
        $role = $this->role;

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Guide entity.');
        }
        $price_before = $entity->getPrice();
        $price_update = floatval($_REQUEST['new']['price']);

        $manifiesto_id = $entity->getManifiesto()->getId();
        $manifiesto = $em->getRepository(Manifiesto::class)->findOneById($manifiesto_id);

        if($manifiesto){

            ///validar servicio anterior con nuevo servicio
            /// si el anterior era por cobrar y el nuevo no es por cobrar el status es pendiente de pago.
            $serviceBefore = $entity->getService()->getClaimPayment();
            if($serviceBefore == false){
                $entity->setPaymentStatus("Pendiente de Pago");
                $manifiesto->setStatus("Pendiente de Pago");
            }
            //var_dump($serviceBefore);
            //var_dump($serviceNew);
            //die;

            //print  "price before: $price_before - Price up: $price_update";
            $myPrice = $price_before - $price_update;
            //var_dump($myPrice);die;
            if ($myPrice < 0) {
                $entity->setPaymentStatus("Pendiente de Pago");
            } else{
                //$entity->setPaymentStatus("Cancelado");
            }

            $em->persist($entity);
            $em->persist($manifiesto);
            $em->flush();
            //            echo " --- total: $total";

            //                echo $status_actual . "------" . $status . "----" . $role;


            //            $service_name = $entity->getService()->getName();
            //            echo "<br>status: $status";
            //            echo "<br>name: $service_name";

            $service = $entity->getService();
            $status = $entity->getStatus();

            //si es por cobrar y status retorno o retorno a chicago
            if($service->getClaimPayment() == 1){

                if ($status == "Retorno" || $status == "Retorno Chicago"){
                    $entity->setCommission(0.00);
                    $entity->setPrice(0.00);
                }

            }


            //devolución siempre 0 y abandono no importa el servicio.
            if ($status == "Devolución" || $status == "Abandono"){
                $entity->setCommission(0.00);
                $entity->setPrice(0.00);
            }

            $entity->setUpdatedBy($userLogged);
            $entity->setStatus($status);

            $service = intval($_REQUEST['backend_adminbundle_guide']['service']);
            $objService =  $em->getRepository(Service::class)->findOneById($service);

            $entity->setService($objService);
            $entity->setPrice(floatval($_REQUEST['new']['price']));
            $entity->setCommission(floatval($_REQUEST['new']['commission']));
            $entity->setWeight(floatval($_REQUEST['backend_adminbundle_guide']['weight']));
            $entity->setUpdatedBy($userLogged);

            ///update code
            $entity->setCode(intval(trim($_REQUEST["backend_adminbundle_guide"]["code"])));

            $em->persist($entity);
            $em->flush();


            $manifiestoTotal = $em->getRepository(Manifiesto::class)->getTotalManifiesto($manifiesto_id);
            //var_dump($manifiestoTotal);die;
            $manPayment = $em->getRepository(Manifiesto::class)->getPaymentManifiesto($manifiesto_id);
            $newBalance = floatval($manifiestoTotal - $manPayment);

            $manifiesto->setTotal(floatval($manifiestoTotal));
            $manifiesto->setBalance(floatval($newBalance));
            //var_dump($newBalance);die;
            if($newBalance > 0){
                $manifiesto->setStatus("Pendiente de Pago");
            }

            $em->persist($manifiesto);
            $em->flush();

            $detail = "Cambio de servicio / Guía";
            $customHelper->addLog($detail, $user, 'UPDATE', $entity);

            $customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('guide_services', array('id' => $id)));

        }


        return $this->render('Guide/servicesEdit.html.twig', array(
            'role' => $role,
            'entity'      => $entity,
        ));
    }


    public function replacementNewAction(Request $request, $id, CustomHelper $customHelper){

        $customHelper->setVars('guideReplacement');
        $this->initialise();
        
        $em = $this->em;

        $objGuide = $this->repository->find($id);
        if(!$objGuide){
            throw $this->createNotFoundException('Unable to find Guide entity.');
        }

                    $entity = $em->getRepository(Claim::class)->find($objGuide->getClaim()->getId());


        if(isset($_REQUEST["submit"])){
            $newGuideCode = trim($_REQUEST["newGuideCode"]);
            $entity->setNewGuideCode($newGuideCode);

            $em->persist($entity);
            $em->flush();

            $customHelper->flashSuccess($request);

            return $this->redirectToRoute('report_guidereplacement');
        }

        return $this->render('Guide/replacementNew.html.twig', array(
            'entity' => $entity,
            'guide' => $objGuide,

        ));

    }

}