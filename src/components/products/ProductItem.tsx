import React from 'react'
import { ProductItemProps } from '../../types/product'

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li
      className="flex flex-col border p-4 rounded shadow-md gap-2
    bg-indigo-500"
    >
      <h3 className="text-2xl font-bold">{product.description}</h3>
      <p>strong: ${product.price.toFixed(2)}</p>
      <p>Stock: {product.stock}</p>
      <p>Categories: {product.categories.join(', ')}</p>
    </li>
  )
}

export default ProductItem
