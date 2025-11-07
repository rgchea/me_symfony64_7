<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use App\Service\CustomHelper;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\JsonResponse;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Response;

use Symfony\Contracts\Translation\TranslatorInterface;

use App\Entity\ClaimType;
use App\Form\ClaimTypeType;

class ClaimTypeController extends AbstractController
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
        $this->repository = $this->em->getRepository(ClaimType::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }
    

    public function indexAction(CustomHelper $customHelper)
    {
        $customHelper->setVars('claimType');
        $this->initialise();

        return $this->render('ClaimType/index.html.twig', array(

        ));
    }



    public function listDatatablesAction(Request $request, CustomHelper $customHelper, TranslatorInterface $translator)
    {

        $customHelper->setVars('claimType');

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
                    case 'name':
                    {
                        $responseTemp = $entity->getName();
                        break;
                    }

                    case 'actions':
                    {

                        $urlEdit = $this->generateUrl('backend_admin_claimtype_edit', array('id' => $entity->getId()));
                        $edit = "<a class='btn btn-primary btn-sm' title='".$translator->trans("tooltip.edit")."' href='".$urlEdit."'><i class='fas fa-search'></i><span class='item-label'></span></a>&nbsp;&nbsp;&nbsp;&nbsp;";

                        $urlDelete = $this->generateUrl('backend_admin_claimtype_delete', array('id' => $entity->getId()));
                        $delete = "<a title='".$translator->trans("tooltip.delete")."' class='btn btn-danger btn-sm btnDelete'  href='".$urlDelete."'><i class=\"fas fa-trash\"></i></i><span class='item-label'></span></a>";
                        
                        $responseTemp = $edit.$delete;
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
     * Creates a new ClaimType entity.
     *
     */
    public function newAction(Request $request, CustomHelper $customHelper)
    {
        $customHelper->setVars('claimType');
        $this->initialise();
        $entity = new ClaimType();
        $form   = $this->createCreateForm($entity);


        return $this->render('ClaimType/new.html.twig', array(
            'entity' => $entity,
            'form' => $form->createView(),
        ));
    }



    /**
     * Finds and displays a ClaimType entity.
     *
     */
    public function showAction($entity)
    {
        $deleteForm = $this->createDeleteForm($entity);

        return $this->render('backend_admin_claimtype/show.html.twig', array(
            'entity' => $entity,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing ClaimType entity.
     *
     */
    public function editAction(Request $request, $id, CustomHelper $customHelper)
    {
        $customHelper->setVars('claimType');
        $this->initialise();
        
        $em = $this->em;

        $entity = $em->getRepository(ClaimType::class)->find($id);

        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createEditForm($entity);

        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em = $this->em;
            $em->persist($entity);
            $em->flush();

            return $this->redirectToRoute('backend_admin_claimtype_edit', array('id' => $id));
        }

        return $this->render('ClaimType/edit.html.twig', array(
            'entity' => $entity,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a ClaimType entity.
     *
     */
    public function deleteAction(Request $request, $id, CustomHelper $customHelper)
    {

        $customHelper->setVars('claimType');
        $this->initialise();

        $entity = $this->repository->find($id);
        $form = $this->createDeleteForm($entity);
        $form->handleRequest($request);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find ClaimType entity.');
        }
        else{

            //SOFT DELETE
            $entity->setEnabled(0);
            $customHelper->blameOnMe($entity);
            $this->em->persist($entity);
            $this->em->flush();

        }

        $customHelper->flashSuccess($request);
        return $this->redirectToRoute('backend_admin_claimtype_index');
    }

    /**
     * Creates a form to delete a ClaimType entity.
     *
     * @param ClaimType $role The ClaimType entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('backend_admin_claimtype_delete', array('id' => $entity->getId())))
            ->setMethod('DELETE')
            ->getForm()
            ;
    }




    /**
     * Creates a new ClaimType entity.
     *
     */
    public function createAction(Request $request, CustomHelper $customHelper)
    {

        $customHelper->setVars('claimType');
        $this->initialise();

        $entity = new ClaimType();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);
        /*print "<pre>";
        var_dump($form->getErrorsAsString());die;
         * */

        if ($form->isValid()) {
            $em = $this->em;

            $customHelper->blameOnMe($entity);
            $em->persist($entity);
            $em->flush();


            $customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('backend_admin_claimtype_index'));

        }
        /*
        else{
            print "FORMULARIO NO VALIDO";DIE;
        }
         * */

        return $this->render('ClaimType/new.html.twig', array(
            'entity' => $entity,
            'form'   => $form->createView(),
        ));
    }

    /**
     * Creates a form to create a ClaimType entity.
     *
     * @param ClaimType $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm($entity)
    {

        $form = $this->createForm(ClaimTypeType::class, $entity, array(
            'action' => $this->generateUrl('backend_admin_claimtype_create'),
            'method' => 'POST'
            //'client' => $this->userLogged,
        ));

        //$form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }




    /**
     * Creates a form to edit a ClaimType entity.
     *
     * @param ClaimType $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
        private function createEditForm($entity)
    {

        $form = $this->createForm(ClaimTypeType::class, $entity, array(
            'action' => $this->generateUrl('backend_admin_claimtype_update', array('id' => $entity->getId())),

            //'client' => $this->userLogged,
        ));

        //$form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }


    /**
     * Edits an existing ClaimType entity.
     *
     */
    public function updateAction(Request $request, $id, CustomHelper $customHelper)
    {
        $customHelper->setVars('claimType');
        $this->initialise();

        $em = $this->em;

        $entity = $em->getRepository(ClaimType::class)->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find ClaimType entity.');
        }

        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {

            $customHelper->blameOnMe($entity, 'update');
            $em->flush();

            $customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('backend_admin_claimtype_index', array('id' => $id)));

        }

        return $this->render('ClaimType/edit.html.twig', array(
            'entity'      => $entity,
            'form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }


}
