<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * InventoryOrderProduct
 *
 * @ORM\Table(name="inventory_order_product", indexes={@ORM\Index(name="inventory_product_id", columns={"inventory_product_id"}), @ORM\Index(name="inventory_order_header_id", columns={"inventory_order_header_id"})})
 * @ORM\Entity
 */
/**
 * @ORM\Entity(repositoryClass="App\Repository\InventoryOrderProductRepository")
 */
class InventoryOrderProduct
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
     * @ORM\Column(name="quantity", type="integer", nullable=false, options={"default"="1","unsigned"=true})
     */
    private $quantity = '1';

    /**
     * @var \InventoryProduct
     *
     * @ORM\ManyToOne(targetEntity="InventoryProduct")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="inventory_product_id", referencedColumnName="id")
     * })
     */
    private $inventoryProduct;

    /**
     * @var \InventoryOrderHeader
     *
     * @ORM\ManyToOne(targetEntity="InventoryOrderHeader")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="inventory_order_header_id", referencedColumnName="id")
     * })
     */
    private $inventoryOrderHeader;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getInventoryProduct(): ?InventoryProduct
    {
        return $this->inventoryProduct;
    }

    public function setInventoryProduct(?InventoryProduct $inventoryProduct): self
    {
        $this->inventoryProduct = $inventoryProduct;

        return $this;
    }

    public function getInventoryOrderHeader(): ?InventoryOrderHeader
    {
        return $this->inventoryOrderHeader;
    }

    public function setInventoryOrderHeader(?InventoryOrderHeader $inventoryOrderHeader): self
    {
        $this->inventoryOrderHeader = $inventoryOrderHeader;

        return $this;
    }


}
