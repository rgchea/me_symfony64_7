<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Guide
 *
 * @ORM\Table(name="guide", indexes={@ORM\Index(name="updated_by", columns={"updated_by"}), @ORM\Index(name="IDX_CA9EC735DA884280", columns={"new_shipping_id"}), @ORM\Index(name="service_id", columns={"service_id"}), @ORM\Index(name="claim_id", columns={"claim_id"}), @ORM\Index(name="manifiesto_id", columns={"manifiesto_id"}), @ORM\Index(name="box_id", columns={"box_id"})})
 * @ORM\Entity
 */
/**
 * @ORM\Entity(repositoryClass="App\Repository\GuideRepository")
 */
class Guide
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
     * @ORM\Column(name="code", type="string", length=64, nullable=false, options={"default"="N/A"})
     */
    private $code = 'N/A';

    /**
     * @var string|null
     *
     * @ORM\Column(name="sender_name", type="string", length=32, nullable=true, options={"default"="N/A"})
     */
    private $senderName = 'N/A';

    /**
     * @var string|null
     *
     * @ORM\Column(name="sender_address", type="string", length=64, nullable=true, options={"default"="N/A"})
     */
    private $senderAddress = 'N/A';

    /**
     * @var string|null
     *
     * @ORM\Column(name="sender_phone", type="string", length=32, nullable=true, options={"default"="N/A"})
     */
    private $senderPhone = 'N/A';

    /**
     * @var string|null
     *
     * @ORM\Column(name="receiver_name", type="string", length=32, nullable=true, options={"default"="N/A"})
     */
    private $receiverName = 'N/A';

    /**
     * @var string|null
     *
     * @ORM\Column(name="receiver_address", type="string", length=64, nullable=true, options={"default"="N/A"})
     */
    private $receiverAddress = 'N/A';

    /**
     * @var string|null
     *
     * @ORM\Column(name="receiver_phone", type="string", length=32, nullable=true, options={"default"="N/A"})
     */
    private $receiverPhone = 'N/A';

    /**
     * @var string|null
     *
     * @ORM\Column(name="sent_data", type="text", length=65535, nullable=true)
     */
    private $sentData;

    /**
     * @var float
     *
     * @ORM\Column(name="weight", type="float", precision=10, scale=2, nullable=false, options={"default"="0.00"})
     */
    private $weight = '0.00';

    /**
     * @var float
     *
     * @ORM\Column(name="price", type="float", precision=10, scale=2, nullable=false, options={"default"="0.00"})
     */
    private $price = '0.00';

    /**
     * @var float|null
     *
     * @ORM\Column(name="product_value", type="float", precision=10, scale=2, nullable=true)
     */
    private $productValue;

    /**
     * @var float|null
     *
     * @ORM\Column(name="commission", type="float", precision=10, scale=0, nullable=true)
     */
    private $commission = '0';

    /**
     * @var string
     *
     * @ORM\Column(name="payment_status", type="string", length=32, nullable=false, options={"default"="Cancelado"})
     */
    private $paymentStatus = 'Cancelado';

    /**
     * @var string|null
     *
     * @ORM\Column(name="tracking", type="string", length=255, nullable=true, options={"default"="N/A"})
     */
    private $tracking = 'N/A';

    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=64, nullable=false, options={"default"="Ingresado"})
     */
    private $status = 'Ingresado';

    /**
     * @var string|null
     *
     * @ORM\Column(name="tracking_charge", type="string", length=255, nullable=true, options={"default"="N/A"})
     */
    private $trackingCharge = 'N/A';

    /**
     * @var string|null
     *
     * @ORM\Column(name="comment", type="text", length=65535, nullable=true)
     */
    private $comment;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="sent_at", type="datetime", nullable=true, options={"default"="2001-01-01 00:00:00"})
     */
    private $sentAt = '2001-01-01 00:00:00';

    /**
     * @var string|null
     *
     * @ORM\Column(name="fedex", type="string", length=255, nullable=true, options={"default"="N/A"})
     */
    private $fedex = 'N/A';

    /**
     * @var string|null
     *
     * @ORM\Column(name="sms_message", type="string", length=256, nullable=true)
     */
    private $smsMessage = '';

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="updated_by", referencedColumnName="id")
     * })
     */
    private $updatedBy;

    /**
     * @var \Claim
     *
     * @ORM\ManyToOne(targetEntity="Claim")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="claim_id", referencedColumnName="id")
     * })
     */
    private $claim;

    /**
     * @var \NewShipping
     *
     * @ORM\ManyToOne(targetEntity="NewShipping")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="new_shipping_id", referencedColumnName="id")
     * })
     */
    private $newShipping;

    /**
     * @var \Manifiesto
     *
     * @ORM\ManyToOne(targetEntity="Manifiesto")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="manifiesto_id", referencedColumnName="id")
     * })
     */
    private $manifiesto;

    /**
     * @var \Service
     *
     * @ORM\ManyToOne(targetEntity="Service")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="service_id", referencedColumnName="id")
     * })
     */
    private $service;

    /**
     * @var \Box
     *
     * @ORM\ManyToOne(targetEntity="Box")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="box_id", referencedColumnName="id")
     * })
     */
    private $box;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=true, options={"default"="1"})
     */
    private $enabled = true;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $dhl;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=64, nullable=false, options={"default"="N/A"})
     */
    private $nit = 'N/A';

    /**
     * @ORM\Column(name="alternate_code", type="string", length=64, nullable=false, options={"default"="N/A"})
     */
    private $alternateCode = 'N/A';

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }


    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getSenderName(): ?string
    {
        return $this->senderName;
    }

    public function setSenderName(?string $senderName): self
    {
        $this->senderName = $senderName;

        return $this;
    }

    public function getSenderAddress(): ?string
    {
        return $this->senderAddress;
    }

    public function setSenderAddress(?string $senderAddress): self
    {
        $this->senderAddress = $senderAddress;

        return $this;
    }

    public function getSenderPhone(): ?string
    {
        return $this->senderPhone;
    }

    public function setSenderPhone(?string $senderPhone): self
    {
        $this->senderPhone = $senderPhone;

        return $this;
    }

    public function getReceiverName(): ?string
    {
        return $this->receiverName;
    }

    public function setReceiverName(?string $receiverName): self
    {
        $this->receiverName = $receiverName;

        return $this;
    }

    public function getReceiverAddress(): ?string
    {
        return $this->receiverAddress;
    }

    public function setReceiverAddress(?string $receiverAddress): self
    {
        $this->receiverAddress = $receiverAddress;

        return $this;
    }

    public function getReceiverPhone(): ?string
    {
        return $this->receiverPhone;
    }

    public function setReceiverPhone(?string $receiverPhone): self
    {
        $this->receiverPhone = $receiverPhone;

        return $this;
    }

    public function getSentData(): ?string
    {
        return $this->sentData;
    }

    public function setSentData(?string $sentData): self
    {
        $this->sentData = $sentData;

        return $this;
    }

    public function getWeight(): ?float
    {
        return $this->weight;
    }

    public function setWeight(float $weight): self
    {
        $this->weight = $weight;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->price;
    }

    public function setPrice(float $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getProductValue(): ?float
    {
        return $this->productValue;
    }

    public function setProductValue(?float $productValue): self
    {
        $this->productValue = $productValue;

        return $this;
    }

    public function getCommission(): ?float
    {
        return $this->commission;
    }

    public function setCommission(?float $commission): self
    {
        $this->commission = $commission;

        return $this;
    }

    public function getPaymentStatus(): ?string
    {
        return $this->paymentStatus;
    }

    public function setPaymentStatus(string $paymentStatus): self
    {
        $this->paymentStatus = $paymentStatus;

        return $this;
    }

    public function getTracking(): ?string
    {
        return $this->tracking;
    }

    public function setTracking(?string $tracking): self
    {
        $this->tracking = $tracking;

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

    public function getTrackingCharge(): ?string
    {
        return $this->trackingCharge;
    }

    public function setTrackingCharge(?string $trackingCharge): self
    {
        $this->trackingCharge = $trackingCharge;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    public function getSentAt(): ?\DateTimeInterface
    {
        return $this->sentAt;
    }

    public function setSentAt(?\DateTimeInterface $sentAt): self
    {
        $this->sentAt = $sentAt;

        return $this;
    }

    public function getFedex(): ?string
    {
        return $this->fedex;
    }

    public function setFedex(?string $fedex): self
    {
        $this->fedex = $fedex;

        return $this;
    }

    public function getSmsMessage(): ?string
    {
        return $this->smsMessage;
    }

    public function setSmsMessage(?string $smsMessage): self
    {
        $this->smsMessage = $smsMessage;

        return $this;
    }

    public function getUpdatedBy(): ?User
    {
        return $this->updatedBy;
    }

    public function setUpdatedBy(?User $updatedBy): self
    {
        $this->updatedBy = $updatedBy;

        return $this;
    }

    public function getClaim(): ?Claim
    {
        return $this->claim;
    }

    public function setClaim(?Claim $claim): self
    {
        $this->claim = $claim;

        return $this;
    }

    public function getNewShipping(): ?NewShipping
    {
        return $this->newShipping;
    }

    public function setNewShipping(?NewShipping $newShipping): self
    {
        $this->newShipping = $newShipping;

        return $this;
    }

    public function getManifiesto(): ?Manifiesto
    {
        return $this->manifiesto;
    }

    public function setManifiesto(?Manifiesto $manifiesto): self
    {
        $this->manifiesto = $manifiesto;

        return $this;
    }

    public function getService(): ?Service
    {
        return $this->service;
    }

    public function setService(?Service $service): self
    {
        $this->service = $service;

        return $this;
    }

    public function getBox(): ?Box
    {
        return $this->box;
    }

    public function setBox(?Box $box): self
    {
        $this->box = $box;

        return $this;
    }

    public function getEnabled(): ?bool
    {
        return $this->enabled;
    }

    public function setEnabled(?bool $enabled): self
    {
        $this->enabled = $enabled;

        return $this;
    }

    public function getDhl(): ?string
    {
        return $this->dhl;
    }

    public function setDhl(?string $dhl): self
    {
        $this->dhl = $dhl;

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

    public function getAlternateCode(): ?string
    {
        return $this->alternateCode;
    }

    public function setAlternateCode(?string $alternateCode): self
    {
        $this->alternateCode = $alternateCode;

        return $this;
    }


}
