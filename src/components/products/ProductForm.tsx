import React, { useState } from 'react'
import { Product } from '../../types/product'
import { generateUuid } from '../../utils/generateUuid'
import useCategories from '../../hooks/useCategories'

interface ProductFormProps {
  initialProduct?: Product
  onSubmit: (product: Product) => void
}

const ProductForm: React.FC<ProductFormProps> = ({
  initialProduct,
  onSubmit,
}) => {
  const title = '<AddProductForm />'
  const [product, setProduct] = useState<Product>(
    initialProduct || {
      id: '',
      stock: 0,
      description: '',
      categories: [],
      price: 0,
    }
  )
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const { categories, handleRawInputChange, resetCategories } = useCategories(
    product.categories
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setProduct((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value,
    }))
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!product.description.trim()) {
      newErrors.description = 'Description is required.'
    }
    if (categories.length === 0) {
      newErrors.categories = 'At least one category is required.'
    }
    if (product.price <= 0) {
      newErrors.price = 'Price must be greater than 0.'
    }
    if (product.stock < 0) {
      newErrors.stock = 'Stock cannot be negative.'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }
    const productWithIdAndCategories = {
      ...product,
      id: product.id || generateUuid(),
      categories, // Use the updated categories
    }

    // Log the product with updated categories
    if (process.env.NODE_ENV !== 'test') {
      console.log(productWithIdAndCategories) // Suppress during tests
    }

    onSubmit(productWithIdAndCategories)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md flex flex-col gap-5 p-4 bg-indigo-500 shadow-md rounded-md"
    >
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="description"
          className="block text-lg font-medium text-white"
        >
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Enter product description"
          required
          className="p-2 text-indigo-500 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.description && (
          <p className="bg-red-500 text-sm p-1">{errors.description}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="categories"
          className="block text-lg font-medium text-white"
        >
          Categories (comma-separated):
        </label>
        <input
          type="text"
          id="categories"
          name="categories"
          onChange={(e) => handleRawInputChange(e.target.value)}
          placeholder="e.g., Electronics, Home Appliances"
          required
          className="p-2 text-indigo-500 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.categories && (
          <p className="bg-red-500 text-sm p-1">{errors.categories}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="price" className="block text-lg font-medium text-white">
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Enter product price"
          required
          className="p-2 text-indigo-500 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.price && (
          <p className="bg-red-500 text-sm p-1">{errors.price}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="stock" className="block text-lg font-medium text-white">
          Stock:
        </label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          placeholder="Enter available stock"
          required
          className="p-2 text-indigo-500 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.stock && (
          <p className="bg-red-500 text-sm p-1">{errors.stock}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  )
}

export default ProductForm
