<?php

namespace App\Controller;

use App\Entity\User;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\Session\Session;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

#MAILER
use Symfony\Component\Mailer\Mailer;
use Symfony\Bridge\Twig\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;


class ResetPasswordController extends AbstractController
{

    public function requestAction(Request $request, MailerInterface $mailer): Response
    {

        return $this->render('reset_password/request.html.twig', [

        ]);
    }

    public function checkEmailAction(): Response
    {

        return $this->render('reset_password/check_email.html.twig', [

        ]);
    }



    public function sendMailAction(Request $request, MailerInterface $mailer, UserPasswordEncoderInterface $encoder){

        //print "entra1111";die;

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
