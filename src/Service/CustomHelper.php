<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Core\Security;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Routing\RouterInterface;

use Symfony\Component\Notifier\Message\SmsMessage;
use Symfony\Component\Notifier\TexterInterface;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;

use Symfony\Component\Security\Core\User\UserInterface;

use App\Entity\User;
use App\Entity\ModuleAccess;
use App\Entity\Notification;
use App\Entity\GlobalCountry;

final class CustomHelper
{
    public function __construct(
        private EntityManagerInterface $em,
        private RequestStack $requestStack,
        private Security $security,
        private RouterInterface $router,
        private TranslatorInterface $translator,
    ) {}

    /** @return SessionInterface */
    private function session(): SessionInterface
    {
        $session = $this->requestStack->getCurrentRequest()?->getSession();
            if (!$session) {
                throw new \RuntimeException('No active session (CLI or no request).');
            }
            return $session;
        }

    public function getRandomCode(int $length = 8, string $entity = 'User', bool $min = false): string
    {
        $chars = $min
            ? "_ABCDEFGHIJKLMNO-PQRSTUVWX_Yab_cdefghijklmnnopqrs-tu-vwxyz011234567_89"
            : "ABCDEFGHIJKLMNOPQRSTUVWXY023456789";

        $pass = '';
        for ($i = 0; $i < $length; $i++) {
            $num = random_int(0, strlen($chars) - 1);
            $pass .= $chars[$num];
        }

        $codeField = $entity === 'User' ? 'secret_token' : 'code';
        if ($this->em->getRepository(User::class)->findOneBy([$codeField => $pass])) {
            return $this->getRandomCode($length, $entity, $min);
        }
        return $pass;
    }

    public function getUser(): ?UserInterface
    {
        return $this->security->getUser();
    }

    public function checkUsername(string $username, int $id): bool
    {
        $repo    = $this->em->getRepository(User::class);
        $check   = $repo->findBy(['username' => $username]);
        $checkId = $id ? [$repo->find($id)] : [];

        if ($id === 0) {
            return \count($check) > 0;
        }
        if (empty($check) || empty($checkId)) {
            return false;
        }
        return $check[0]->getId() !== $checkId[0]->getId();
    }

    public function checkEmail(string $email, int $id): bool
    {
        $repo    = $this->em->getRepository(User::class);
        $check   = $repo->findBy(['email' => $email]);
        $checkId = $id ? [$repo->find($id)] : [];

        if ($id === 0) {
            return \count($check) > 0;
        }
        if (\count($check) && \count($checkId)) {
            return $check[0]->getId() !== $checkId[0]->getId();
        }
        return false;
    }

    public function checkExistence(string $username, string $email, int $id): string
    {

        $usernameIsTaken = $this->checkUsername($username, $id);
        if($usernameIsTaken){
           return 'El username ingresado ya ha sido tomado por otro usuario';
        }

        return $this->checkEmail($email, $id)
            ? 'El correo ingresado ya ha sido tomado por otro usuario'
            : '';
    }

    public function flashCustom($request, string $message): void
    {
        $request->getSession()->getFlashBag()->add('warning', $message);
    }

    public function flashWarning($request): void
    {
        $request->getSession()->getFlashBag()->add('warning', $this->translator->trans('label_flash_save_warning_msg'));
    }

    public function flashSuccess($request): void
    {
        $request->getSession()->getFlashBag()->add('success', $this->translator->trans('label_flash_save_success_msg'));
    }

    public function flashWarningForeignKey($request): void
    {
        $request->getSession()->getFlashBag()->add('warning', $this->translator->trans('label_flash_delete_msg'));
    }

    public function userHasAccess(): bool
    {
        $item       = $this->session()->get('item');
        $userAccess = $this->session()->get('user_access');

        if ($userAccess === null) {
            return false;
        }

        foreach ((array) $userAccess as $value) {
            if (($value['moduleType'] ?? null) === 'menu') {
                foreach ($value as $maybeArray) {
                    if (\is_array($maybeArray) && ($maybeArray['systemName'] ?? null) === $item) {
                        return true;
                    }
                }
            } else {
                if (($value['systemName'] ?? null) === $item) {
                    return true;
                }
            }
        }
        return false;
    }

    public function getUserAccess(): void
    {
        $user = $this->getUser();
        if (!$user) {
            return;
        }

        $role = $user->getRole(); // assumes your User has getRole() returning an entity with getId()
        $userAccess = $this->em->getRepository(ModuleAccess::class)->getUserAccessByRole($role->getId());

        $this->session()->set('user_access', $userAccess);
        $this->session()->set('user_role', $role);
    }

