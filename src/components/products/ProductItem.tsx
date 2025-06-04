import React from 'react'
import { ProductItemProps } from '../../types/product'

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li
      className="flex flex-col border p-4 rounded shadow-md gap-1
    bg-indigo-500"
    >
      <h3 className="text-2xl font-bold">{product.description}</h3>
      <p >
        Price: <strong>${product.price.toFixed(2)}</strong>
      </p>
      <p>
        Stock: <strong>{product.stock}</strong>
      </p>
      <p>
        Categories: <strong>{product.categories.join(', ')}</strong>
      </p>
    </li>
  )
}

export default ProductItem
