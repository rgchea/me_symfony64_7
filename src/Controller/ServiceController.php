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

use App\Entity\Service;
use App\Form\ServiceType;
use App\Service\CustomHelper;

/**
 * Service controller.
 *
 */
class ServiceController extends AbstractController
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
        $this->repository = $this->em->getRepository(Service::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }

    /**
     * Lists all Service entities.
     *
     */
    public function indexAction(CustomHelper $customHelper)
    {

    	$customHelper->setVars('service');
        $this->initialise();
        $em = $this->em;

        $entities = $this->repository->findByEnabled(1);

        return $this->render('Service/index.html.twig', array(
            'entities' => $entities,
        ));
    }

    /**
     * Creates a new Service entity.
     *
     */
    public function newAction(Request $request, CustomHelper $customHelper)
    {
    	$customHelper->setVars('service');
        $this->initialise();
 
        $entity = new Service();
        $form   = $this->createCreateForm($entity);
		 
	
        return $this->render('Service/new.html.twig', array(
            'entity' => $entity,
            'form' => $form->createView(),
        ));
    }

 

    /**
     * Finds and displays a Service entity.
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
     * Displays a form to edit an existing Service entity.
     *
     */
    public function editAction(Request $request, $id, CustomHelper $customHelper)
    {
    	$customHelper->setVars('service');
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

            return $this->redirectToRoute('service_edit', array('id' => $id));
        }

        return $this->render('Service/edit.html.twig', array(
            'entity' => $entity,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }
	
    /**
     * Deletes a Service entity.
     *
     */
    public function deleteAction(Request $request, $id, CustomHelper $customHelper)
    {
    	
		$customHelper->setVars('service');
        $this->initialise();
        
        $em = $this->em;

        $entity = $this->repository->find($id);		
        $form = $this->createDeleteForm($entity);
        $form->handleRequest($request);

        //if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->em;
            $entity = $this->repository->find($entity);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find Service entity.');
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
                        return $this->redirectToRoute('service_index');
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
        return $this->redirectToRoute('service_index');
    }

    /**
     * Creates a form to delete a Service entity.
     *
     * @param Service $role The Service entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('service_delete', array('id' => $entity->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
	
	
	
	
    /**
     * Creates a new Service entity.
     *
     */
    public function createAction(Request $request, CustomHelper $customHelper)
    {
    	
		$customHelper->setVars('service');
        $this->initialise();

        $entity = new Service();
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
            return $this->redirect($this->generateUrl('service_index'));
			 
        }
		/*
		else{
			print "FORMULARIO NO VALIDO";DIE;
		}
		 * */

        return $this->render('Service/new.html.twig', array(
            'entity' => $entity,
            'form'   => $form->createView(),
        ));
    }

    /**
     * Creates a form to create a Service entity.
     *
     * @param Service $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm($entity)
    {
    	
        $form = $this->createForm(ServiceType::class, $entity, array(
            'action' => $this->generateUrl('service_create'),
            'method' => 'POST'
            //'client' => $this->userLogged,
        ));

        

        return $form;
    }	
	

	
	
    /**
    * Creates a form to edit a Service entity.
    *
    * @param Service $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createEditForm($entity)
    {
    	
        $form = $this->createForm(ServiceType::class, $entity, array(
            'action' => $this->generateUrl('service_update', array('id' => $entity->getId())),
            
            //'client' => $this->userLogged,
        ));

        

        return $form;
    }
	
	
    /**
     * Edits an existing Service entity.
     *
     */
    public function updateAction(Request $request, $id, CustomHelper $customHelper)
    {
    	$customHelper->setVars('service');
    	$this->initialise();
    	
        $em = $this->em;

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Service entity.');
        }

        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid()) {
            $em->flush();

			$customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('service_index', array('id' => $id)));
			 
        }

        return $this->render('Service/edit.html.twig', array(
            'entity'      => $entity,
            'form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }	



}