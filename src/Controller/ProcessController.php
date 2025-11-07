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

use Symfony\Component\HttpFoundation\JsonResponse;
use App\Service\CustomHelper;
use Symfony\Component\Mailer\MailerInterface;

use App\Entity\Manifiesto;
use App\Entity\ManifiestoStatusLog;
use App\Entity\Guide;
use App\Entity\GuideStatusLog;
use App\Entity\Box;
use App\Entity\Claim;
use App\Entity\UserNotification;
use App\Entity\DealerRangeManifiesto;
use App\Entity\Dealer;
use App\Entity\Bank;
use App\Entity\Service;
use App\Entity\Rate;
use App\Entity\NotificationType;
use App\Entity\User;
use App\Entity\ClaimType;
use App\Entity\Tax;
use App\Entity\GlobalCountry;
use App\Form\BankType;


class ProcessController extends AbstractController
{


    private EntityManagerInterface $em;
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
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }
    
    public function preCheckReadCodeAction(Request $request, CustomHelper $customHelper){
		
        $customHelper->setVars('preCheck');
        $this->initialise();
        $em = $this->em;

        return $this->render('Process/preCheckReadCode.html.twig', array(
            //'entity' => $entity,
            
        ));		
		
    }
  
    public function preCheckAction(Request $request, CustomHelper $customHelper)
    {
        
    	$customHelper->setVars('preCheck');
    	$this->initialise();
    	
        $em = $this->em;
		
		//print "<pre>";
		/*var_dump($_REQUEST);
		die;
		 * 
		 */
		if (!isset($_REQUEST["backend_adminbundle"]["code"])){
			$this->redirectToRoute('process_pre_check_read_code');
        }
		
		$code = trim($_REQUEST["backend_adminbundle"]["code"]);
		
		//buscar el codigo dentro de dealer_range: manifiesto_from - manifiesto_to
		$man = $em->getRepository(Guide::class)->manifiestoExist($code);
                
                
        if(!empty($man)){
            $request->getSession()->getFlashBag()->add('warning','Este manifiesto ya ha sido ingresado');
            return $this->render('Process/preCheckReadCode.html.twig', array());
        }
		
		$dealer = $em->getRepository(DealerRangeManifiesto::class)->findByRange($code);
		//var_dump($dealer);die;
		
		
		if(!empty($dealer)){
			$dealerID = $dealer[0];

			$dealer = $em->getRepository(Dealer::class)->findById($dealerID);
			$dealer = $dealer[0];


			//$dealerRange = $dealerRange[0];
			$banks = $em->getRepository(Bank::class)->findAll();
			$services = $em->getRepository(Service::class)->findBy(array("enabled" => 1), array("name" => "ASC"));
			$rates = $em->getRepository(Rate::class)->findBy(array("category" => $dealer->getCategory()->getId(), "enabled" => 1));
			$taxes = $em->getRepository(Tax::class)->findAll();

			$arrTaxes = array();

			foreach ($taxes as $tax){
			    $arrTaxes[$tax->getWeight()] = $tax->getAmount();
            }

			$arrRates = array();	
			if($rates){
				foreach ($rates as $rate) {

				    $serviceID = $rate->getService()->getId();

					if($rate->getService()->getEnabled() == 1){

                        if(!isset($arrRates[$serviceID])) {

                            $arrRates[$serviceID] = array();
                            $arrRates[$serviceID]["name"] = $rate->getService()->getName();
                            $arrRates[$serviceID]["med_economic"] = $rate->getService()->getMedEconomic();
                            $arrRates[$serviceID]["med_express"] = $rate->getService()->getMedExpress();
                            $arrRates[$serviceID]["claim_payment"] = $rate->getService()->getClaimPayment();

                            $arrRates[$serviceID]["weights"] = array();

                        }

                        $arrRates[$serviceID]["weights"][$rate->getWeight()] = array();
                        $arrRates[$serviceID]["weights"][$rate->getWeight()]["price"] = $rate->getPrice();
                        $arrRates[$serviceID]["weights"][$rate->getWeight()]["commission"] = $rate->getCommission();

					}
				}
			}
			else{
				//die;
			}			

			//var_dump($dealer->getName());die;
			//banks
				
		}
		else{
			///flashWarning
			//$customHelper->flashWarning($request);
			$request->getSession()->getFlashBag()->add('warning','No existe Consecionario asignado a este código');
			return $this->render('Process/preCheckReadCode.html.twig', array());			
		}
		
		//if existe
			//devolver el objeto Dealer
			//devolver catalogo de bancos
			//devolver catalogo de servicios
			//
			
		//else
			//devolver false y mostrar un alert de que no existe y vuelva a intentar


        //print "<pre>";
		//var_dump($dealer->getCategory()->getId());die;

		//var_dump($arrRates);die;

        $country = $em->getRepository(GlobalCountry::class)->findById(1);
		$globalCountry = $country[0]->getName();


        return $this->render('Process/preCheck.html.twig', array(
            //'entity' => $entity,
            'manifiestoCode' => $code,
            'dealer' => $dealer,
            'banks' => $banks,
            'services' => $services,
            'banks' => $banks,
            'arrRates' => $arrRates,
            'arrTaxes' => $arrTaxes,
            'globalCountry' => $globalCountry
            //'dealerRange' => $dealerRange,
            
        ));
    }

    public function confirmReadCodeAction(Request $request, CustomHelper $customHelper){
		
        $customHelper->setVars('confirm');
        $this->initialise();
        $em = $this->em;

        return $this->render('Process/confirmReadCode.html.twig', array());		
		
    }
    
    public function confirmAction(Request $request, CustomHelper $customHelper){

        //print  "entra";die;
        $this->initialise();
        
		$guide = trim($_REQUEST["backend_adminbundle"]["code"]);
        $user = $this->userLogged;
        $role = $this->role;
        
//        $customHelper->setVars('guide');
        $em = $this->em;

        $entity = $em->getRepository(Guide::class)->findBy(array("code" => $guide, "enabled" => 1));
        
        if (!$entity) {
            $request->getSession()->getFlashBag()->add('warning','No existe este código de guía');
            return $this->render('Process/confirmReadCode.html.twig', array());
        }

        return $this->render('Process/confirm.html.twig', array(
            'entities' => $entity,
            'role' => $role,
        ));		
		
    }
    
    public function confirmSaveAction(Request $request, CustomHelper $customHelper){
    	
		/*
		print "<pre>";
		var_dump($_REQUEST);die;
		 * */
		
        $customHelper->setVars('confirm');
        $this->initialise();
        
        $em = $this->em;
        $user = $this->userLogged;
		
        $guide_id = $_REQUEST["guide_id"];
        $type_confirm = $_REQUEST["type_confirm"];
        
        $guide_save = $em->getRepository(Guide::class)->dataGuideConfirmSave($guide_id, 2);


        $objGuide = $em->getRepository(Guide::class)->findOneBy(array("code" => $guide_id, "enabled" => 1));
        //$objGuide = $objGuide[0];
        $detail = "Confirmación de guía";
        $customHelper->addLog($detail, $user, 'UPDATE', $objGuide);

        
        $customHelper->flashSuccess($request);
        return $this->redirectToRoute('process_confirm_read_code');
        
        
    }
    
    public function claimAction(Request $request, $id, CustomHelper $customHelper){
		
        $customHelper->setVars('guide');
        $this->initialise();
        
        $em = $this->em;

        
        return $this->render('Process/makeClaim.html.twig', array(
            'guide_id' => $id,
            //'claimTypes' => $claimTypes
            
        ));		
		
    }
    
    public function insertClaimAction(Request $request, CustomHelper $customHelper, MailerInterface $mailer){

        date_default_timezone_set('America/Guatemala');
        $customHelper->setVars('guide');
        $this->initialise();
        
        $em = $this->em;

        $userLogged = $this->userLogged;

        $guide_id = intval($_REQUEST["guide_id"]);
        //$claimType = intval($_REQUEST["claim_type_id"]);
        $claim = trim($_REQUEST["claim"]);
        
        $objClaim = new Claim();
//        $objClaim->setGuide($guide);

        $objClaim->setClaim($claim);

        //var_dump($claimType);die;

        $customHelper->blameOnMe($objClaim, 'create');

        //***************************
        //Agregar envío de correo

        $em->persist($objClaim);
        $objGuide = $em->getRepository(Guide::class)->find(intval($guide_id));
        $objGuide->setClaim($objClaim);
        $em->persist($objGuide);
        $em->flush();
        
        $codeg = $objGuide->getCode();
        $subject = "Reclamo del número de Guía $codeg";

        $to = 'scabrera@mayaexpress.com.gt';
        //$to = 'cheametal@gmail.com';
        //$myClaim = ">>".$objClaimType->getName().":".$claim;
        $message = $customHelper->generalTemplateMail($subject, $to, $claim , null, $mailer);

        ///CREATE USER_NOTIFICATION => CLAIM
        $objUserNotification = new UserNotification();
        $objUserNotification->setGuide($objGuide);
        //notificationType = RECLAMO id = 1
        $objNotificationType = $em->getRepository(NotificationType::class)->find(1);
        $objUserNotification->setNotificationType($objNotificationType);

        //por el momento solo enviar a Susan
        $objUser = $em->getRepository(User::class)->findOneByUsername("scabrera");

        $objUserNotification->setSentTo($objUser);
        $objUserNotification->setIsRead(0);
        $objUserNotification->setTitle($subject);
        $objUserNotification->setDescription($subject);
        $objUserNotification->setEnabled(1);
        $objUserNotification->setClaim($objClaim);

        $customHelper->blameOnMe($objUserNotification);

        $em->persist($objUserNotification);
        $em->flush();

        $request->getSession()->getFlashBag()->add('success','Reclamo ingresado correctamente');
        return $this->redirectToRoute('guide_index');
    }


    public function precheckSaveAction(Request $request, CustomHelper $customHelper){

        //print "<pre>";
        //var_dump($_REQUEST);die;
        date_default_timezone_set('America/Guatemala');
		
    	$customHelper->setVars('preCheck');
        $this->initialise();

        $em = $this->em;
        $user = $this->userLogged;
		$session = new Session();
		
		$arrManifiesto = $_REQUEST["manifiesto"];
		$userLogged = $this->userLogged;
		
		$dealer = $em->getRepository(Dealer::class)->findOneById(intval($arrManifiesto["dealer_id"]));
		//$dealer = $dealer[0];
		
		//***save manifiesto***
		$objManifiesto = new Manifiesto();
		$objManifiesto->setCode($arrManifiesto["code"]);
		$objManifiesto->setDealer($dealer);
        $customHelper->blameOnMe($objManifiesto, 'create');

		$objManifiesto->setObservation($arrManifiesto["observation"]);
		
		$balance = floatval($arrManifiesto["balance"]);
		$taxBalance = floatval($arrManifiesto["tax_balance"]);

		$totalPrice = floatval($arrManifiesto["totalPrice"]);
		$objManifiesto->setTotal($totalPrice);
        $totalTax = floatval($arrManifiesto["totalTax"]);
		$objManifiesto->setTaxTotal($totalTax);
		$objManifiesto->setBalance($balance);
		$objManifiesto->setTaxBalance($taxBalance);

		//FORMAS DE PAGO
        $now = date("Y-m-d H:i:s");
        $myDate = new \DateTime($now);

		$status = "";
		$objManifiesto->setCheckNumber(0);
		$objManifiesto->setCheckDate($myDate);
		$objManifiesto->setCheckAmount(0.00);

		$objManifiesto->setVoucherNumber(0);
		$objManifiesto->setVoucherDate($myDate);
		$objManifiesto->setVoucherAmount(0.00);
        $objManifiesto->setVoucher2Number(0);
        $objManifiesto->setVoucher2Date($myDate);
        $objManifiesto->setVoucher2Amount(0.00);
        $objManifiesto->setVoucher3Number(0);
        $objManifiesto->setVoucher3Date($myDate);
        $objManifiesto->setVoucher3Amount(0.00);
        //taxes
        $objManifiesto->setTaxVoucherNumber(0);
        $objManifiesto->settaxVoucherDate($myDate);
        $objManifiesto->setTaxVoucherAmount(0.00);

        if(trim($arrManifiesto["extra_amount"]) != ""){
            $objManifiesto->setExtraAmount(floatval($arrManifiesto["extra_amount"]));
        }
        if(trim($arrManifiesto["extra_description"]) != ""){
            $objManifiesto->setExtraDescription(trim($arrManifiesto["extra_description"]));
        }

        if(isset($_REQUEST["checkCreditPayment"])){
			$objManifiesto->setCredit(floatval($arrManifiesto["credit"]));
			$status = "Pendiente de Pago";
			//$objManifiesto->setStatus($status);
			$credit = $dealer->getCredit();
			$newCredit = $credit - $totalPrice;
			$dealer->setCredit($newCredit);
			
	        $em->persist($dealer);
	        $em->flush();				
			
		}
		else{
			//cheque
			if($arrManifiesto["check_number"] != "N/A"){
				$objManifiesto->setCheckNumber(trim($arrManifiesto["check_number"]));
				$checkBank =  $em->getRepository(Bank::class)->findById(intval($arrManifiesto["check_bank"]));
				$checkBank = $checkBank[0];
				$objManifiesto->setCheckBank($checkBank);
				$checkDate = trim($arrManifiesto["check_date"]);
				$objManifiesto->setCheckDate(new \DateTime($checkDate));
				$objManifiesto->setCheckAmount(floatval($arrManifiesto["check_amount"]));
			}

			//voucher 1
			if(trim($arrManifiesto["voucher_number"]) != ""){
				$objManifiesto->setVoucherNumber(trim($arrManifiesto["voucher_number"]));
				$voucherBank =  $em->getRepository(Bank::class)->findById(intval($arrManifiesto["voucher_bank"]));
				$voucherBank = $voucherBank[0];
				$objManifiesto->setVoucherBank($voucherBank);
				$voucherDate = trim($arrManifiesto["voucher_date"]);
				$objManifiesto->setVoucherDate(new \DateTime($voucherDate));
				$objManifiesto->setVoucherAmount(floatval($arrManifiesto["voucher_amount"]));
			}

            //tax voucher 1
            if(trim($arrManifiesto["tax_voucher_number"]) != ""){
                $objManifiesto->setTaxVoucherNumber(trim($arrManifiesto["tax_voucher_number"]));
                $voucherBank =  $em->getRepository(Bank::class)->findById(intval($arrManifiesto["tax_voucher_bank"]));
                $voucherBank = $voucherBank[0];
                $objManifiesto->setTaxVoucherBank($voucherBank);
                $voucherDate = trim($arrManifiesto["tax_voucher_date"]);
                $objManifiesto->setTaxVoucherDate(new \DateTime($voucherDate));
                $objManifiesto->setTaxVoucherAmount(floatval($arrManifiesto["tax_voucher_amount"]));
            }

            //voucher 2
            if(trim($arrManifiesto["voucher2_number"]) != ""){
                $objManifiesto->setVoucher2Number(trim($arrManifiesto["voucher2_number"]));
                $voucherBank =  $em->getRepository(Bank::class)->findById(intval($arrManifiesto["voucher2_bank"]));
                $voucherBank = $voucherBank[0];
                $objManifiesto->setVoucher2Bank($voucherBank);
                $voucherDate = trim( $arrManifiesto["voucher2_date"]);
                $objManifiesto->setVoucher2Date(new \DateTime($voucherDate));
                $objManifiesto->setVoucher2Amount(floatval($arrManifiesto["voucher2_amount"]));
            }

            //voucher 3
            if(trim($arrManifiesto["voucher3_number"]) != ""){
                $objManifiesto->setVoucher3Number(trim($arrManifiesto["voucher3_number"]));
                $voucherBank =  $em->getRepository(Bank::class)->findById(intval($arrManifiesto["voucher3_bank"]));
                $voucherBank = $voucherBank[0];
                $objManifiesto->setVoucher3Bank($voucherBank);
                $voucherDate = trim($arrManifiesto["voucher3_date"]);
                $objManifiesto->setVoucher3Date(new \DateTime($voucherDate));
                $objManifiesto->setVoucher3Amount(floatval($arrManifiesto["voucher3_amount"]));
            }

            //cash
			if(intval($arrManifiesto["cash"]) != 0){
				$objManifiesto->setCash(floatval($arrManifiesto["cash"]));
			}
			//tax cash
            if(intval($arrManifiesto["tax_cash"]) != 0){
                $objManifiesto->setTaxCash(floatval($arrManifiesto["tax_cash"]));
            }

			if($balance > 0 || $taxBalance > 0){
				$status = "Pendiente de Pago";					
			}
			else{
				$status = "Cancelado";

			}			


			/*
			$status = "Pendiente de Pago";
			$objManifiesto->setStatus($status);	*/			
		}

		$objManifiesto->setStatus($status);
		
        $em->persist($objManifiesto);
		$em->flush();

		//***manifiesto_status_log***
		$objManifiestoStatusLog = new ManifiestoStatusLog();

		$customHelper->blameOnMe($objManifiestoStatusLog, 'create');

		$objManifiestoStatusLog->setManifiesto($objManifiesto);
		$objManifiestoStatusLog->setStatus($status);
		
        $em->persist($objManifiestoStatusLog);
        $em->flush();
		
		//***save guides***
		$arrGuides = $_REQUEST["guides"];
		foreach ($arrGuides as $key => $guide) {

			$objGuide = new Guide();
			$guideCode = trim($guide["code"]);
			$objGuide->setCode($guideCode);
			$objGuide->setAlternateCode(trim($guide["alternate_code"]));
			$objGuide->setManifiesto($objManifiesto);

			$intService = intval($guide["service"]);
			            $service =  $em->getRepository(Service::class)->find($intService);
			$objGuide->setService($service);

			$objGuide->setSentData("");
			$now = date("Y-m-d H:i:s");
			$myTime = new \DateTime($now);
            $objGuide->setSentAt($myTime);
			$objGuide->setWeight(floatval($guide["weight"]));
			
			if(intval($guide["price"] == 0)){
				$objGuide->setPrice(floatval($guide["claim_price"]));
			}
			else{
				$objGuide->setPrice(floatval($guide["price"]));
			}
			
			$objGuide->setCommission(floatval($guide["commission"]));
			$objGuide->setUpdatedBy($userLogged);
			
			
			//status
			$guideStatus = "Ingresado";
            /*
			if( (intval($service->getMedEconomic()) == 1 && intval($dealer->getMedEconomic()) == 1 )  || ($service->getMedExpress() == 1 && $dealer->getMedExpress() == 1)) {
				$guideStatus = "Pendiente de Autorizacion";
				$guideStatusPayment = "Pendiente de Pago";
			}
             */


			//status payment
			//si la forma de pago es credito 
				//pendiente de pago
			//else
				//if balance es = 0 //cancelado
				//pendiente de pago			
			if(isset($_REQUEST["checkCreditPayment"])){
				$guideStatusPayment = "Pendiente de Pago";
			}
			else{
				if($balance > 0){
					$guideStatusPayment = "Pendiente de Pago";
				}
				else{
					$guideStatusPayment = "Cancelado";
				}
			}
			
			$objGuide->setStatus($guideStatus);
            $objGuide->setPaymentStatus($guideStatusPayment);
	        $em->persist($objGuide);
			$em->flush();

            //IF SERVICE IS REPOSICION == 24 UPDATE THE CLAIM FOR REPLACED GUIDE CODE
            if($intService == 24){
                $objClaim = $em->getRepository(Claim::class)->findOneBy(array("newGuideCode" => $guideCode, "replaced" => 0));
                $objClaim->setReplaced(1);
                $objClaim->setNewGuide($objGuide);
                $em->persist($objClaim);
                $em->flush();
            }

			
			//**guide_status_log**
			$objGuideStatusLog = new GuideStatusLog();


			$objGuideStatusLog->setGuide($objGuide);
			$objGuideStatusLog->setStatus($guideStatus);
            $customHelper->blameOnMe($objGuideStatusLog, 'create');
                        
	        $em->persist($objGuideStatusLog);
			$em->flush();

            $detail = "Check-in nueva guía ";
            $customHelper->addLog($detail, $user, 'CREATE', $objGuide);

		}	
        
        //$em->flush();
		$customHelper->flashSuccess($request);
		return $this->redirectToRoute('process_pre_check_read_code');
		
	}

		 
  
    public function checkoutAction(Request $request, CustomHelper $customHelper)
    {
		
    	$customHelper->setVars('checkout');
        $this->initialise();

        $em = $this->em;
        $user = $this->userLogged;
        
		$session = new Session();
		$userLogged = $this->userLogged;	
		
		//print "entra";die;
			
		if(isset($_REQUEST["submit"])){
		
				
			//***SAVE GUIDES***
			if(isset($_REQUEST["guides"])){
				
				////SAVE
				
				$boxCode = trim($_REQUEST["box"]);
				
				$objBox = new Box();
				$objBox->setCode($boxCode);
				$objBox->setCreatedBy($userLogged);
				
		        $em->persist($objBox);
		        $em->flush();
				
				$arrGuides = $_REQUEST["guides"];
				foreach ($arrGuides as $key => $guide) {
								
					            $objGuide = $em->getRepository(Guide::class)->findOneByCode(trim($guide["code"]));
							
					if(!$objGuide){
						$customHelper->flashWarningCustom($request, "El código de guía ".$guide["code"]." es inválido, ingresar uno existente.");
						//return $this->redirectToRoute('process_checkout');
                        continue;
					}	

					$objGuide->setBox($objBox);
					$objGuide->setUpdatedBy($userLogged);
					//en transito 
					$guideStatus = "En transito";
					$objGuide->setStatus($guideStatus);
			        $em->persist($objGuide);
			        //$em->flush();

					$objGuideStatusLog = new GuideStatusLog();


					$objGuideStatusLog->setGuide($objGuide);
					$objGuideStatusLog->setStatus($guideStatus);
                    $customHelper->blameOnMe($objGuideStatusLog, 'create');
					
			        $em->persist($objGuideStatusLog);
			        //$em->flush();

                    $detail = "CHECKOUT";
                    $customHelper->addLog($detail, $user, 'UPDATE', $objGuide);
					
												
				}
				$em->flush();
			}

			
			$customHelper->flashSuccess($request);
			return $this->redirectToRoute('process_checkout');
				
	    }
		
        return $this->render('Process/checkout.html.twig', array(
            //'entity' => $entity,
            
        ));		
	}


	public function checkGuideRangeAction(Request $request){
		
	}
        
        //*** Borrar Manifiestos*****
        public function deleteManifiestoReadAction(Request $request, CustomHelper $customHelper){
		
            $customHelper->setVars('deletemanifiesto');
            $this->initialise();

            $em = $this->em;

            return $this->render('Process/deleteManifiestoRead.html.twig', array());		
		
        }

        public function deleteManifiestoAction(Request $request, CustomHelper $customHelper){
        


            $customHelper->setVars('deletemanifiesto');
            $this->initialise();

            $em = $this->em;

            $manifiesto_id = $_REQUEST["backend_adminbundle"]["code"];

                    $entity = $em->getRepository(Manifiesto::class)->findOneBy(array("code" => $manifiesto_id, "enabled" => 1));
        $guides = $em->getRepository(Guide::class)->findByManifiesto($entity);
            
            if (!$entity) {
                $request->getSession()->getFlashBag()->add('warning','No existe este código de manifiesto');
                return $this->render('Process/deleteManifiestoRead.html.twig', array());
            }

            return $this->render('Process/deleteManifiesto.html.twig', array(
                'entity' => $entity,
                'guides' => $guides,
            ));		

        }

        public function deleteManifiestoConfirmAction(Request $request, CustomHelper $customHelper){
    //        print "<pre>";
    //        var_dump($_REQUEST);die;

            $customHelper->setVars('deletemanifiesto');
            $this->initialise();
            $em = $this->em;

            $manifiesto_id = intval($_REQUEST["man_id"]);

            $manifiesto_delete = $em->getRepository(Guide::class)->deleteManifiesto($manifiesto_id);

            $customHelper->flashSuccess($request);
            return $this->redirectToRoute('process_delete_manifiesto_read');


        }
        
        //*** Borrar Guía*****
        public function deleteGuideReadAction(Request $request, CustomHelper $customHelper){
		
            $customHelper->setVars('deleteguide');
            $this->initialise();

            $em = $this->em;

            return $this->render('Process/deleteGuideRead.html.twig', array());		
		
        }

        public function deleteGuideAction(Request $request, CustomHelper $customHelper){
        


            $customHelper->setVars('deletemanifiesto');
            $this->initialise();

            $em = $this->em;

            $guide_id = $_REQUEST["backend_adminbundle"]["code"];

            $entity = $em->getRepository(Guide::class)->findOneByCode($guide_id);
            
            if (!$entity) {
                $request->getSession()->getFlashBag()->add('warning','No existe este código de guía');
                return $this->render('Process/deleteGuideRead.html.twig', array());
            }

            return $this->render('Process/deleteGuide.html.twig', array(
                'entity' => $entity,
            ));		

        }

        public function deleteGuideConfirmAction(Request $request, CustomHelper $customHelper){


            $customHelper->setVars('deletemanifiesto');
            $this->initialise();
            $em = $this->em;

            $manifiesto_id = $_REQUEST["man_id"];
            $guide_id = $_REQUEST["guide_id"];
            $price = $_REQUEST["price"];

            $manifiesto_delete = $em->getRepository(Guide::class)->deleteGuide($guide_id, $manifiesto_id, $price);

            $customHelper->flashSuccess($request);
            return $this->redirectToRoute('process_delete_guide_read');


        }
        
        
        public function inspectExistAction(Request $request)
        {

            $this->initialise();
            $em = $this->em;

            $guide = trim($_REQUEST["guide"]);


            $exist = $em->getRepository(Guide::class)->guideExist($guide);

            print $exist;
            die;
        }



    public function inspectExistAlternateAction(Request $request){

        $this->initialise();
        $em = $this->em;

        $guide = trim($_REQUEST["guide"]);


        $exist = $em->getRepository(Guide::class)->guideExist($guide);

        print $exist;
        die;
    }
        
        public function inspectAction(Request $request){

            $this->initialise();
            $em = $this->em;

            $guide = trim($_REQUEST["guide"]);
            $dealer = intval($_REQUEST["dealer"]);


            $inspect = $em->getRepository(Guide::class)->checkGuideRange($guide, $dealer);
            
            print $inspect;
            die;
        }
        
        public function inspectBoxAction(Request $request){

            $this->initialise();
            $em = $this->em;

            $guide = trim($_REQUEST["guide"]);

            $inspect_box = $em->getRepository(Guide::class)->guideBoxExist($guide);
            
            //$arrReturn = array("result" => 0);
            
            //if($inspect_box != 0){
				$arrReturn = array("result" => $inspect_box[0]);        	
            //}

            
            return new JsonResponse($arrReturn);
           
        }


    public function checkReplacementAction(Request $request){

        $this->initialise();
        $em = $this->em;

        $guideCode = trim($_REQUEST["guide"]);
        
        if($guideCode == ""){
            $arrReturn = array("result" => 0);
        }
        else{
            $isOk = $em->getRepository(Claim::class)->findOneBy(array("newGuideCode" => $guideCode, "replaced" => 0));

            if($isOk != NULL){//is OK
                $arrReturn = array("result" => 1);
            }
            else{
                $arrReturn = array("result" => 0);
            }


        }

        return new JsonResponse($arrReturn);

    }

}
