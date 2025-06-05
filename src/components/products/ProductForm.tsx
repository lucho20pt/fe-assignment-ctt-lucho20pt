import React, { useState } from 'react'
import { Product, ProductFormProps } from '../../types/product'

import { generateUuid } from '../../utils/generateUuid'
import { validateProduct } from '../../utils/validateProduct'

import InputField from '../common/InputField'
import TextareaField from '../common/TextareaField'
import Card from '../common/Card'

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
    setProduct((prev) => ({
      ...prev,
      categories: updatedCategories,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateProduct(product)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const productWithIdAndCategories = {
      ...product,
      id: product.id || generateUuid(),
    }

    onSubmit(productWithIdAndCategories)
  }

  return (
    <Card>
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

        <TextareaField
          label="Categories (UUIDs, comma-separated):"
          id="categories"
          name="categories"
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
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </Card>
  )
}

export default ProductForm
