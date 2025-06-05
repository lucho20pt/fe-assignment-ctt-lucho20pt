import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import ProductItem from './ProductItem'
import { Product } from '../../types/product'

const mockProduct: Product = {
  id: '1',
  description: 'Product 1',
  price: 19.99,
  stock: 10,
  categories: ['A'],
}

// Mock reducer
const mockReducer = (state = { products: [] }, action: any) => state

// Create mock store
const mockStore = createStore(mockReducer)

test('renders ProductItem with mock data', () => {
  render(
    <Provider store={mockStore}>
      <ProductItem product={mockProduct} />
    </Provider>
  )
  expect(screen.getByText('Product 1')).toBeInTheDocument()
  expect(
    screen.getByText((content, element) => {
      return element?.textContent === 'Product 1'
    })
  ).toBeInTheDocument() // Custom matcher to match full text content
})
