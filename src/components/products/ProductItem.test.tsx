import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductItem from './ProductItem'

const mockProduct = {
  id: '1',
  stock: 10,
  description: 'Product 1',
  categories: ['A'],
  price: 19.99,
}

test('renders ProductItem with mock data', () => {
  render(<ProductItem product={mockProduct} />)
  expect(screen.getByText('Product 1')).toBeInTheDocument()
  expect(screen.getByText('Price: $19.99')).toBeInTheDocument()
})
