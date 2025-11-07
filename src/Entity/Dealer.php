<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Dealer
 *
 * @ORM\Table(name="dealer", indexes={@ORM\Index(name="state_id", columns={"state_id"}), @ORM\Index(name="category_id", columns={"category_id"})})
 * @ORM\Entity
 */
/**
 * @ORM\Entity(repositoryClass="App\Repository\DealerRepository")
 */
class Dealer
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
     * @ORM\Column(name="enabled", type="integer", nullable=false, options={"unsigned"=true})


     */
    private $enabled;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=32, nullable=false, options={"default"="N/A"})
     */
    private $name = 'N/A';

    /**
     * @var string
     *
     * @ORM\Column(name="address", type="string", length=64, nullable=false, options={"default"="N/A"})
     */
    private $address = 'N/A';

    /**
     * @var string
     *
     * @ORM\Column(name="phone", type="string", length=32, nullable=false, options={"default"="N/A"})
     */
    private $phone = 'N/A';

    /**
     * @var float
     *
     * @ORM\Column(name="credit", type="float", precision=10, scale=2, nullable=false, options={"default"="0.00"})
     */
    private $credit = '0.00';

    /**
     * @var bool
     *
     * @ORM\Column(name="med_economic", type="boolean", nullable=false, options={"default"="1"})
     */
    private $medEconomic = true;

    /**
     * @var bool
     *
     * @ORM\Column(name="med_express", type="boolean", nullable=false, options={"default"="1"})
     */
    private $medExpress = true;

    /**
     * @var \Category
     *
     * @ORM\ManyToOne(targetEntity="Category")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="category_id", referencedColumnName="id")
     * })
     */
    private $category;

    /**
     * @var \GlobalState
     *
     * @ORM\ManyToOne(targetEntity="GlobalState")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="state_id", referencedColumnName="id")
     * })
     */
    private $state;

    /**
     * @ORM\Column(type="string", length=128)
     */
    private $invoice_name;

    /**
     * @ORM\Column(type="string", length=64)
     */
    private $nit;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getCredit(): ?float
    {
        return $this->credit;
    }

    public function setCredit(float $credit): self
    {
        $this->credit = $credit;

        return $this;
    }

    public function getMedEconomic(): ?bool
    {
        return $this->medEconomic;
    }

    public function setMedEconomic(bool $medEconomic): self
    {
        $this->medEconomic = $medEconomic;

        return $this;
    }

    public function getMedExpress(): ?bool
    {
        return $this->medExpress;
    }

    public function setMedExpress(bool $medExpress): self
    {
        $this->medExpress = $medExpress;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getState(): ?GlobalState
    {
        return $this->state;
    }

    public function setState(?GlobalState $state): self
    {
        $this->state = $state;

        return $this;
    }

    /**
     * ToString name
     *
     * @return string
     */
    public function __toString()
    {
        return $this->name;

    }

    public function getInvoiceName(): ?string
    {
        return $this->invoice_name;
    }

    public function setInvoiceName(string $invoice_name): self
    {
        $this->invoice_name = $invoice_name;

        return $this;
    }

    public function getNit(): ?string
    {
        return $this->nit;
    }

    public function setNit(string $nit): self
    {
        $this->nit = $nit;

        return $this;
    }

    public function getEnabled(): ?int
    {
        return $this->enabled;
    }

    public function setEnabled(string $enabled): self
    {
        $this->enabled = $enabled;

        return $this;
    }


}
