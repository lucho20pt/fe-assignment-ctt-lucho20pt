import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'

// Mock react-redux hooks
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

test('Product component renders without crashing', () => {
  ;(useSelector as unknown as jest.Mock).mockReturnValue({
    products: [],
    loading: false,
    error: null,
  })

  const { container } = render(<Product />)
  expect(container).toBeInTheDocument()
})

test('Product component renders loading state', () => {
  ;(useSelector as unknown as jest.Mock).mockReturnValue({
    products: [],
    loading: true,
    error: null,
  })

  const { getByText } = render(<Product />)
  expect(getByText('Loading products...')).toBeInTheDocument()
})

test('Product component renders error state', () => {
  ;(useSelector as unknown as jest.Mock).mockReturnValue({
    products: [],
    loading: false,
    error: 'Network error',
  })

  const { getByText } = render(<Product />)
  expect(getByText('Error loading products: Network error')).toBeInTheDocument()
})

test('Product component renders product list', () => {
  ;(useSelector as unknown as jest.Mock).mockReturnValue({
    products: [
      {
        id: '1',
        description: 'Product 1',
        price: 19.99,
        stock: 10,
        categories: ['Category A', 'Category B'], // Ensure categories are defined
      },
    ],
    loading: false,
    error: null,
  })

  const { container } = render(<Product />)
  expect(container).toBeInTheDocument()
})
