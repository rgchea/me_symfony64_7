<?php
///
namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Session\Session;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpFoundation\Response;

#MAILER
use Symfony\Component\Mailer\Mailer;
use Symfony\Bridge\Twig\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;


use App\Entity\User;
use App\Entity\Bank;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

use App\Service\CustomHelper;
/**
 * ResetPass controller.
 *
 */
class ResetPassController extends AbstractController
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


    public function requestAction(Request $request)
    {

        die;

        return $this->render('reset_password/request.html.twig');
    }

    public function checkEmailAction(Request $request)
    {
        die;
        return $this->render('reset_password/check_email.html.twig', [

        ]);
    }



    public function sendMailAction(Request $request, MailerInterface $mailer, UserPasswordEncoderInterface $encoder){

        die;

        if(!$_REQUEST["email"]){
            return $this->redirectToRoute('index');
        }

        $em = $this->getDoctrine()->getManager();


        $userEmail = trim($_REQUEST["email"]);
        $user = $this->getDoctrine()->getRepository(User::class)->findOneBy([
            'email' => $userEmail,
        ]);

        // Marks that you are allowed to see the app_check_email page.
        // Do not reveal whether a user account was found or not.
        if (!$user) {
            return $this->redirectToRoute('app_check_email');
        }


        $plainPassword = uniqid();
        $encoded = $encoder->encodePassword($user, $plainPassword);
        $user->setPassword($encoded);

        $em->persist($user);
        $em->flush();

        $body = "Puedes utilizar este password para ingresar al sistema. Luego lo puedes cambiar en tu perfil si deseas<br/>"."Password: $plainPassword";


        $message = (new TemplatedEmail())
            ->from('info@mayawork.com')
            ->to($userEmail)
            ->subject('Reinicia tu contraseña')
            ->htmlTemplate('reset_password/email.html.twig')
            ->context(['content' => $body]);


        $mailer->send($message);

        return $this->redirectToRoute('app_check_email');

    }


}
