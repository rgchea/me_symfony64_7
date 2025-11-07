<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * DealerRangeGuide
 *
 * @ORM\Table(name="dealer_range_guide", indexes={@ORM\Index(name="dealer_id", columns={"dealer_id"})})
 * @ORM\Entity
 */
/**
 * @ORM\Entity(repositoryClass="App\Repository\DealerRangeGuideRepository")
 */
class DealerRangeGuide
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false, options={"unsigned"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="guide_from", type="integer", nullable=false)
     */
    private $guideFrom = '0';

    /**
     * @var int
     *
     * @ORM\Column(name="guide_to", type="integer", nullable=false)
     */
    private $guideTo = '0';

    /**
     * @var bool
     *
     * @ORM\Column(name="active", type="boolean", nullable=false, options={"default"="1"})
     */
    private $active = true;

    /**
     * @var \Dealer
     *
     * @ORM\ManyToOne(targetEntity="Dealer")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="dealer_id", referencedColumnName="id")
     * })
     */
    private $dealer;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getGuideFrom(): ?int
    {
        return $this->guideFrom;
    }

    public function setGuideFrom(int $guideFrom): self
    {
        $this->guideFrom = $guideFrom;

        return $this;
    }

    public function getGuideTo(): ?int
    {
        return $this->guideTo;
    }

    public function setGuideTo(int $guideTo): self
    {
        $this->guideTo = $guideTo;

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getDealer(): ?Dealer
    {
        return $this->dealer;
    }

    public function setDealer(?Dealer $dealer): self
    {
        $this->dealer = $dealer;

        return $this;
    }


}
