import React, { useState } from 'react'
import { Product } from '../../types/product'
import { generateUuid } from '../../utils/generateUuid'
import useCategories from '../../hooks/useCategories'
import InputField from '../common/InputField'

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

  const { categories, rawInput, handleRawInputChange } = useCategories(
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
      <InputField
        label="Description:"
        id="description"
        name="description"
        type="text"
        value={product.description}
        placeholder="Enter product description"
        required
        error={errors.description}
        onChange={handleChange}
      />
      <InputField
        label="Categories (comma-separated):"
        id="categories"
        name="categories"
        type="text"
        value={rawInput} // Bind to rawInput state
        placeholder="e.g., Electronics, Home Appliances"
        required
        error={errors.categories}
        onChange={(e) => handleRawInputChange(e.target.value)}
      />
      <InputField
        label="Price:"
        id="price"
        name="price"
        type="number"
        value={product.price}
        placeholder="Enter product price"
        required
        error={errors.price}
        onChange={handleChange}
      />
      <InputField
        label="Stock:"
        id="stock"
        name="stock"
        type="number"
        value={product.stock}
        placeholder="Enter available stock"
        required
        error={errors.stock}
        onChange={handleChange}
      />
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
