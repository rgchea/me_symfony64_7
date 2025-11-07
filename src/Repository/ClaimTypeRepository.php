<?php

namespace App\Repository;

use App\Entity\ClaimType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ClaimType|null find($id, $lockMode = null, $lockVersion = null)
 * @method ClaimType|null findOneBy(array $criteria, array $orderBy = null)
 * @method ClaimType[]    findAll()
 * @method ClaimType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClaimTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ClaimType::class);
    }

    // /**
    //  * @return ClaimType[] Returns an array of ClaimType objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ClaimType
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function getRequiredDTData($start, $length, $orders, $search, $columns, $otherConditions)
    {
        // Create Main Query
        $query = $this->createQueryBuilder('r');

        // Create Count Query
        $countQuery = $this->createQueryBuilder('r');
        $countQuery->select('COUNT(r)');

        //ENABLED
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
                        $searchQuery = 'r.id ='. $searchItem;
                        break;
                    }
                    case 'name':
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
                        $orderColumn = 'r.id';
                        break;
                    }
                    case 'name':
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
