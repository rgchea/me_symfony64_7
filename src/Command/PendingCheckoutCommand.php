<?php
namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

use App\Service\CustomHelper;
use App\Entity\Guide;
use Doctrine\ORM\EntityManagerInterface;
use Twig\Environment;

#MAILER
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\MailerInterface;


class PendingCheckoutCommand extends Command
{

    protected static $defaultName = 'maya:pendingcheckout';


    private \Doctrine\ORM\EntityManagerInterface $em;
    private \App\Service\CustomHelper $customHelper;
    private \Symfony\Component\Mailer\MailerInterface $mailer;
    private \Twig\Environment $twig;

    public function __construct(EntityManagerInterface $em, CustomHelper $customHelper, MailerInterface $mailer, Environment $twig)
    {
        parent::__construct();
        $this->em = $em;
        //$this->em = $this->getDoctrine()->getManager();
        $this->customHelper = $customHelper;
        $this->mailer = $mailer;
        $this->twig = $twig;
    }

    protected function configure()
    {
        $this
            //->setName('maya:dealernotification')
            ->setDescription('this command updates to En transito, the guides that has been already put in a box, but the status remains Confirmado')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): ?int
    {
        date_default_timezone_set('America/Guatemala');

        $em = $this->em;

        //$repo = $em->getRepository(Guide::class);
        //dump(get_class($repo)); die;

        $dealersNotification = $em->getRepository(Guide::class)->updatePendingCheckout();

        // return this if there was no problem running the command
        // (it's equivalent to returning int(0))
        return Command::SUCCESS;

    }
}