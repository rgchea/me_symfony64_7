<?php

namespace App\Controller;

use App\Service\CustomHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\File\File;

use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Response;


use App\Entity\User;
use App\Form\UserType;
use App\Entity\UserPlant;
use App\Entity\UserDealer;
use App\Entity\Role;
use App\Entity\Dealer;


class UserController extends AbstractController
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
        $this->repository = $this->em->getRepository(User::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }

    public function indexAction(Request $request, CustomHelper $customHelper)
    {


        $customHelper->setVars('user');
        $this->initialise();

        if($this->role != "ADMINISTRADOR"){
            return $this->redirectToRoute('backend_admin_user_edit', array('id' => $this->userLogged->getId()));
            //throw $this->createAccessDeniedException($translator->trans('label_access_denied'));
        }


        //print $this->translator->getLocale();die;

        return $this->render('User/index.html.twig');


    }


    public function listDatatablesAction(Request $request, CustomHelper $customHelper)
    {

        $customHelper->setVars('user');

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
                    case 'username':
                    {
                        $responseTemp = $entity->getUsername();
                        break;
                    }
                    case 'name':
                    {
                        $responseTemp = $entity->getName();
                        break;
                    }

                    case 'lastName':
                    {
                        $responseTemp = $entity->getLastName();
                        break;
                    }
                    case 'email':
                    {
                        $responseTemp = $entity->getEmail();
                        break;
                    }
                    case 'role':
                    {
                        $responseTemp = $entity->getRole()->getName();
                        break;
                    }

                    case 'actions':
                    {
                        $urlEdit = $this->generateUrl('backend_admin_user_edit', array('id' => $entity->getId()));
                        $edit = "<a href='".$urlEdit."'><div class='btn btn-sm btn-primary'><span class='fa fa-search'></span></div></a>&nbsp;&nbsp;";

                        $urlDelete = $this->generateUrl('backend_admin_user_delete', array('id' => $entity->getId()));
                        $delete = "<a class='btn btn-danger btn-sm btnDelete' href='".$urlDelete."'><i class='fa fa-trash'></i></a>&nbsp;&nbsp;";

                        $dealers = "";


                        $impersonate = "";
                        if($this->role == "ADMINISTRADOR"){

                            $entityRole = $entity->getRole()->getName();
                            if( ($entityRole == "SERVICIO AL CLIENTE") || ($entityRole == "RECEPCION Y GUIAS")){
                                $userDealers = $this->generateUrl('backend_admin_user_dealer', array('id' => $entity->getId()));
                                $dealers = "<a class='btn btn-sm btn-default' href='".$userDealers."'><i class='fa fa-users-cog'></i></a>";

                            }

                            $urlImpersonate = $this->generateUrl('backend_admin_homepage')."?_switch_user=".$entity->getUsername();
                            $impersonate = "<a class='btn btn-sm btn-default' title='Impersonar' href='".$urlImpersonate."'><i class='fa fa-user'></i><span class='item-label'></span></a>&nbsp;&nbsp;";

                        }

                        $responseTemp = $impersonate.$edit.$delete.$dealers;
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
     * Creates a new User entity.
     *
     */
    public function newAction(Request $request, CustomHelper $customHelper)
    {
        $customHelper->setVars('user');
        $this->initialise();

        $entity = new User();
        $form   = $this->createCreateForm($entity);


        return $this->render('User/new.html.twig', array(
            'entity' => $entity,
            'form' => $form->createView(),
            'role' => $this->role,
        ));
    }



    /**
     * Finds and displays a User entity.
     *
     */
    public function showAction($entity)
    {
        $deleteForm = $this->createDeleteForm($entity);

        return $this->render('backend_admin_user/show.html.twig', array(
            'entity' => $entity,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing User entity.
     *
     */
    public function editAction(Request $request, $id, CustomHelper $customHelper, TranslatorInterface $translator)
    {
        $customHelper->setVars('user');
        $this->initialise();
        
        $em = $this->em;

        if($this->role != "ADMINISTRADOR"){
            $myUserID = intval($this->userLogged->getId());

            if($myUserID != $id){

                throw $this->createAccessDeniedException($translator->trans('label_access_denied'));
            }
        }

        $entity = $this->repository->find($id);

        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createEditForm($entity);

        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->em;
            $em->persist($entity);
            $em->flush();

            return $this->redirectToRoute('backend_admin_user_edit', array('id' => $id));
        }

        return $this->render('User/edit.html.twig', array(
            'entity' => $entity,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
            'role' => $this->role,
            'edit' => true
        ));
    }

    /**
     * Deletes a User entity.
     *
     */
    public function deleteAction(Request $request, $id, CustomHelper $customHelper)
    {

        $customHelper->setVars('user');
        $this->initialise();
        
        $em = $this->em;

        $entity = $this->repository->find($id);
        $form = $this->createDeleteForm($entity);
        $form->handleRequest($request);

        //if ($form->isSubmitted() && $form->isValid()) {
        $em = $this->em;
        $entity = $this->repository->find($entity);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find User entity.');
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
                    return $this->redirectToRoute('backend_admin_user_index');
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
        return $this->redirectToRoute('backend_admin_user_index');
    }

    /**
     * Creates a form to delete a User entity.
     *
     * @param User $user The User entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('backend_admin_user_delete', array('id' => $entity->getId())))
            ->setMethod('DELETE')
            ->getForm()
            ;
    }




    /**
     * Creates a new User entity.
     *
     */
    public function createAction(Request $request, CustomHelper $customHelper, UserPasswordHasherInterface $encoder)
    {

        $customHelper->setVars('user');
        $this->initialise();

        $em = $this->em;
        
        $entity = new User();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);
        /*print "<pre>";
        var_dump($form->getErrorsAsString());die;
         * */

        /////
        $plainPassword = trim($form['password']->getData());

        $checkExistence = $customHelper->checkExistence(trim($_REQUEST["user"]["username"]), trim($_REQUEST["user"]["email"]), 0);
        if ($form->isValid() && ($checkExistence == "")) {

            //$encoded = $encoder->encodePassword($entity, $plainPassword);
            $encoded = $encoder->hashPassword($entity, $plainPassword);
            $entity->setPassword($encoded);

            //print "<pre>";
            //var_dump($_REQUEST);die;

            $roleID = intval($_REQUEST["user"]["role"]);
            $objRole = $this->em->getRepository(Role::class)->find($roleID);
            $role = $objRole->getName(); //GETS THE NAME
            $entity->setRole($objRole);

            if($role == "ADMINISTRADOR"){
                $entity->setRoles(array("ROLE_SUPER_ADMIN"));
            }
            else{
                $entity->setRoles(array("ROLE_USER"));
            }

            //var_dump($entity);die;
            $customHelper->blameOnMe($entity);

            $em->persist($entity);
            $em->flush();

            ///CREATE AND SEND EMAIL
            //($subject, $from, $to, $body, $bodyView )
            /*
            $body = "{$entity->getName()} {$entity->getLastName()}, haz sido agregado a la plataforma Backend \n usuario: {$entity->getUsername()}  \n password: {$plainPassword} \n";
            //send mail
             * */

            $customHelper->flashSuccess($request);

            return $this->redirectToRoute('backend_admin_user_index');


        }
        elseif ($checkExistence != ""){
            $request->getSession()->getFlashBag()->add('warning',$checkExistence);

        }
        ////

        //return $this->redirectToRoute('backend_admin_user_edit', array('id' => $id));

        /////


        return $this->render('User/new.html.twig', array(
            'entity' => $entity,
            'form'   => $form->createView(),
        ));
    }

    /**
     * Creates a form to create a User entity.
     *
     * @param User $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm($entity)
    {
        $this->initialise();
        
        $form = $this->createForm(UserType::class, $entity, array(
            'action' => $this->generateUrl('backend_admin_user_create'),
            'method' => 'POST',
            'role' => $this->role
        ));


        return $form;
    }




    /**
     * Creates a form to edit a User entity.
     *
     * @param User $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createEditForm($entity)
    {

        $this->initialise();

        $form = $this->createForm(UserType::class, $entity, array(
            'action' => $this->generateUrl('backend_admin_user_update', array('id' => $entity->getId())),
            'role' => $this->role
            //'client' => $this->userLogged,
        ));


        return $form;
    }


    /**
     * Edits an existing User entity.
     *
     */
    public function updateAction(Request $request, $id, CustomHelper $customHelper, UserPasswordHasherInterface $encoder)
    {
        /*
        print "<pre>";
        var_dump($_REQUEST["user"]["username"]);die;*/

        $customHelper->setVars('user');
        $this->initialise();

        $em = $this->em;

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find User entity.');
        }

        $previous_password = $entity->getPassword();

        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);



        $plainPassword = trim($editForm['password']->getData());

        $checkExistence = $customHelper->checkExistence(trim($_REQUEST["user"]["username"]), trim($_REQUEST["user"]["email"]), $id);
        ////
        if ($editForm->isValid() && ($checkExistence == "")) {
            if (($plainPassword != $previous_password) && $plainPassword) {
                $encoded = $encoder->hashPassword($entity, $plainPassword);
            } else {
                $encoded = $encoder->hashPassword($entity, $previous_password);
            }

            $entity->setPassword($encoded);


            $roleID = intval($_REQUEST["user"]["role"]);
            $objRole = $this->em->getRepository(Role::class)->find($roleID);
            $role = $objRole->getName(); //GETS THE NAME
            $entity->setRole($objRole);

            if($role == "ADMINISTRADOR"){
                $entity->setRoles(array("ROLE_SUPER_ADMIN"));
            }
            else{
                $entity->setRoles(array("ROLE_USER"));
            }

            $customHelper->blameOnMe($entity, 'update');

            $em->flush();

            $customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('backend_admin_user_index', array('id' => $id)));

        } elseif ($checkExistence != "") {
            $request->getSession()->getFlashBag()->add('warning', $checkExistence);

        }
        ////

        return $this->redirectToRoute('backend_admin_user_edit', array('id' => $id));
        /*
        return $this->render('User/edit.html.twig', array(
            'entity'      => $entity,
            'form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
         *
         */
    }



    public function  userDealerAction(Request $request, $id, CustomHelper $customHelper, TranslatorInterface $translator){

        $customHelper->setVars('user');
        $this->initialise();

        if($this->role != "ADMINISTRADOR"){
            throw $this->createAccessDeniedException($translator->trans('label_access_denied'));
        }

        $userID = $id;

        $em = $this->em;

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find User entity.');
        }


        if(isset($_REQUEST["submit"])){

            //print "<pre>";
            //var_dump($_REQUEST);DIE;

            $cleanUserDealer = $this->em->getRepository(UserDealer::class)->clearTable($userID);

            if(isset($_REQUEST["myDealers"])){

                $dealers = $_REQUEST["myDealers"];
                foreach ($dealers as $key => $value){

                    if(intval($value) == 1){
                        $objUserDealer = new UserDealer();
                        $objDealer = $this->em->getRepository(Dealer::class)->find($key);
                        $objUserDealer->setDealer($objDealer);
                        $objUserDealer->setUser($entity);
                        //$objUserDealer->setActive(true);
                        $this->em->persist($objUserDealer);
                        $this->em->flush();
                    }

                }
            }
        }

        $entities = $this->em->getRepository(Dealer::class)->findByEnabled(1);
        $userDealers = $this->em->getRepository(UserDealer::class)->findByUser($id);

        $arrDealers = array();

        foreach ($entities as $dealer){

            $arrDealers[$dealer->getId()] = array("name" => $dealer->getName(), "checked" => 0);

            if($userDealers){
                foreach($userDealers as $n){
                    if($dealer->getId() == $n->getDealer()->getId()){
                        $arrDealers[$dealer->getId()]["checked"] = 1;
                    }
                }

            }
        }

        //print "<pre>";
        //var_dump($arrDealers);die;


        return $this->render('User/userDealers.html.twig', array(
            'entity' => $entity,
            'entities' => $arrDealers
        ));





    }


}