    public function systemNotification($to, $name, $description, $type = null): void
    {
        $this->em->getRepository(Notification::class)->systemNotification($to, $name, $description, $type);
    }

    public function setVars($item): void
    {
        $this->session()->set('item', $item);

        if (!$this->security->isGranted('ROLE_USER')) {
            throw new AccessDeniedException();
        }

        $user = $this->getUser();
        if (!$user) {
            throw new AccessDeniedException();
        }

        $this->session()->set('user_logged', $user);

        $this->getUserAccess();
        if (!$this->userHasAccess()) {
            throw new AccessDeniedException();
        }

        $this->session()->set('userLogged', $user);
    }

    public function quitar_tildes(string $cadena): string
    {
        $no = ["á","é","í","ó","ú","Á","É","Í","Ó","Ú","ñ","À","Ã","Ì","Ò","Ù","Ã™","Ã ","Ã¨","Ã¬","Ã²","Ã¹","ç","Ç","Ã¢","ê","Ã®","Ã´","Ã»","Ã‚","ÃŠ","ÃŽ","Ã”","Ã›","ü","Ã¶","Ã–","Ã¯","Ã¤","«","Ò","Ã","Ã„","Ã‹"];
        $si = ["a","e","i","o","u","A","E","I","O","U","n","N","A","E","I","O","U","a","e","i","o","u","c","C","a","e","i","o","u","A","E","I","O","U","u","o","O","i","a","e","U","I","A","E"];
        return str_replace($no, $si, $cadena);
    }

    public function serviceDataTable($request, $repository, array $results, string $myItems): \Symfony\Component\HttpFoundation\JsonResponse
    {
        if ($request->getMethod() !== 'POST') {
            throw new \RuntimeException('Invalid method');
        }

        $draw     = (int) $request->request->get('draw', 0);
        $total    = $this->getQueryCount($repository);
        $filtered = (int) ($results['countResult'] ?? 0);

        $response = sprintf(
            '{"draw": %d, "recordsTotal": %d, "recordsFiltered": %d, "data": [%s]}',
            $draw,
            $total,
            $filtered,
            $myItems
        );

        $json = new \Symfony\Component\HttpFoundation\JsonResponse();
        $json->setJson($response);
        return $json;
    }

    public function blameOnMe(object $entity, ?string $type = null, ?UserInterface $user = null, ?string $myDate = null): void
    {
        \date_default_timezone_set('America/Guatemala');

        $user = $user ?? $this->getUser();
        $now  = $myDate ? \date($myDate . ' H:i:s') : \date('Y-m-d H:i:s');

        if ($type === 'create') {
            $entity->setCreatedBy($user);
            $entity->setCreatedAt(new \DateTime($now));
        } elseif ($type === 'update') {
            $entity->setUpdatedBy($user);
            $entity->setUpdatedAt(new \DateTime($now));
        } else {
            $entity->setCreatedBy($user);
            $entity->setCreatedAt(new \DateTime($now));
            $entity->setUpdatedBy($user);
            $entity->setUpdatedAt(new \DateTime($now));
        }
    }

    public function getQueryCount($repository): int
    {
        return (int) $repository
            ->createQueryBuilder('object')
            ->select('count(object.id)')
            ->where('object.enabled = 1')
            ->getQuery()
            ->getSingleScalarResult();
    }

    public function time_elapsed_A(string $datetime1, ?string $datetime2 = null): string
    {
        $datetime2 ??= \gmdate('Y-m-d');
        $difference = (new \DateTime($datetime1))->diff(new \DateTime($datetime2));

        $parts = [];
        if ($difference->y) $parts[] = $difference->y . ' ' . $this->translator->trans('label_years');
        if ($difference->m) $parts[] = $difference->m . ' ' . $this->translator->trans('label_months');
        if ($difference->d) $parts[] = $difference->d . ' ' . $this->translator->trans('label_days');
        if ($difference->h) $parts[] = $difference->h . ' ' . $this->translator->trans('label_hours');

        return \implode(' ', $parts);
    }

