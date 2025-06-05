import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ProductItemProps } from '../../types/product'
import ProductActions from './ProductActions'
import ProductForm from './ProductForm' // Import ProductForm for editing

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false) // State to control modal visibility

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this product?'
    )
    if (confirmed) {
      dispatch({ type: 'DELETE_PRODUCT', payload: product.id })
    }
  }

  const handleEdit = () => {
    setIsEditing(true) // Open the modal
  }

  const handleFormSubmit = (updatedProduct: typeof product) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: updatedProduct }) // Dispatch UPDATE_PRODUCT action
    setIsEditing(false) // Close the modal
  }

  return (
    <>
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

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-black p-6 rounded shadow-md bg-opacity-20">
            <ProductForm initialProduct={product} onSubmit={handleFormSubmit} />
            <button
              className="mt-4 p-2 bg-red-500 text-white rounded"
              onClick={() => setIsEditing(false)} // Close the modal
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductItem
