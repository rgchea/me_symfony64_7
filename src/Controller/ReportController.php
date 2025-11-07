<?php

namespace App\Controller;

use phpDocumentor\Reflection\DocBlock\Tags\Var_;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Session\Session;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Component\HttpFoundation\ResponseHeaderBag;
// Include PhpSpreadsheet required namespaces
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;



use App\Entity\Manifiesto;
use App\Entity\ManifiestoStatusLog;
use App\Entity\Guide;
use App\Entity\GuideStatusLog;
use App\Entity\Box;
use App\Entity\Claim;
use App\Entity\Dealer;
use App\Entity\Service;
use App\Entity\User;
use App\Entity\ClaimType;
use App\Service\CustomHelper;

class ReportController extends AbstractController
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
    
    
    public function filter($request){

        date_default_timezone_set('America/Guatemala');
        $this->initialise();
		
		$_REQUEST = $request;

        $em = $this->em;
		$user = $this->userLogged;
		
		$arrayFilter = array();
        $month = date('m');
        $year = date('Y');
		$fdom = date('Y-m-d', mktime(0,0,0, $month, 1, $year));
        $fdom2 = date('Y-m-d', mktime(0,0,0, $month, 1, $year));
		$arrayFilter["filter_dates"] = $filter_dates = 1;
		$arrayFilter["filter_created_from"] = $fdom;
		$arrayFilter["filter_created_to"] = date("Y-m-d");
        $arrayFilter["filter_tipo"] = 0;
        $arrayFilter["filter_courier"] = "";
        $arrayFilter["filter_courier_dhl"] = "";
        $arrayFilter["filter_courier_fedex"] = "";
        $arrayFilter["filter_courier_ups"] = "";
//		$arrayFilter["select_year"] = date("Y");

		$filter_created_from = $fdom2;
		$filter_created_to = date("Y-m-d");

        $filter_claim_status = $arrayFilter['filter_claim_status'] = 0;
        $filter_claim_type = $arrayFilter['filter_claim_type'] = 0;


//		$select_year = date("Y");
//                $year_before = $select_year - 2;
//                $arrayFilter["year_before"] = $year_before;
        $select_dealer = "";
        $select_tipo = 0;
        $select_courier = "";
        $select_courier_dhl = "";
        $select_courier_fedex = "";
        $select_courier_ups = "";

		if(isset($_REQUEST["filter"])){
			/*
			print "<pre>";
			print_r($_REQUEST);die;
			 * */
			if(isset($_REQUEST["select_tipo"])){
                $select_tipo = $arrayFilter["filter_tipo"] = $_REQUEST["select_tipo"];
            }

            if(isset($_REQUEST["select_courier"])){
                $select_courier = $arrayFilter["filter_courier"] = $_REQUEST["select_courier"];
            }

            if(isset($_REQUEST["select_courier_dhl"])){
                $select_courier_dhl = $arrayFilter["filter_courier_dhl"] = $_REQUEST["select_courier_dhl"];
            }
            if(isset($_REQUEST["select_courier_fedex"])){
                $select_courier_fedex = $arrayFilter["filter_courier_fedex"] = $_REQUEST["select_courier_fedex"];
            }
            if(isset($_REQUEST["select_courier_ups"])){
                $select_courier_ups = $arrayFilter["filter_courier_ups"] = $_REQUEST["select_courier_ups"];
            }

            if(isset($_REQUEST["select_dealer"])){
                $select_dealer = $arrayFilter["filter_dealer"] = $_REQUEST["select_dealer"];
            }


			$filter_created_from = $requestFrom = $_REQUEST["created_from"];
			$filter_created_to = $requestTo = $_REQUEST["created_to"];
			
			$arrayFilter["filter_created_from"] = $requestFrom;
			//var_dump($arrayFilter["filter_created_from"]);die;
			
			//var_dump($arrayFilter["filter_created_from"]);die;
			//$filter_created_from = $_REQUEST["created_from"];
			
			$arrayFilter["filter_created_to"] = $requestTo;
			//$filter_created_to = $_REQUEST["created_to"];
			
			$filter_dates = isset($_REQUEST["filter_dates"]) && 1 ? 1 : 0;
			$arrayFilter["filter_dates"] = $filter_dates;
			
//			$select_year = $arrayFilter["select_year"] = $_REQUEST["select_year"];
//			$year_before = $arrayFilter["year_before"] = $select_year - 2;

            if(isset($_REQUEST["filter_claim_status"])){
                $filter_claim_status = $arrayFilter['filter_claim_status'] = $_REQUEST["filter_claim_status"];
            }

            if(isset($_REQUEST["filter_claim_type"])){
                $filter_claim_type = $arrayFilter['filter_claim_type'] = $_REQUEST["filter_claim_type"];
            }

		}
                
//		$repair_status = $em->getRepository('SolucelAdminBundle:RepairStatus')->findAll(); 	
		
		//var_dump($arrayFilter);die;

		$arrReturn = array('arrayFilter' => $arrayFilter,
                            'filter_created_from' => $filter_created_from,
                            'filter_created_to' => $filter_created_to,
                            'filter_dates' => $filter_dates,
                            'select_dealer' => $select_dealer,
                            'select_tipo' => $select_tipo,
                            'select_courier' => $select_courier,
                            'select_courier_dhl' => $select_courier_dhl,
                            'select_courier_fedex' => $select_courier_fedex,
                            'select_courier_ups' => $select_courier_ups,
    //                                    'select_year' => $select_year,
    //                                    'year_before' => $year_before,
                            'filter_claim_type' => $filter_claim_type,
                            'filter_claim_status' => $filter_claim_status
                            );

		return $arrReturn;

	}	
	
    public function accountStatementAction(Request $request, CustomHelper $customHelper){
        
        $customHelper->setVars('accountStatement');
        $this->initialise();
        $em = $this->em;
        $dealer = $em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array("name" => "ASC"));
        

        
        $arrayReturn = $this->filter($_REQUEST);
                   
        $filter_created_from = $arrayReturn['filter_created_from'];
        $filter_created_to = $arrayReturn['filter_created_to'];
                
        
        $filter_dates = $arrayReturn['filter_dates'];
        $select_dealer = $arrayReturn['select_dealer'];
        $accounts = $em->getRepository(Guide::class)->dataAccounts($select_dealer,  $arrayReturn["arrayFilter"]['filter_created_to'], $arrayReturn['arrayFilter']['filter_created_from']);
