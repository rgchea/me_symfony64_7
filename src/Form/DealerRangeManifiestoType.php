<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Doctrine\ORM\EntityRepository;
use App\Entity\Dealer;
use App\Entity\DealerRangeManifiesto;

class DealerRangeManifiestoType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('manifiestoFrom', null, array('label'=>"Manifiesto desde", 'required'=>true))
                ->add('manifiestoTo', null, array('label'=>"Manifiesto hasta", 'required'=>true))
                ->add('active', null, array('label'=>"Activo", 'required'=>true))
                //->add('dealer', null, array('label'=>"Consecionario", 'required'=>true));
				->add('dealer', null, array('class' => Dealer::class,
			    'query_builder' => function(EntityRepository $repository) { 
			            return $repository->createQueryBuilder('d')->orderBy('d.name', 'ASC');
			        },
			    'label'=>"Consecionario", 'required'=>true,
			    'required' => true
			    ))
                ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => DealerRangeManifiesto::class
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix(): ?string
    {
        return 'backend_adminbundle_dealerrangemanifiesto';
    }


}