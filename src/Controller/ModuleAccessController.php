<?php

namespace App\Controller;

use App\Service\CustomHelper;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Response;

use App\Entity\ModuleAccess;
use App\Entity\Module;
use App\Entity\Role;

use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;


/**
 * ModuleAccess controller.
 *
 */
class ModuleAccessController extends AbstractController
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
    
    

    /**
     * Lists all ModuleAccess entities.
     *
     */
    public function indexAction(CustomHelper $customHelper)
    {

        $customHelper->setVars('moduleAccess');
        $this->initialise();
        
        $roleID = $this->session->get('userLogged')->getRole()->getId();

        //var_dump($roleID);die;


        $entitiesModule = $this->em->getRepository(ModuleAccess::class)->getModules();
        $entitiesAccess = $this->em->getRepository(ModuleAccess::class)->findAll();
        //var_dump($entitiesModule);die;
        $entitiesRoles = $this->em->getRepository(Role::class)->findByEnabled(1);


        return $this->render('ModuleAccess/index.html.twig', array(
            'entitiesAccess' => $entitiesAccess,
            'entitiesModule' => $entitiesModule,
            'entitiesRole' => $entitiesRoles,
        ));
    }
    /**
     * Creates a new ModuleAccess entity.
     *
     */
    public function createAction(Request $request, CustomHelper $customHelper)
    {
        $customHelper->setVars('moduleAccess');
        $this->initialise();

        //print "<pre>";
        //var_dump($_REQUEST);die;
        $roleID = $this->session->get('userLogged')->getRole()->getId();
        //var_dump($roleID);die;

        $clean = $this->em->getRepository(ModuleAccess::class)->cleanRoleAccess(0);

        if(isset($_REQUEST["module"])){


            foreach ($_REQUEST["module"] as $key => $value) {
                $splitKey = explode("_", $key);//split is deprecated

                $roleID = $splitKey[0];
                $moduleID = $splitKey[1];

                $entity = new ModuleAccess();


                $module = $this->em->getRepository(Module::class)->find($moduleID);
                $entity->setModule($module);
                $role = $this->em->getRepository(Role::class)->find($roleID);
                $entity->setRole($role);


                $this->em->persist($entity);
                $this->em->flush();


            }

        }

        $customHelper->flashSuccess($request);
        return $this->redirect($this->generateUrl('backend_admin_moduleaccess'));

    }


}
