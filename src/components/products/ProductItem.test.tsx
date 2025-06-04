import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductItem from './ProductItem'
import { Product } from '../../types/product'

const mockProduct: Product = {
  id: '1',
  description: 'Product 1',
  price: 19.99,
  stock: 10,
  categories: ['A'],
}

test('renders ProductItem with mock data', () => {
  render(<ProductItem product={mockProduct} />)
  expect(screen.getByText('Product 1')).toBeInTheDocument()
  expect(
    screen.getByText((content, element) => {
      return element?.textContent === 'Product 1'
    })
  ).toBeInTheDocument() // Custom matcher to match full text content
})
