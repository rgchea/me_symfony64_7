<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Claim
 *
 * @ORM\Table(name="claim", indexes={@ORM\Index(name="new_guide_id", columns={"new_guide_id"}), @ORM\Index(name="created_by", columns={"created_by"})})
 * @ORM\Entity
 */
/**
 * @ORM\Entity(repositoryClass="App\Repository\ClaimRepository")
 */
class Claim
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
     * @var string
     *
     * @ORM\Column(name="claim", type="text", length=65535, nullable=false)
     */
    private $claim;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="created_at", type="datetime", nullable=true)
     */
    private $createdAt;

    /**
     * @var bool
     *
     * @ORM\Column(name="replacement", type="boolean", nullable=false)
     */
    private $replacement = '0';

    /**
     * @var bool
     *
     * @ORM\Column(name="product_purchase", type="boolean", nullable=false)
     */
    private $productPurchase = '0';

    /**
     * @var float|null
     *
     * @ORM\Column(name="product_purchase_amount", type="float", precision=10, scale=0, nullable=true)
     */
    private $productPurchaseAmount = '0';

    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=16, nullable=false, options={"default"="Pendiente"})
     */
    private $status = 'Pendiente';

    /**
     * @var string|null
     *
     * @ORM\Column(name="observation", type="text", length=65535, nullable=true)
     */
    private $observation;

    /**
     * @var string|null
     *
     * @ORM\Column(name="new_guide_code", type="string", length=32, nullable=true)
     */
    private $newGuideCode = '';

    /**
     * @var bool
     *
     * @ORM\Column(name="replaced", type="boolean", nullable=false)
     */
    private $replaced = '0';

    /**
     * @var \Guide
     *
     * @ORM\ManyToOne(targetEntity="Guide")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="new_guide_id", referencedColumnName="id")
     * })
     */
    private $newGuide;


    /**
     * @var \ClaimType
     *
     * @ORM\ManyToOne(targetEntity="ClaimType")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="claim_type_id", referencedColumnName="id")
     * })
     */
    private $claimType;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="created_by", referencedColumnName="id")
     * })
     */
    private $createdBy;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getClaim(): ?string
    {
        return $this->claim;
    }

    public function setClaim(string $claim): self
    {
        $this->claim = $claim;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getReplacement(): ?bool
    {
        return $this->replacement;
    }

    public function setReplacement(bool $replacement): self
    {
        $this->replacement = $replacement;

        return $this;
    }

    public function getProductPurchase(): ?bool
    {
        return $this->productPurchase;
    }

    public function setProductPurchase(bool $productPurchase): self
    {
        $this->productPurchase = $productPurchase;

        return $this;
    }

    public function getProductPurchaseAmount(): ?float
    {
        return $this->productPurchaseAmount;
    }

    public function setProductPurchaseAmount(?float $productPurchaseAmount): self
    {
        $this->productPurchaseAmount = $productPurchaseAmount;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(?string $observation): self
    {
        $this->observation = $observation;

        return $this;
    }

    public function getNewGuideCode(): ?string
    {
        return $this->newGuideCode;
    }

    public function setNewGuideCode(?string $newGuideCode): self
    {
        $this->newGuideCode = $newGuideCode;
        return $this;
    }


    public function getClaimType(): ?ClaimType
    {
        return $this->claimType;
    }

    public function setClaimType(?ClaimType $claimType): self
    {
        $this->claimType = $claimType;
        return $this;
    }

    public function getReplaced(): ?bool
    {
        return $this->replaced;
    }

    public function setReplaced(bool $replaced): self
    {
        $this->replaced = $replaced;

        return $this;
    }

    public function getNewGuide(): ?Guide
    {
        return $this->newGuide;
    }

    public function setNewGuide(?Guide $newGuide): self
    {
        $this->newGuide = $newGuide;

        return $this;
    }

    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $createdBy): self
    {
        $this->createdBy = $createdBy;

        return $this;
    }


}
