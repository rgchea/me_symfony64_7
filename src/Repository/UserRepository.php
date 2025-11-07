<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface; // <-- add this

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newHashedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }

    // /**
    //  * @return User[] Returns an array of User objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function getRequiredDTData($start, $length, $orders, $search, $columns, $otherConditions)
    {
        // Create Main Query
        $query = $this->createQueryBuilder('u');

        // Create Count Query
        $countQuery = $this->createQueryBuilder('u');
        $countQuery->select('COUNT(u)');

        // Create inner joins
        $query->join('u.role', 'r');
        $countQuery->join('u.role', 'r');

        if(!empty($otherConditions)){
            $query->andWhere("u.id IN(".$otherConditions.") ");
            $countQuery->andWhere("u.id IN(".$otherConditions.") ");

        }

        //ENABLED
        $query->andWhere("u.enabled = 1");
        $countQuery->andWhere("u.enabled = 1");
        $query->andWhere("r.enabled = 1");
        $countQuery->andWhere("r.enabled = 1");


        // Fields Search
        foreach ($columns as $key => $column)
        {
            if ($column['search']['value'] != '')
            {
                // $searchItem is what we are looking for
                $searchItem = $column['search']['value'];
                $searchQuery = null;

                switch($column['name'])
                {
                    case 'id':
                    {
                        $searchQuery = 'u.id ='. $searchItem;
                        break;
                    }
                    case 'email':
                    {
                        $searchQuery = 'u.email LIKE \'%'.$searchItem.'%\'';
                        break;
                    }


                    case 'name':
                    {
                        $searchQuery = 'u.name LIKE \'%'.$searchItem.'%\'';
                        break;
                    }

                    case 'username':
                    {
                        $searchQuery = 'u.username LIKE \'%'.$searchItem.'%\'';
                        break;
                    }

                    case 'lastName':
                    {
                        $searchQuery = 'u.lastName LIKE \'%'.$searchItem.'%\'';
                        break;
                    }

                    case 'role':
                    {
                        $searchQuery = 'r.name LIKE \'%'.$searchItem.'%\'';
                        break;
                    }

                }


                if ($searchQuery !== null)
                {
                    $query->andWhere($searchQuery);
                    $countQuery->andWhere($searchQuery);
                }
            }
        }

        // Limit
        $query->setFirstResult($start)->setMaxResults($length);

        // Order
        // Orders
        foreach ($orders as $key => $order)
        {
            // Orders does not contain the name of the column, but its number,
            // so add the name so we can handle it just like the $columns array
            $orders[$key]['name'] = $columns[$order['column']]['name'];
        }

        foreach ($orders as $key => $order)
        {

            // $order['name'] is the name of the order column as sent by the JS
            if ($order['name'] != '')
            {
                $orderColumn = null;

                switch($order['name'])
                {
                    case 'id':
                    {
                        $orderColumn = 'u.id';
                        break;
                    }

                    case 'email':
                    {
                        $orderColumn = 'u.email';
                        break;
                    }

                    case 'username':
                    {
                        $orderColumn = 'u.username';
                        break;
                    }

                    case 'name':
                    {
                        $orderColumn = 'u.name';
                        break;
                    }


                    case 'lastName':
                    {
                        $orderColumn = 'u.lastName';
                        break;
                    }

                    case 'role':
                    {
                        $orderColumn = 'r.name';
                        break;
                    }

                }

                if ($orderColumn !== null)
                {
                    $query->orderBy($orderColumn, $order['dir']);
                }
            }
        }


        $results = $query->getQuery()->getResult();
        $countResult = $countQuery->getQuery()->getSingleScalarResult();

        return array(
            "results" 		=> $results,
            "countResult"	=> $countResult
        );
    }





}
