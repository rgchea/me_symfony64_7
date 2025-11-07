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


use App\Entity\DealerNotification;
use App\Entity\Dealer;
use App\Service\CustomHelper;
/**
 * Dealer Notification controller.
 *
 */
class DealerNotificationController extends AbstractController
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
        $this->repository = $this->em->getRepository(DealerNotification::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }

    /**
     * Lists all Dealer entities.
     *
     */
    public function indexAction(CustomHelper $customHelper)
    {

    	$customHelper->setVars('dealernotification');
        $this->initialise();


        if(isset($_REQUEST["submit"])){

            //var_dump($_REQUEST);DIE;
            $cleanDealerNotification = $this->repository->clearTable();


            if(isset($_REQUEST["myDealers"])){

                $dealers = $_REQUEST["myDealers"];
                foreach ($dealers as $key => $value){

                    if(intval($value) == 1) {

                        $objNotification = new DealerNotification();
                        $objDealer = $this->em->getRepository(Dealer::class)->find($key);
                        $objNotification->setDealer($objDealer);
                        $objNotification->setActive(true);
                        $this->em->persist($objNotification);
                        $this->em->flush();
                    }

                }
            }
        }

        $entities = $this->em->getRepository(Dealer::class)->findByEnabled(1);
        $notifications = $this->repository->getByEnabledDealer();

        $arrDealers = array();

        foreach ($entities as $dealer){

            $arrDealers[$dealer->getId()] = array("name" => $dealer->getName(), "checked" => 0);

            if($notifications){
                foreach($notifications as $n){
                    if($dealer->getId() == $n->getDealer()->getId()){
                        $arrDealers[$dealer->getId()]["checked"] = 1;
                    }
                }

            }
        }


        return $this->render('DealerNotification/index.html.twig', array(
            'entities' => $arrDealers,
        ));
    }





}