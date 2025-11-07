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

use App\Entity\UserNotification;
use App\Form\UserNotificationType;
use App\Service\CustomHelper;
/**
 * UserNotification controller.
 *
 */
class UserNotificationController extends AbstractController
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
        $this->repository = $this->em->getRepository(UserNotification::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }


    public function indexAction(Request $request, CustomHelper $customHelper)
    {

        //var_dump($this->translator->trans('label_welcome'));
        $customHelper->setVars('userNotification');
        $this->initialise();

        //print $this->translator->getLocale();die;

        return $this->render('UserNotification/index.html.twig');

    }


    public function listDatatablesAction(Request $request, CustomHelper $customHelper)
    {

        $customHelper->setVars('userNotification');

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

        $filterUser = $this->userLogged->getId();

        $results = $this->repository->getNotificationsDTData($start, $length, $order, $search, $columns, $filterUser);
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
                    case 'title':
                        {
                            $responseTemp = $entity->getTitle();
                            break;
                        }

                    case 'sent':
                        {
                            $responseTemp = $entity->getCreatedAt()->format("m/d/Y H:m");
                            break;
                        }

                    case 'actions':
                    {

                        $urlDelete = $this->generateUrl('backend_admin_usernotification_delete', array('id' => $entity->getId()));
                        $delete = "<a title='".$this->translator->trans("tooltip.delete")."' class='btn btn-danger btn-sm' href='".$urlDelete."'><i class='fa fa-trash'></i><span class='item-label'></span></a>";

                        $responseTemp = $delete;
                        break;
                    }


                }

                // Add the found data to the json
                $response .= $customHelper->escapeJsonString($responseTemp);

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
     * Creates a form to delete a UserNotification entity.
     *
     * @param UserNotification $UserNotification The UserNotification entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('backend_admin_usernotification_delete', array('id' => $entity->getId())))
            ->setMethod('DELETE')
            ->getForm()
            ;
    }




    public function notificationAction(Request $request, CustomHelper $customHelper){

        $customHelper->setVars('dashboard');
        $this->initialise();


        $notifications = $this->repository->getNotifications($this->userLogged->getId());
        $arrReturn = array();
        if(!empty($notifications)){
            foreach ($notifications as $key => $notification) {
                //var_dump($key);die;
                $arrReturn[$key] = $notification;
            }
        }

        return new JsonResponse(array("result" => $arrReturn));

    }



    public function notificationReadAction(Request $request, CustomHelper $customHelper){

        $customHelper->setVars('dashboard');
        $this->initialise();

        //var_dump($_REQUEST);DIE;
        $notificationID = intval($_REQUEST["notificationID"]);

        $objNotification = $this->repository->find($notificationID);
        $objNotification->setIsRead(1);

        $this->em->persist($objNotification);
        $this->em->flush();


        $notificationType = $objNotification->getNotificationType()->getId();

        if($notificationType == 1){///RECLAMO
            return $this->redirect($this->generateUrl('backend_admin_claim_edit', array("id" => $objNotification->getClaim()->getId())));
        }
        else{

            DIE;
        }


    }


    public function notificationMarkAllReadAction(Request $request, CustomHelper $customHelper){

        $customHelper->setVars('dashboard');
        $this->initialise();


        $filterComplex = $customHelper->getSessionComplex();
        $complexFilters[$filterComplex] = $filterComplex;

        $notifications = $this->repository->markAllNotificationRead($this->userLogged->getId(), $complexFilters);

        return $this->redirect($this->generateUrl('backend_admin_homepage'));

    }


}
