import React from 'react'
import { ProductItemProps } from '../../types/product'

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <li
      className="flex flex-row border p-4 rounded shadow-md gap-5
    bg-indigo-500"
    >
      <article className="flex-1">
        <h3 className="text-2xl font-bold">{product.description}</h3>
        <p>
          Price: <strong>${product.price.toFixed(2)}</strong>
        </p>
        <p>
          Stock: <strong>{product.stock}</strong>
        </p>
        <p>
          Categories: <strong>{product.categories.join(', ')}</strong>
        </p>
      </article>

      <aside className="flex flex-row gap-4 items-start">
        <button className="p-2 hover:bg-indigo-600 text-xl bg-red-500 rounded-3xl">
          ✖
        </button>
        <button className="p-2 hover:bg-indigo-600 text-xl bg-green-500 rounded-3xl">
          ✏️
        </button>
      </aside>
    </li>
  )
}

export default ProductItem
