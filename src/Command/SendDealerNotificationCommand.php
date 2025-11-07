<?php
namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use App\Service\CustomHelper;
use App\Entity\DealerNotification;
use Doctrine\ORM\EntityManagerInterface;
use Twig\Environment;

#MAILER
use Symfony\Component\Mailer\Mailer;
use Symfony\Bridge\Twig\Mime\Address;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

class SendDealerNotificationCommand extends Command
{

    protected static $defaultName = 'maya:dealernotification';


    private \Doctrine\ORM\EntityManagerInterface $em;
    private \App\Service\CustomHelper $customHelper;
    private \Symfony\Component\Mailer\MailerInterface $mailer;
    private \Twig\Environment $twig;

    public function __construct(EntityManagerInterface $em, CustomHelper $customHelper,  MailerInterface $mailer, Environment $twig)
    {
        parent::__construct();
        $this->em = $em;
        $this->customHelper = $customHelper;
        $this->mailer = $mailer;
        $this->twig = $twig;
    }

    protected function configure()
    {
        $this
            //->setName('maya:dealernotification')
            ->setDescription('Sends an email to admin, about the dealers who do not have guides today')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): ?int
    {
        date_default_timezone_set('America/Guatemala');

        $em = $this->em;

        $dealersNotification = $em->getRepository(DealerNotification::class)->findAll();
        if($dealersNotification){

            $date = date("d/m/Y");

            $to = array("scabrera@mayaexpress.com.gt", "info@entrenegociantes.com", "cheametal@gmail.com");
            //$to = "cheametal@gmail.com";

            $dealers = $em->getRepository(DealerNotification::class)->getDealersCountGuides($dealersNotification);
            //var_dump($dealers);die;

            if(count($dealers) > 0){

                //print count($dealers);die;
                $body = "Los siguientes concesionarios no han registrado guías el día de hoy:<br/>";

                $subject = "Maya Express {$date} alerta envíos concesionarios";
                foreach ($dealers as $key => $value){
                    $body .= "{$value}<br/>";
                    //$response = $this->customHelper->generalTemplateMail($subject, $to, $body, $from = null, $this->mailer);
                }

                /*
                $email = (new Email())
                    ->setFrom('info@mayawork.com')
                    ->setTo($to)
                    ->subject($subject)
                    ->htmlTemplate('Default/email.html.twig')
                    ->context(['content' => $body]);
                */
                $email = (new TemplatedEmail())
                    ->from('info@mayawork.com')
                    ->to($to)
                    ->subject($subject)
                    ->htmlTemplate('Default/email.html.twig')
                    ->context(['content' => $body]);


                $this->mailer->send($email);
            }
        }

        // return this if there was no problem running the command
        // (it's equivalent to returning int(0))
        return Command::SUCCESS;

    }
}