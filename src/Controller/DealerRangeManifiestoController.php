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


use App\Entity\DealerRangeManifiesto;
use App\Form\DealerRangeManifiestoType;
use App\Service\CustomHelper;
/**
 * DealerRangeManifiesto controller.
 *
 */
class DealerRangeManifiestoController extends AbstractController
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
        $this->repository = $this->em->getRepository(DealerRangeManifiesto::class);
        $this->userLogged = $this->session->get('userLogged');
        $this->role = $this->session->get('userLogged')->getRole()->getName();

    }

    /**
     * Lists all DealerRangeManifiesto entities.
     *
     */
    public function indexAction(CustomHelper $customHelper)
    {

    	$customHelper->setVars('dealerrangemanifiesto');
        $this->initialise();

        $entities = $this->repository->getByEnabledDealer();

        return $this->render('DealerRangeManifiesto/index.html.twig', array(
            'entities' => $entities,
        ));
    }

    /**
     * Creates a new DealerRangeManifiesto entity.
     *
     */
    public function newAction(Request $request, CustomHelper $customHelper)
    {
    	$customHelper->setVars('dealerrangemanifiesto');
        $this->initialise();
 
        $entity = new DealerRangeManifiesto();
        $form   = $this->createCreateForm($entity);
		 
	
        return $this->render('DealerRangeManifiesto/new.html.twig', array(
            'entity' => $entity,
            'form' => $form->createView(),
        ));
    }

 


    /**
     * Displays a form to edit an existing DealerRangeManifiesto entity.
     *
     */
    public function editAction(Request $request, $id, CustomHelper $customHelper)
    {
    	$customHelper->setVars('dealerrangemanifiesto');
        $this->initialise();

        $em = $this->em;

        $entity = $this->repository->find($id);
				
        $deleteForm = $this->createDeleteForm($entity);
		$editForm = $this->createEditForm($entity);
        
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            
            $em->persist($entity);
            $em->flush();

            return $this->redirectToRoute('dealerrangemanifiesto_edit', array('id' => $id));
        }

        return $this->render('DealerRangeManifiesto/edit.html.twig', array(
            'entity' => $entity,
            'form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }
	
    /**
     * Deletes a DealerRangeManifiesto entity.
     *
     */
    public function deleteAction(Request $request, $id, CustomHelper $customHelper)
    {
    	
		$customHelper->setVars('dealerrangemanifiesto');
        $em = $this->em;

        $user = $this->getUser();

        $entity = $this->repository->find($id);		
        $form = $this->createDeleteForm($entity);
        $form->handleRequest($request);

        //if ($form->isSubmitted() && $form->isValid()) {
            $entity = $this->repository->find($entity);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find DealerRangeManifiesto entity.');
            }



			try{

                $detail = "Se ha eliminado rango de manifiesto {$entity->getManifiestoFrom()} - {$entity->getManifiestoTo()} del concesionario {$entity->getDealer()->getName()}";
                $customHelper->addLog($detail, $user, 'DELETE');

				
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
                        return $this->redirectToRoute('dealerrangemanifiesto_index');
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
        return $this->redirectToRoute('dealerrangemanifiesto_index');
    }

    /**
     * Creates a form to delete a DealerRangeManifiesto entity.
     *
     * @param DealerRangeManifiesto $role The DealerRangeManifiesto entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($entity)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('dealerrangemanifiesto_delete', array('id' => $entity->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
	
    /**
     * Creates a new DealerRangeManifiesto entity.
     *
     */
    public function createAction(Request $request, CustomHelper $customHelper)
    {
    	//print "<pre>";
        $customHelper->setVars('dealerrangemanifiesto');
        $this->initialise();
        
        $em = $this->em;
//        var_dump($_REQUEST);die;
//
        $user = $this->getUser();

        $manFrom = trim($_REQUEST["backend_adminbundle_dealerrangemanifiesto"]["manifiestoFrom"]);
        $manTo = trim($_REQUEST["backend_adminbundle_dealerrangemanifiesto"]["manifiestoTo"]);
        $deal = $_REQUEST["backend_adminbundle_dealerrangemanifiesto"]["dealer"];
        $entity = new DealerRangeManifiesto();
        $form = $this->createCreateForm($entity);
        $form->handleRequest($request);
		/*print "<pre>";
		var_dump($form->getErrorsAsString());die;
		 * */
        $res_man = 0;
        

        //if ($result_man_deal == 0){//si no existe
        $result_man_all = $em->getRepository(DealerRangeManifiesto::class)->getRangeManifiestoBoo($manFrom, $manTo, 0);
        if ($result_man_all["result"] == 0){
        	$res_man = 0;

            if ($form->isValid()) {
                $em->persist($entity);
                $em->flush();

                $detail = "Se ha creado el rango de manifiesto {$entity->getManifiestoFrom()} - {$entity->getManifiestoTo()} del concesionario {$entity->getDealer()->getName()}";
                $customHelper->addLog($detail, $user, 'CREATE');


                $customHelper->flashSuccess($request);
                return $this->redirect($this->generateUrl('dealerrangemanifiesto_index'));
            }
        }else{
            $res_man = 1;
            $info = $result_man_all["info"];
            $request->getSession()->getFlashBag()->add('error', "El rango de Manifiestos ingresado ya ha sido tomado anteriormente.");
            $request->getSession()->getFlashBag()->add('warning', "  {$info['name']}: de {$info['manifiesto_from']} hasta {$info['manifiesto_to']} ");
                    
            
            return $this->redirect($this->generateUrl('dealerrangemanifiesto_new'));            
            
        }
       

		/*
		else{
			print "FORMULARIO NO VALIDO";DIE;
		}
		 * */

        return $this->render('DealerRangeManifiesto/new.html.twig', array(
            'entity' => $entity,
            'form'   => $form->createView(),
        ));
    }

    /**
     * Creates a form to create a DealerRangeManifiesto entity.
     *
     * @param DealerRangeManifiesto $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm($entity)
    {
    	
        $form = $this->createForm(DealerRangeManifiestoType::class, $entity, array(
            'action' => $this->generateUrl('dealerrangemanifiesto_create'),
            'method' => 'POST'
            //'client' => $this->userLogged,
        ));

        //$form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }	
	

	
	
    /**
    * Creates a form to edit a DealerRangeManifiesto entity.
    *
    * @param DealerRangeManifiesto $entity The entity
    *
    * @return \Symfony\Component\Form\Form The form
    */
    private function createEditForm($entity)
    {
    	
        $form = $this->createForm(DealerRangeManifiestoType::class, $entity, array(
            'action' => $this->generateUrl('dealerrangemanifiesto_update', array('id' => $entity->getId())),
            
            //'client' => $this->userLogged,
        ));

        //$form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }
	
	
    /**
     * Edits an existing DealerRangeManifiesto entity.
     *
     */
    public function updateAction(Request $request, $id, CustomHelper $customHelper)
    {
        
        
    	$customHelper->setVars('dealerrangemanifiesto');
    	$this->initialise();
    	
        $em = $this->em;
        
        $user = $this->getUser();

        $entity = $this->repository->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find DealerRangeManifiesto entity.');
        }

        $deleteForm = $this->createDeleteForm($entity);
        $editForm = $this->createEditForm($entity);
        $editForm->handleRequest($request);


        if ($editForm->isValid()) {


            $detail = "Se ha actualizado el rango de manifiesto {$entity->getManifiestoFrom()} - {$entity->getManifiestoTo()} del concesionario {$entity->getDealer()->getName()}";
            $customHelper->addLog($detail, $user, 'UPDATE');

            $em->flush();

			$customHelper->flashSuccess($request);
            return $this->redirect($this->generateUrl('dealerrangemanifiesto_index', array('id' => $id)));
			 
        }

        return $this->render('DealerRangeManifiesto/edit.html.twig', array(
            'entity'      => $entity,
            'form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }	



}