<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * GlobalCountry
 *
 * @ORM\Table(name="global_country")
 * @ORM\Entity
 */
class GlobalCountry
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
     * @ORM\Column(name="name", type="string", length=32, nullable=false)
     */
    private $name = '';

    /**
     * @var string
     *
     * @ORM\Column(name="shortname", type="string", length=4, nullable=false)
     */
    private $shortname = '';

    /**
     * @var string
     *
     * @ORM\Column(name="area_code", type="string", length=4, nullable=false)
     */
    private $areaCode = '';

    /**
     * @var string
     *
     * @ORM\Column(name="currency", type="string", length=32, nullable=false)
     */
    private $currency = '';

    /**
     * @var string
     *
     * @ORM\Column(name="currency_short", type="string", length=4, nullable=false)
     */
    private $currencyShort = '';

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

    public function getShortname(): ?string
    {
        return $this->shortname;
    }

    public function setShortname(string $shortname): self
    {
        $this->shortname = $shortname;

        return $this;
    }

    public function getAreaCode(): ?string
    {
        return $this->areaCode;
    }

    public function setAreaCode(string $areaCode): self
    {
        $this->areaCode = $areaCode;

        return $this;
    }

    public function getCurrency(): ?string
    {
        return $this->currency;
    }

    public function setCurrency(string $currency): self
    {
        $this->currency = $currency;

        return $this;
    }

    public function getCurrencyShort(): ?string
    {
        return $this->currencyShort;
    }

    public function setCurrencyShort(string $currencyShort): self
    {
        $this->currencyShort = $currencyShort;

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

}