//        foreach ($accounts as $ac){
//            
//        }
        return $this->render('Report/accountStatement.html.twig', array(
            'dealer' => $dealer,
            'filter_created_from' => $filter_created_from,
            'filter_created_to' => $filter_created_to,
            'filter_dates' => $filter_dates,
            'select_dealer' => $select_dealer,
            'accounts' => $accounts,
        ));
    }
    
    
    public function returnClaimAction(Request $request, CustomHelper $customHelper){

        date_default_timezone_set('America/Guatemala');

        $customHelper->setVars('returnClaim');
        $this->initialise();
        
        $em = $this->em;
        $dealer = $em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array("name" => "ASC"));
        
        $arrayReturn = $this->filter($_REQUEST);
        
        /*
        $filter_created_from = $arrayReturn['filter_created_from'];
        $filter_created_to = $arrayReturn['filter_created_to'];
        */
        
	    $filter_created_from = $arrayReturn['filter_created_from'];
	    $filter_created_to = $arrayReturn['filter_created_to'];
	    
	    
        $filter_dates = $arrayReturn['filter_dates'];
        $select_dealer = $arrayReturn['select_dealer'];
        $select_tipo = $arrayReturn['select_tipo'];
        $claims = $em->getRepository(Guide::class)->dataClaim($arrayReturn["arrayFilter"]['filter_created_from'], $arrayReturn["arrayFilter"]['filter_created_to']);
        $returns = $em->getRepository(Guide::class)->findByStatus('Retorno');
        $countclaims = count($claims);
        $countreturns = count($returns);
        $selectedr = "";
        if($select_tipo == 1)$selectedr = 'selected="selected"';
        return $this->render('Report/returnClaim.html.twig', array(
            'dealer' => $dealer,
            'filter_created_from' => $filter_created_from,
            'filter_created_to' => $filter_created_to,
            'filter_dates' => $filter_dates,
            'select_tipo' => $select_tipo,
            'select_dealer' => $select_dealer,
            'claims' => $claims,
            'returns' => $returns,
            'countclaims' => $countclaims,
            'countreturns' => $countreturns,
            'selectedr' => $selectedr, 
        ));
    }
    
    public function commissionReceivableAction(Request $request, CustomHelper $customHelper){

        date_default_timezone_set('America/Guatemala');

        $customHelper->setVars('commissionReceivable');
        $this->initialise();
        
        $em = $this->em;
        $dealer = $em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array("name" => "ASC"));


        if(isset($_REQUEST["toExcel"])) {

            if($_REQUEST["toExcel"] == "true"){

                //print "<pre>";
                //var_dump($_REQUEST);
                //die;

                $table = $_REQUEST["tableArray"];

                //$first_value = reset($array); // First element's value
                $first_key = key($table); // First element's key

                $firstValue = $table[$first_key];
                $dealer = trim($firstValue["dealer"]);
                $total = 0;

                if (is_array($table)) {

                    $newTable = array();
                    $myCount = count($table);

                    $count = 0;
                    foreach ($table as $guide => $row){

                        if(trim($row["dealer"]) != trim($dealer)){
                            $newTable[$dealer."_total"] = array(null, null, null, null, null, "TOTAL", $total, null);
                            $dealer = trim($row["dealer"]);
                            $total = 0;
                        }

                        $newTable[$guide] = $row;
                        $total += floatval($row["commission"]);
                        $count++;

                        if($count == $myCount ){
                            $newTable[$dealer."_total"] = array(null, null, null, null, null, "TOTAL", $total, null);
                        }
                    }

                    //ADD HEADERS
                    $headers = array("CONCESIONARIO", "FECHA", "GUIA", "SERVICIO", "PESO", "COSTO", "COMISION", "STATUS");

                    //adds element at the beginnig of array
                    array_unshift($newTable, $headers);

                    $spreadsheet = new Spreadsheet();

                    /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
                    $sheet = $spreadsheet->getActiveSheet();

                    $sheet
                        ->fromArray(
                            $newTable,  // The data to set
                            NULL,        // Array values with this value will not be set
                            'A1'         // Top left coordinate of the worksheet range where
                        //    we want to set these values (default is A1)
                        );

                    $sheet->setTitle("Comisiones");

                    // Create your Office 2007 Excel (XLSX Format)
                    $writer = new Xlsx($spreadsheet);

                    // Create a Temporary file in the system
                    $now = date("Y-m-d");
                    $fileName = 'Comisiones_'.$now.'.xlsx';
                    $temp_file = tempnam(sys_get_temp_dir(), $fileName);

                    // Create the excel file in the tmp directory of the system
                    $writer->save($temp_file);

                    // Return the excel file as an attachment
                    return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
                }

            }

        }


        if(isset($_REQUEST["filter"])){

        	
            $arrayReturn = $this->filter($_REQUEST);
            
		    $filter_created_from = $arrayReturn['filter_created_from'];
		    $filter_created_to = $arrayReturn['filter_created_to'];
		    
            $filter_dates = $arrayReturn['filter_dates'];
            $select_dealer = $arrayReturn['select_dealer'];
            //print "entra1";
        	 $commissions = $em->getRepository(Guide::class)->dataCommissions($select_dealer,$arrayReturn["arrayFilter"]['filter_created_from'], $arrayReturn["arrayFilter"]['filter_created_to']);
            
        }else{
        	//print "entra2";die;
            $month = date('m');
            $year = date('Y');
            //$filter_created_to = date('d/m/Y', mktime(0,0,0, $month, 1, $year));
            $last_date = date( 'Y-m-d', strtotime ('-1 month'));
            $last_month = date('m', strtotime($last_date));
            $year_from = date('Y', strtotime($last_date));
            $filter_created_from = date('Y-m-d', mktime(0,0,0, $last_month, 1, $year_from));
            $filter_created_to = date('Y-m-d', mktime(0,0,0, $last_month, 31, $year_from));

			//Last date of current month.
			$lastDateOfMonth = date("Y-m-t", strtotime($filter_created_from));
			//echo $lastDateOfMonth;
            
            
            $filter_dates = "";
            $select_dealer = 0;
            
            $commissions = $em->getRepository(Guide::class)->dataCommissions($select_dealer, $filter_created_from, $filter_created_to);

        }
        
       //print "heeey";
        //die;
        return $this->render('Report/commissionReceivable.html.twig', array(
            'dealer' => $dealer,
            'filter_created_from' => $filter_created_from,
            'filter_created_to' => $filter_created_to,
            'filter_dates' => $filter_dates,
            'select_dealer' => $select_dealer,
            'commissions' => $commissions,
        ));
    }
    
    public function saleAction(Request $request, CustomHelper $customHelper){

        date_default_timezone_set('America/Guatemala');
    	
        $customHelper->setVars('sale');
        $this->initialise();
        
        $em = $this->em;
        $user = $this->userLogged;

        $dealer = $em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array("name" => "ASC"));
        $service = $em->getRepository(Service::class)->findBy(array(), array("name" => "ASC"));
        
        $arrayReturn = $this->filter($_REQUEST);
        
        $filter_created_from = $arrayReturn['filter_created_from'];
        $filter_created_to = $arrayReturn['filter_created_to'];
        
        //var_dump($filter_created_from);
        //var_dump($arrayReturn['filter_created_from']);

                
                /*        
        $filter_created_from = $arrayReturn['filter_created_from'];
        $filter_created_to = $arrayReturn['filter_created_to'];
        */

        $filter_dates = $arrayReturn['filter_dates'];
        $select_dealer = $arrayReturn['select_dealer'];
        if(isset($_REQUEST['select_service'])){
            $select_service = $_REQUEST['select_service'];
        }else{
            $select_service = "";
        }

        //var_dump($arrayReturn["arrayFilter"]['filter_created_to']);die;
        $sales = $em->getRepository(Guide::class)->dataSales($select_service, $select_dealer,$arrayReturn["arrayFilter"]['filter_created_from'], $arrayReturn["arrayFilter"]['filter_created_to']);

        $detail = "Reporte de Ventas";
        $customHelper->addLog($detail, $user, 'READ');

        $arrCurrency = $customHelper->getCurrency();

        return $this->render('Report/sale.html.twig', array(
            'dealer' => $dealer,
            'service' => $service,
            'filter_created_from' => $filter_created_from,
            'filter_created_to' => $filter_created_to,
            'filter_dates' => $filter_dates,
            'select_dealer' => $select_dealer,
            'select_service' => $select_service,
            'sales' => $sales,
            'currencyShort' => $arrCurrency["currencyShort"],
            'currency' => $arrCurrency["currency"],

        ));
    }


    public function taxAction(Request $request, CustomHelper $customHelper){

        date_default_timezone_set('America/Guatemala');

        $customHelper->setVars('tax');
        $this->initialise();

        $em = $this->em;
        $user = $this->userLogged;

        $dealer = $em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array("name" => "ASC"));
        $service = $em->getRepository(Service::class)->findBy(array(), array("name" => "ASC"));

        $arrayReturn = $this->filter($_REQUEST);

        $filter_created_from = $arrayReturn['filter_created_from'];
        $filter_created_to = $arrayReturn['filter_created_to'];
        $filter_dates = $arrayReturn['filter_dates'];
        $select_dealer = $arrayReturn['select_dealer'];

        if(isset($_REQUEST['select_service'])){
            $select_service = $_REQUEST['select_service'];
        }else{
            $select_service = "";
        }

        $taxes = $em->getRepository(Guide::class)->dataTaxes($select_service, $select_dealer,$arrayReturn["arrayFilter"]['filter_created_from'], $arrayReturn["arrayFilter"]['filter_created_to']);

        $detail = "Reporte de Impuestos";
        $customHelper->addLog($detail, $user, 'READ');

        $arrCurrency = $customHelper->getCurrency();

        return $this->render('Report/tax.html.twig', array(
            'dealer' => $dealer,
            'service' => $service,
            'filter_created_from' => $filter_created_from,
            'filter_created_to' => $filter_created_to,
            'filter_dates' => $filter_dates,
            'select_dealer' => $select_dealer,
            'select_service' => $select_service,
            'taxes' => $taxes,
            'currencyShort' => $arrCurrency["currencyShort"],
            'currency' => $arrCurrency["currency"],

        ));
    }

    //-- envios por usuario  de servicio al cliente
    public function shippingByUserAction(Request $request, CustomHelper $customHelper){

        date_default_timezone_set('America/Guatemala');

        $customHelper->setVars('shippingByUser');
        $this->initialise();

        $em = $this->em;
        $user = $this->userLogged;

        $dealer = $em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array("name" => "ASC"));
        $serviceUser = $em->getRepository(User::class)->findBy(array("role" => 4), array("name" => "ASC"));//servicio al cliente

        $arrayReturn = $this->filter($_REQUEST);

        $filter_created_from = $arrayReturn['filter_created_from'];
        $filter_created_to = $arrayReturn['filter_created_to'];

        //var_dump($filter_created_from);
        //var_dump($arrayReturn['filter_created_from']);

        /*
$filter_created_from = $arrayReturn['filter_created_from'];
$filter_created_to = $arrayReturn['filter_created_to'];
*/

        $filter_dates = $arrayReturn['filter_dates'];
        $select_dealer = $arrayReturn['select_dealer'];
        if(isset($_REQUEST['select_service_user'])){
            $select_service_user = $_REQUEST['select_service_user'];
        }else{
            $select_service_user = "";
        }

        //var_dump($arrayReturn["arrayFilter"]['filter_created_to']);die;
        $shipping = $em->getRepository(Guide::class)->getBillingByUser($select_service_user, $select_dealer, $arrayReturn["arrayFilter"]['filter_created_from'], $arrayReturn["arrayFilter"]['filter_created_to']);

        $detail = "Reporte de Envíos de Servicio al Cliente";
        $customHelper->addLog($detail, $user, 'READ');

        $arrCurrency = $customHelper->getCurrency();

        return $this->render('Report/shippingByUser.html.twig', array(
            'dealer' => $dealer,
            'serviceUser' => $serviceUser,
            'filter_created_from' => $filter_created_from,
            'filter_created_to' => $filter_created_to,
            'filter_dates' => $filter_dates,
            'select_dealer' => $select_dealer,
            'select_service_user' => $select_service_user,
            'shipping' => $shipping,
            //'currencyShort' => $arrCurrency["currencyShort"],
            //'currency' => $arrCurrency["currency"],

        ));
    }

    public function billingAction(Request $request, CustomHelper $customHelper){
        //var_dump($request);die;

        date_default_timezone_set('America/Guatemala');

        $customHelper->setVars('billing');
        $this->initialise();

        $em = $this->em;
        $user = $this->userLogged;

        $dealer = $em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array("name" => "ASC"));
        
        $service = $em->getRepository(Service::class)->findBy(array("enabled" => 1), array("name" => "ASC"));
        //paqueteria express, doc express, doc personal express, especial pasaporte)

        //var_dump($_REQUEST);die;

        $arrayReturn = $this->filter($_REQUEST);
        //var_dump($arrayReturn);die;

        $filter_created_from = date("Y-m-d", strtotime( $arrayReturn['filter_created_from']));
        $filter_created_to = date("Y-m-d", strtotime( $arrayReturn['filter_created_to']));

        //var_dump($filter_created_from);
        //var_dump($arrayReturn['filter_created_from']);


        /*
$filter_created_from = $arrayReturn['filter_created_from'];
$filter_created_to = $arrayReturn['filter_created_to'];
*/


        $filter_dates = $arrayReturn['filter_dates'];
        $select_dealer = $arrayReturn['select_dealer'];
        $select_courier = $arrayReturn['select_courier'];
        $select_courier_dhl = $arrayReturn['select_courier_dhl'];
        $select_courier_fedex = $arrayReturn['select_courier_fedex'];
        $select_courier_ups = $arrayReturn['select_courier_ups'];
        //var_dump($select_courier);die;

        if(isset($_REQUEST['select_service'])){
            $select_service = $_REQUEST['select_service'];
        }else{
            $select_service = "";
        }

        //here chea
        //var_dump($arrayReturn["arrayFilter"]['filter_created_to']);die;
        if(isset($_REQUEST["filter"])){
            $billing = $em->getRepository(Guide::class)->getBilling($select_service, $select_dealer,$filter_created_from, $filter_created_to, $select_courier_dhl, $select_courier_fedex, $select_courier_ups);
        }
        else{
            $billing = array();
        }


        $detail = "Reporte de Facturación";
        $customHelper->addLog($detail, $user, 'READ');

        $arrCurrency = $customHelper->getCurrency();


        return $this->render('Report/billing.html.twig', array(
            'dealer' => $dealer,
            'service' => $service,
            'filter_created_from' => $filter_created_from,
            'filter_created_to' => $filter_created_to,
            'filter_dates' => $filter_dates,
            'select_dealer' => $select_dealer,
            'select_service' => $select_service,
            'select_courier_dhl' => $select_courier_dhl,
            'select_courier_fedex' => $select_courier_fedex,
            'select_courier_ups' => $select_courier_ups,

            'billing' => $billing,
            'currencyShort' => $arrCurrency["currencyShort"],
            'currency' => $arrCurrency["currency"],

        ));
    }

    
    public function shippingAction(Request $request, CustomHelper $customHelper){

        $customHelper->setVars('shipping');
        $this->initialise();
        
        $em = $this->em;
        $user = $this->userLogged;

        $dealer = $em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array("name" => "ASC"));
        
        $arrayReturn = $this->filter($_REQUEST);
        
        $filter_created_from = $arrayReturn['filter_created_from'];
        $filter_created_to = $arrayReturn['filter_created_to'];
            
        $filter_dates = $arrayReturn['filter_dates'];
        $select_dealer = $arrayReturn['select_dealer'];
        $shippings = $em->getRepository(Guide::class)->dataShipping($select_dealer,$arrayReturn["arrayFilter"]['filter_created_from'],  $arrayReturn["arrayFilter"]['filter_created_to']);

        $detail = "Reporte de envíos";
        $customHelper->addLog($detail, $user, 'READ');

        
        return $this->render('Report/shipping.html.twig', array(
            'dealer' => $dealer,
            'filter_created_from' => $filter_created_from,
            'filter_created_to' => $filter_created_to,
            'filter_dates' => $filter_dates,
            'select_dealer' => $select_dealer,
            'shippings' => $shippings,
        ));
    }


    public function trackinglessAction(Request $request, CustomHelper $customHelper){

        $customHelper->setVars('trackingless');
        $this->initialise();

        
        $em = $this->em;
        $user = $this->userLogged;

        $dealer = $em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array("name" => "ASC"));

        $arrayReturn = $this->filter($_REQUEST);

        $filter_created_from = $arrayReturn['filter_created_from'];
        $filter_created_to = $arrayReturn['filter_created_to'];

        //var_dump($filter_created_from);die;

        //$filter_dates = $arrayReturn['filter_dates'];
        $select_dealer = $arrayReturn['select_dealer'];
        $trackingless = $em->getRepository(Guide::class)->dataTrackingless($select_dealer,$arrayReturn["arrayFilter"]['filter_created_from'],  $arrayReturn["arrayFilter"]['filter_created_to']);


        //$detail = "Reporte de envíos";
        //$customHelper->add($detail, $user, 'READ');

        return $this->render('Report/trackingless.html.twig', array(
            'dealer' => $dealer,
            'filter_created_from' => $filter_created_from,
            'filter_created_to' => $filter_created_to,
            //'filter_dates' => $filter_dates,
            'select_dealer' => $select_dealer,
            'trackingless' => $trackingless,
        ));
    }



    public function guideReplacementAction(CustomHelper $customHelper)
    {

        $customHelper->setVars('guideReplacement');
        $this->initialise();
        
        $em = $this->em;
        //print "entra";die;
        $entities = $em->getRepository(Guide::class)->getByReplacementStatus("Autorizado", null, null, 0, null, null);
        //($status, $from = null, $to = null, $replaced = null, $dealer = null, $service = null)
        ///FILTRO DE FECHA
        ///


        return $this->render('Report/guideReplacement.html.twig', array(
            'entities' => $entities,
        ));
    }



    public function guideReplacementTotalAction(CustomHelper $customHelper)
    {

        date_default_timezone_set('America/Guatemala');

        $customHelper->setVars('guideReplacementTotal');
        $this->initialise();
        
        $em = $this->em;

        $filter = array();

        $filter["filter_service"] = 0;
        $filter["filter_dealer"] = 0;
        $filter["filter_created_from"] = date("Y-m-d");
        $filter["filter_created_to"] = date("Y-m-d");
        $filter["filter_dates"] = 1;


        if(isset($_REQUEST["filter"])){
            $filter["filter_service"] = $_REQUEST["filter_service"];
            $filter["filter_dealer"] = $_REQUEST["filter_dealer"];
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

        $entities = $em->getRepository(Guide::class)->getByReplacementStatus("Autorizado", $filter["filter_created_from"], $filter["filter_created_to"], 1, $filter["filter_dealer"], $filter["filter_service"]);
        ///
        $dealers = $em->getRepository(Dealer::class)->findBy(array("enabled" => 1), array("name" => "ASC"));
        $services = $em->getRepository(Service::class)->findBy(array("enabled" => 1), array("name"=>"ASC"));


        if(isset($_REQUEST["filter"])) {
            $filter["filter_created_from"] = $_REQUEST["filter_created_from"];
            $filter["filter_created_to"] = $_REQUEST["filter_created_to"];
        }


        return $this->render('Report/guideReplacementTotal.html.twig', array(
            'entities' => $entities,
            'filter_service' => $filter["filter_service"],
            'filter_dealer' => $filter["filter_dealer"],
            'filter_created_from' => $filter["filter_created_from"],
            'filter_created_to' => $filter["filter_created_to"],
            'filter_dates' => $filter["filter_dates"],
            'dealers' => $dealers,
            'services' => $services,

        ));
    }



    public function claimConsolidatedAction(Request $request, CustomHelper $customHelper){

        date_default_timezone_set('America/Guatemala');

        $customHelper->setVars('claimConsolidated');
        $this->initialise();

        $em = $this->em;

        $arrayReturn = $this->filter($_REQUEST);

        $filter_created_from = $arrayReturn['filter_created_from'];
        $filter_created_to = $arrayReturn['filter_created_to'];
        $filter_claim_status = $arrayReturn['filter_claim_status'];
        $filter_claim_type = $arrayReturn['filter_claim_type'];

        if(isset($_REQUEST["filter"])){

            $claims = $em->getRepository(Claim::class)->getConsolidated($filter_created_from, $filter_created_to, $filter_claim_status, $filter_claim_type);

            if(is_array($claims)){

                $spreadsheet = new Spreadsheet();

                /* @var $sheet \PhpOffice\PhpSpreadsheet\Writer\Xlsx\Worksheet */
                $sheet = $spreadsheet->getActiveSheet();


                $sheet
                    ->fromArray(
                        $claims,  // The data to set
                        NULL,        // Array values with this value will not be set
                        'A1'         // Top left coordinate of the worksheet range where
                    //    we want to set these values (default is A1)
                    );

                $sheet->setTitle("Consolidado de Reclamos");

                // Create your Office 2007 Excel (XLSX Format)
                $writer = new Xlsx($spreadsheet);

                // Create a Temporary file in the system
                $fileName = 'consolidado_reclamos.xlsx';
                $temp_file = tempnam(sys_get_temp_dir(), $fileName);

                // Create the excel file in the tmp directory of the system
                $writer->save($temp_file);

                // Return the excel file as an attachment
                return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);
            }
            else{
                $request->getSession()->getFlashBag()->add('warning', 'No se encontraron datos');
            }

        }

        $claimTypes = $em->getRepository(ClaimType::class)->findByEnabled(1);


        return $this->render('Report/claimConsolidated.html.twig', array(
            'filter_created_from' => $filter_created_from,
            'filter_created_to' => $filter_created_to,
            'filter_claim_status' => $filter_claim_status,
            'filter_claim_type' => $filter_claim_type,
            'claimTypes' => $claimTypes

        ));
    }

    
}