    public function time_Ago(string $date1, string $date2): string
    {
        $diff  = \strtotime($date1) - \strtotime($date2);
        $sec   = $diff;
        $min   = (int) \round($diff / 60);
        $hrs   = (int) \round($diff / 3600);
        $days  = (int) \round($diff / 86400);
        $weeks = (int) \round($diff / 604800);
        $mnths = (int) \round($diff / 2600640);
        $yrs   = (int) \round($diff / 31207680);

        if ($sec <= 60) return $sec . $this->translator->trans('seconds_ago');
        if ($min <= 60) return $min === 1 ? $this->translator->trans('one_minute_ago') : $min . $this->translator->trans('minutes_ago');
        if ($hrs <= 24) return $hrs === 1 ? $this->translator->trans('an_hour_ago') : $hrs . $this->translator->trans('hours_ago');
        if ($days <= 7) return $days === 1 ? $this->translator->trans('yesterday') : $days . $this->translator->trans('days_ago');
        if ($weeks <= 4.3) return $weeks === 1 ? $this->translator->trans('a_week_ago') : $weeks . $this->translator->trans('weeks_ago');
        if ($mnths <= 12) return $mnths === 1 ? $this->translator->trans('a_month_ago') : $mnths . $this->translator->trans('months_ago');
        return $yrs === 1 ? $this->translator->trans('one_year_ago') : $yrs . $this->translator->trans('years_ago');
    }

    public function cleanString(string $text): string
    {
        $text = \trim($text);
        $text = $this->quitar_tildes($text);

        $trans = \get_html_translation_table(HTML_ENTITIES);
        $trans[chr(130)]='&sbquo;'; $trans[chr(131)]='&fnof;'; $trans[chr(132)]='&bdquo;'; $trans[chr(133)]='&hellip;';
        $trans[chr(134)]='&dagger;'; $trans[chr(135)]='&Dagger;'; $trans[chr(136)]='&circ;'; $trans[chr(137)]='&permil;';
        $trans[chr(138)]='&Scaron;'; $trans[chr(139)]='&lsaquo;'; $trans[chr(140)]='&OElig;'; $trans[chr(145)]='&lsquo;';
        $trans[chr(146)]='&rsquo;'; $trans[chr(147)]='&ldquo;'; $trans[chr(148)]='&rdquo;'; $trans[chr(149)]='&bull;';
        $trans[chr(150)]='&ndash;'; $trans[chr(151)]='&mdash;'; $trans[chr(152)]='&tilde;'; $trans[chr(153)]='&trade;';
        $trans[chr(154)]='&scaron;'; $trans[chr(155)]='&rsaquo;'; $trans[chr(156)]='&oelig;'; $trans[chr(159)]='&Yuml;';
        $trans['euro']='&euro;';
        \ksort($trans);
        foreach ($trans as $k => $v) {
            $text = \str_replace($v, $k, $text);
        }

        $text = \strip_tags($text);
        $text = \html_entity_decode($text);

        return $text;
    }

    public function escapeJsonString(string $value): string
    {
        $esc = ["\\", "/", "\"", "\n", "\r", "\t", "\x08", "\x0c"];
        $rep = ["\\\\","\\/","\\\"","\\n","\\r","\\t","\\f","\\b"];
        return \str_replace($esc, $rep, $value);
    }

    public function generalTemplateMail(string $subject, string $to, string $body, ?string $from = null, MailerInterface $mailer): void
    {
        $email = (new TemplatedEmail())
            ->from($from ?: 'info@mayawork.com')
            ->to($to)
            ->subject($subject)
            ->htmlTemplate('Default/email.html.twig')
            ->context(['content' => $body]);

        $mailer->send($email); // MailerInterface::send() returns void
    }

    public function getCurrency(): array
    {
        $arr = ['currency' => '', 'currencyShort' => ''];
        $country = $this->em->getRepository(GlobalCountry::class)->find(1);
        if ($country) {
            $arr['currency'] = $country->getCurrency();
            $arr['currencyShort'] = $country->getCurrencyShort();
        }
        return $arr;
    }

    public function addLog(string $detail, UserInterface $user, string $action = 'none', $guide = null): void
    {
        \date_default_timezone_set('America/Guatemala');

        $log = new \App\Entity\SystemLog();
        $log->setAction($action);
        $log->setCreatedBy($user);
        $log->setDetail($detail);
        $log->setCreatedAt(new \DateTime(\date('Y-m-d H:i:s')));

        if ($guide !== null) {
            $log->setGuide($guide);
        }

        $this->em->persist($log);
        $this->em->flush();
    }

    public function sendMySMS(TexterInterface $texter, string $phone, string $message): void
    {
        try {
            $texter->send(new SmsMessage($phone, $message));
        } catch (\Throwable $e) {
            // log if needed
        }
    }
}
