<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Manifiesto
 *
 * @ORM\Table(name="manifiesto", indexes={@ORM\Index(name="created_by", columns={"created_by"}), @ORM\Index(name="voucher3_bank_id", columns={"voucher3_bank_id"}), @ORM\Index(name="voucher_bank_id", columns={"voucher_bank_id"}), @ORM\Index(name="voucher2_bank_id", columns={"voucher2_bank_id"}), @ORM\Index(name="dealer_id", columns={"dealer_id"}), @ORM\Index(name="check_bank_id", columns={"check_bank_id"})})
 * @ORM\Entity
 */
/**
 * @ORM\Entity(repositoryClass="App\Repository\ManifiestoRepository")
 */
class Manifiesto
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
     * @ORM\Column(name="voucher_number", type="string", length=32, nullable=true, options={"default"="N/A"})
     */
    private $voucherNumber = 'N/A';

    /**
     * @var string|null
     *
     * @ORM\Column(name="tax_voucher_number", type="string", length=32, nullable=true, options={"default"="N/A"})
     */
    private $taxVoucherNumber = 'N/A';


    /**
     * @var string|null
     *
     * @ORM\Column(name="check_number", type="string", length=32, nullable=true, options={"default"="N/A"})
     */
    private $checkNumber = 'N/A';

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="check_date", type="date", nullable=true)
     */
    private $checkDate;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="voucher_date", type="date", nullable=true)
     */
    private $voucherDate;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="tax_voucher_date", type="date", nullable=true)
     */
    private $taxVoucherDate;

    /**
     * @var float|null
     *
     * @ORM\Column(name="credit", type="float", precision=10, scale=0, nullable=true, options={"comment"="descuento de creditos"})
     */
    private $credit = 0;

    /**
     * @var float|null
     *
     * @ORM\Column(name="cash", type="float", precision=10, scale=0, nullable=true)
     */
    private $cash = 0;


    /**
     * @var float|null
     *
     * @ORM\Column(name="tax_cash", type="float", precision=10, scale=0, nullable=true)
     */
    private $taxCash = 0;
    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="created_at", type="datetime", nullable=true)
     */
    private $createdAt;

    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=0, nullable=false, options={"default"="Pendiente de Pago"})
     */
    private $status = 'Pendiente de Pago';

    /**
     * @var float
     *
     * @ORM\Column(name="total", type="float", precision=10, scale=2, nullable=false, options={"default"="0.00"})
     */
    private $total = 0.00;

    /**
     * @var float
     *
     * @ORM\Column(name="tax_total", type="float", precision=10, scale=2, nullable=false, options={"default"="0.00"})
     */
    private $taxTotal = 0.00;

    /**
     * @var float
     *
     * @ORM\Column(name="balance", type="float", precision=10, scale=2, nullable=false, options={"default"="0.00"})
     */
    private $balance = 0.00;

    /**
     * @var float
     *
     * @ORM\Column(name="tax_balance", type="float", precision=10, scale=2, nullable=false, options={"default"="0.00"})
     */
    private $taxBalance = 0.00;


    /**
     * @var float|null
     *
     * @ORM\Column(name="check_amount", type="float", precision=10, scale=0, nullable=true)
     */
    private $checkAmount = 0;

    /**
     * @var float|null
     *
     * @ORM\Column(name="voucher_amount", type="float", precision=10, scale=0, nullable=true)
     */
    private $voucherAmount = 0;

    /**
     * @var float|null
     *
     * @ORM\Column(name="tax_voucher_amount", type="float", precision=10, scale=0, nullable=true)
     */
    private $taxVoucherAmount = 0;


    /**
     * @var string|null
     *
     * @ORM\Column(name="observation", type="text", length=65535, nullable=true)
     */
    private $observation;

    /**
     * @var string|null
     *
     * @ORM\Column(name="voucher2_number", type="string", length=32, nullable=true, options={"default"="N/A"})
     */
    private $voucher2Number = 'N/A';

    /**
     * @var string|null
     *
     * @ORM\Column(name="voucher3_number", type="string", length=32, nullable=true, options={"default"="N/A"})
     */
    private $voucher3Number = 'N/A';

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="voucher2_date", type="date", nullable=true)
     */
    private $voucher2Date;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="voucher3_date", type="date", nullable=true)
     */
    private $voucher3Date;

    /**
     * @var float|null
     *
     * @ORM\Column(name="voucher2_amount", type="float", precision=10, scale=0, nullable=true)
     */
    private $voucher2Amount = 0;

    /**
     * @var float|null
     *
     * @ORM\Column(name="voucher3_amount", type="float", precision=10, scale=0, nullable=true)
     */
    private $voucher3Amount = 0;

    /**
     * @var \Bank
     *
     * @ORM\ManyToOne(targetEntity="Bank")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="voucher3_bank_id", referencedColumnName="id")
     * })
     */
    private $voucher3Bank;

    /**
     * @var \Bank
     *
     * @ORM\ManyToOne(targetEntity="Bank")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="voucher2_bank_id", referencedColumnName="id")
     * })
     */
    private $voucher2Bank;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="created_by", referencedColumnName="id")
     * })
     */
    private $createdBy;

    /**
     * @var \Dealer
     *
     * @ORM\ManyToOne(targetEntity="Dealer")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="dealer_id", referencedColumnName="id")
     * })
     */
    private $dealer;

    /**
     * @var \Bank
     *
     * @ORM\ManyToOne(targetEntity="Bank")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="voucher_bank_id", referencedColumnName="id")
     * })
     */
    private $voucherBank;

    /**
     * @var \Bank
     *
     * @ORM\ManyToOne(targetEntity="Bank")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="tax_voucher_bank_id", referencedColumnName="id")
     * })
     */
    private $taxVoucherBank;

    /**
     * @var \Bank
     *
     * @ORM\ManyToOne(targetEntity="Bank")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="check_bank_id", referencedColumnName="id")
     * })
     */
    private $checkBank;


    /**
     * @var bool|null
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=true, options={"default"="1"})
     */
    private $enabled = true;

    /**
     * @var float
     *
     * @ORM\Column(name="discount", type="float", precision=10, scale=2, nullable=false, options={"default"="0.00"})
     */
    private $discount = '0.00';

    /**
     * @var string|null
     *
     * @ORM\Column(name="discount_description", type="text", length=65535, nullable=true)
     */
    private $discountDescription;

    /**
     * @var float
     *
     * @ORM\Column(name="extra_amount", type="float", precision=10, scale=2, nullable=false, options={"default"="0.00"})
     */
    private $extraAmount = 0.00;

    /**
     * @var string|null
     *
     * @ORM\Column(name="extra_description", type="text", length=65535, nullable=true)
     */
    private $extraDescription;


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

    public function getVoucherNumber(): ?string
    {
        return $this->voucherNumber;
    }

    public function setVoucherNumber(?string $voucherNumber): self
    {
        $this->voucherNumber = $voucherNumber;

        return $this;
    }

    public function getTaxVoucherNumber(): ?string
    {
        return $this->taxVoucherNumber;
    }

    public function setTaxVoucherNumber(?string $taxVoucherNumber): self
    {
        $this->taxVoucherNumber = $taxVoucherNumber;

        return $this;
    }

    public function getCheckNumber(): ?string
    {
        return $this->checkNumber;
    }

    public function setCheckNumber(?string $checkNumber): self
    {
        $this->checkNumber = $checkNumber;

        return $this;
    }

    public function getCheckDate(): ?\DateTimeInterface
    {
        return $this->checkDate;
    }

    public function setCheckDate(?\DateTimeInterface $checkDate): self
    {
        $this->checkDate = $checkDate;

        return $this;
    }

    public function getVoucherDate(): ?\DateTimeInterface
    {
        return $this->voucherDate;
    }

    public function setVoucherDate(?\DateTimeInterface $voucherDate): self
    {
        $this->voucherDate = $voucherDate;

        return $this;
    }

    public function getTaxVoucherDate(): ?\DateTimeInterface
    {
        return $this->taxVoucherDate;
    }

    public function setTaxVoucherDate(?\DateTimeInterface $taxVoucherDate): self
    {
        $this->taxVoucherDate = $taxVoucherDate;

        return $this;
    }

    public function getCredit(): ?float
    {
        return $this->credit;
    }

    public function setCredit(?float $credit): self
    {
        $this->credit = $credit;

        return $this;
    }

    public function getCash(): ?float
    {
        return $this->cash;
    }

    public function setCash(?float $cash): self
    {
        $this->cash = $cash;

        return $this;
    }


    public function getTaxCash(): ?float
    {
        return $this->taxCash;
    }

    public function setTaxCash(?float $taxCash): self
    {
        $this->taxCash = $taxCash;

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

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getTotal(): ?float
    {
        return $this->total;
    }

    public function setTotal(float $total): self
    {
        $this->total = $total;

        return $this;
    }

    public function getTaxTotal(): ?float
    {
        return $this->taxTotal;
    }

    public function setTaxTotal(float $taxTotal): self
    {
        $this->taxTotal = $taxTotal;

        return $this;
    }

    public function getDiscount(): ?float
    {
        return $this->discount;
    }

    public function setDiscount(float $discount): self
    {
        $this->discount = $discount;

        return $this;
    }

    public function getBalance(): ?float
    {
        return $this->balance;
    }

    public function setBalance(float $balance): self
    {
        $this->balance = $balance;

        return $this;
    }

    public function getTaxBalance(): ?float
    {
        return $this->taxBalance;
    }

    public function setTaxBalance(float $taxBalance): self
    {
        $this->taxBalance = $taxBalance;

        return $this;
    }

    public function getCheckAmount(): ?float
    {
        return $this->checkAmount;
    }

    public function setCheckAmount(?float $checkAmount): self
    {
        $this->checkAmount = $checkAmount;

        return $this;
    }

    public function getVoucherAmount(): ?float
    {
        return $this->voucherAmount;
    }

    public function setVoucherAmount(?float $voucherAmount): self
    {
        $this->voucherAmount = $voucherAmount;

        return $this;
    }

    public function getTaxVoucherAmount(): ?float
    {
        return $this->taxVoucherAmount;
    }

    public function setTaxVoucherAmount(?float $taxVoucherAmount): self
    {
        $this->taxVoucherAmount = $taxVoucherAmount;

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

    public function getDiscountDescription(): ?string
    {
        return $this->discountDescription;
    }

    public function setDiscountDescription(?string $discountDescription): self
    {
        $this->discountDescription = $discountDescription;

        return $this;
    }

    public function getVoucher2Number(): ?string
    {
        return $this->voucher2Number;
    }

    public function setVoucher2Number(?string $voucher2Number): self
    {
        $this->voucher2Number = $voucher2Number;

        return $this;
    }

    public function getVoucher3Number(): ?string
    {
        return $this->voucher3Number;
    }

    public function setVoucher3Number(?string $voucher3Number): self
    {
        $this->voucher3Number = $voucher3Number;

        return $this;
    }

    public function getVoucher2Date(): ?\DateTimeInterface
    {
        return $this->voucher2Date;
    }

    public function setVoucher2Date(?\DateTimeInterface $voucher2Date): self
    {
        $this->voucher2Date = $voucher2Date;

        return $this;
    }

    public function getVoucher3Date(): ?\DateTimeInterface
    {
        return $this->voucher3Date;
    }

    public function setVoucher3Date(?\DateTimeInterface $voucher3Date): self
    {
        $this->voucher3Date = $voucher3Date;

        return $this;
    }

    public function getVoucher2Amount(): ?float
    {
        return $this->voucher2Amount;
    }

    public function setVoucher2Amount(?float $voucher2Amount): self
    {
        $this->voucher2Amount = $voucher2Amount;

        return $this;
    }

    public function getVoucher3Amount(): ?float
    {
        return $this->voucher3Amount;
    }

    public function setVoucher3Amount(?float $voucher3Amount): self
    {
        $this->voucher3Amount = $voucher3Amount;

        return $this;
    }

    public function getVoucher3Bank(): ?Bank
    {
        return $this->voucher3Bank;
    }

    public function setVoucher3Bank(?Bank $voucher3Bank): self
    {
        $this->voucher3Bank = $voucher3Bank;

        return $this;
    }

    public function getVoucher2Bank(): ?Bank
    {
        return $this->voucher2Bank;
    }

    public function setVoucher2Bank(?Bank $voucher2Bank): self
    {
        $this->voucher2Bank = $voucher2Bank;

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

    public function getDealer(): ?Dealer
    {
        return $this->dealer;
    }

    public function setDealer(?Dealer $dealer): self
    {
        $this->dealer = $dealer;

        return $this;
    }

    public function getVoucherBank(): ?Bank
    {
        return $this->voucherBank;
    }

    public function setVoucherBank(?Bank $voucherBank): self
    {
        $this->voucherBank = $voucherBank;

        return $this;
    }

    public function getTaxVoucherBank(): ?Bank
    {
        return $this->taxVoucherBank;
    }

    public function setTaxVoucherBank(?Bank $taxVoucherBank): self
    {
        $this->taxVoucherBank = $taxVoucherBank;

        return $this;
    }

    public function getCheckBank(): ?Bank
    {
        return $this->checkBank;
    }

    public function setCheckBank(?Bank $checkBank): self
    {
        $this->checkBank = $checkBank;

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


    public function getExtraAmount(): ?float
    {
        return $this->extraAmount;
    }

    public function setExtraAmount(float $extraAmount): self
    {
        $this->extraAmount = $extraAmount;

        return $this;
    }


    public function getExtraDescription(): ?string
    {
        return $this->extraDescription;
    }

    public function setExtraDescription(?string $extraDescription): self
    {
        $this->extraDescription = $extraDescription;

        return $this;
    }


    /**
     * ToString name
     *
     * @return string
     */
    public function __toString()
    {
        return $this->code;

    }



}
