import React from 'react'
import { useDispatch } from 'react-redux'
import { ProductItemProps } from '../../types/product'
import ProductActions from './ProductActions'

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this product?'
    )
    if (confirmed) {
      dispatch({ type: 'DELETE_PRODUCT', payload: product.id })
    }
  }

  const handleEdit = () => {
    console.log('Edit product:', product.id)
  }

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
      <ProductActions onDelete={handleDelete} onEdit={handleEdit} />
    </li>
  )
}

export default ProductItem
