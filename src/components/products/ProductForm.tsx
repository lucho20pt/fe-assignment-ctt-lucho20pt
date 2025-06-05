import React, { useState } from 'react'
import { Product, ProductFormProps } from '../../types/product'
import { generateUuid } from '../../utils/generateUuid'
import { isValidUuid } from '../../utils/validateUuid'
import InputField from '../common/InputField'

const ProductForm: React.FC<ProductFormProps> = ({
  initialProduct,
  onSubmit,
}) => {
  const title = initialProduct ? '<EditProductForm />' : '<AddProductForm />'
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setProduct((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? parseFloat(value) : value,
    }))
  }

  const handleCategoriesChange = (value: string) => {
    const updatedCategories = value
      .split(',')
      .map((category) => category.trim())

    if (process.env.NODE_ENV !== 'test') {
      console.log('Updated Categories:', updatedCategories) // Debugging log
    }

    setProduct((prev) => ({
      ...prev,
      categories: updatedCategories,
    }))
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    if (!product.description.trim()) {
      newErrors.description = 'Description is required.'
    }
    if (product.categories.length === 0) {
      newErrors.categories = 'At least one category is required.' // Stop further validation if empty
    } else {
      if (process.env.NODE_ENV !== 'test') {
        console.log('Categories being validated:', product.categories) // Debugging log
      }
      const invalidCategories = product.categories.filter(
        (category) => !isValidUuid(category)
      )
      if (process.env.NODE_ENV !== 'test') {
        console.log('Invalid Categories:', invalidCategories) // Debugging log
      }
      if (invalidCategories.length > 0) {
        newErrors.categories =
          'All categories must be valid UUIDs (e.g., 123e4567-e89b-12d3-a456-426614174000).' // Validate UUIDs only if not empty
      }
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
    }

    // Log the product with updated categories
    if (process.env.NODE_ENV !== 'test') {
      console.log(productWithIdAndCategories) // Suppress during tests
    }

    onSubmit(productWithIdAndCategories)
  }

  return (
    <section
      className="flex flex-col items-center justify-center gap-10 p-6
    bg-indigo-700 bg-opacity-90 rounded-lg shadow-md"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center bg-pink-500">
        <code>{title}</code>
      </h2>

      <form
        noValidate
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-5 p-4 
        bg-indigo-500 shadow-md rounded-md"
      >
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
          label="Categories (UUIDs, comma-separated):"
          id="categories"
          name="categories"
          type="text"
          placeholder="Enter valid UUIDs, comma-separated"
          value={product.categories.join(', ')}
          required
          error={errors.categories}
          onChange={(e) => handleCategoriesChange(e.target.value)}
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
    </section>
  )
}

export default ProductForm
