<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Entity\Service;

class ServiceType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name', null, array('label'=>"Nombre", 'required'=>true))
                ->add('medEconomic', null, array('label'=>"Med. Económico", 'required'=>false))
                ->add('medExpress', null, array('label'=>"Med. Express", 'required'=>false))
                ->add('enabled', null, array('label'=>"Habilitado", 'required' => false))
                ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => Service::class
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix(): ?string
    {
        return 'backend_adminbundle_service';
    }


}
