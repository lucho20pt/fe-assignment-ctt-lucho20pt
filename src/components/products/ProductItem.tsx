import React from 'react'
import { ProductItemProps } from '../../types/product'

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
