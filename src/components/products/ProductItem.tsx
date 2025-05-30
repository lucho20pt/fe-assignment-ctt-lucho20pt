import React from 'react'

interface Product {
  id: string
  stock: number
  description: string
  categories: string[]
  price: number
}

interface ProductItemProps {
  product: Product
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li>
      <h3>{product.description}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Stock: {product.stock}</p>
      <p>Categories: {product.categories.join(', ')}</p>
    </li>
  )
}

export default ProductItem
