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

use App\Entity\SystemLog;
use App\Service\CustomHelper;

class SystemLogController extends AbstractController
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
        $this->repository = $this->em->getRepository(SystemLog::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }


    public function listAction(Request $request, CustomHelper $customHelper)
    {

        $customHelper->setVars('user');
        $this->initialise();

        return $this->render('SystemLog/index.html.twig');


    }


    public function listDatatablesAction(Request $request, CustomHelper $customHelper)
    {

        /*
         * CLEAR LOG QUERY // 6 MONTHS
         *
         *  DELETE
            FROM system_log
            WHERE DATE(created_at) <= DATE_SUB(DATE(NOW()), INTERVAL 6 MONTH);
         *
         */


        $customHelper->setVars('systemLog');
        $this->initialise();

        date_default_timezone_set('America/Guatemala');
        
        $em = $this->em;


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
            $orders   = $bag->all('order');
            $search  = $bag->all('search');


            $arrDate["start"] = $bag->all('start_date');
            $arrDate["end"] = $bag->all('end_date');

            $arrDate["start"] =  trim($arrDate["start"]) != "" ? trim($arrDate["start"]). " 00:00:00" : trim($arrDate["start"]);
            $arrDate["end"] =  trim($arrDate["end"]) != "" ? trim($arrDate["end"]). " 23:59:59" : trim($arrDate["end"]);
        }
        else // If the request is not a POST one, die hard
            die;

        // Process Parameters

        // Orders
        foreach ($orders as $key => $order)
        {
            // Orders does not contain the name of the column, but its number,
            // so add the name so we can handle it just like the $columns array
            $orders[$key]['name'] = $columns[$order['column']]['name'];
        }

        // Further filtering can be done in the Repository by passing necessary arguments
        if(trim($arrDate["start"]) != "" && trim($arrDate["end"]) != ""){
            $otherConditions = $arrDate;
        }
        else{
            $otherConditions = null;
        }


        // Get results from the Repository

        $results = $this->repository->getRequiredDTData($start, $length, $orders, $search, $columns, $otherConditions);

        // Returned objects are of type Town
        $objects = $results["results"];
        // Get total number of objects
        $total_objects_count = $this->repository->count(array());
        // Get total number of results
        $selected_objects_count = count($objects);
        // Get total number of filtered data
        $filtered_objects_count = $results["countResult"];

        // Construct response
        $response = '{
            "draw": '.$draw.',
            "recordsTotal": '.$total_objects_count.',
            "recordsFiltered": '.$filtered_objects_count.',
            "data": [';

        $i = 0;

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
                    case 'username':
                        {
                            $responseTemp = $entity->getCreatedBy()->getUsername();

                            // Do this kind of treatments if you suspect that the string is not JS compatible
                            $responseTemp = htmlentities(str_replace(array("\r\n", "\n", "\r"), ' ', $responseTemp));

                            // View permission ?
                            /*
                            if ($this->get('security.authorization_checker')->isGranted('view_town', $entity))
                            {
                                // Get the ID
                                $id = $entity->getId();
                                // Construct the route
                                $url = $this->generateUrl('playground_town_view', array('id' => $id));
                                // Construct the html code to send back to datatables
                                $responseTemp = "<a href='".$url."' target='_self'>".$ref."</a>";
                            }
                            else
                            {
                                $responseTemp = $name;
                            }
                            */
                            break;
                        }

                    case 'action':
                        {
                            $responseTemp = $entity->getAction();
                            break;
                        }

                    case 'detail':
                        {
                            $responseTemp = $entity->getDetail();
                            break;
                        }

                    case 'guide':
                        {
                            if($entity->getGuide()){
                                $responseTemp = $entity->getGuide()->getCode();
                            }
                            else{
                                $responseTemp = "-";
                            }

                            break;
                        }

                    case 'created_at':
                        {
                            $responseTemp = $entity->getCreatedAt()->format('Y-m-d H:i:s');
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

        $response .= ']}';

        // Send all this stuff back to DataTables
        $returnResponse = new JsonResponse();
        $response =  json_decode($response);
        $returnResponse->setData($response);

        return $returnResponse;

    }



}
