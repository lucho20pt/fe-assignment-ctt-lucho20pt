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
        className="flex flex-col md:flex-row items-center justify-center p-4 gap-5
        border rounded shadow-md bg-indigo-500"
      >
        <article className="w-full flex flex-col gap-2">
          <h3 className="text-2xl font-bold">
            {product.description}
          </h3>
          <p>
            <u>Price</u>: <strong>${product.price.toFixed(2)}</strong>
          </p>
          <p>
            <u>Stock</u>: <strong>{product.stock}</strong>
          </p>
          <p>
            <u>Categories</u>: <br />
            <strong>
              <code className="text-sm">{product.categories.join(', ')}</code>
            </strong>
          </p>
        </article>
        <div>
          <ProductActions onDelete={handleDelete} onEdit={handleEdit} />
        </div>
      </li>

      {isEditing && (
        <div
          className="fixed inset-0 flex items-center justify-center 
        bg-black bg-opacity-60"
        >
          <div className="bg-black p-8 rounded shadow-md bg-opacity-20">
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
