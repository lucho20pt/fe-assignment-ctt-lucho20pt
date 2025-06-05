import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import ProductList from './ProductList'
import { Product } from '../../types/product'

const mockProducts: Product[] = [
  {
    id: '1',
    description: 'Product 1',
    price: 19.99,
    stock: 10,
    categories: ['A'],
  },
  {
    id: '2',
    description: 'Product 2',
    price: 29.99,
    stock: 5,
    categories: ['B'],
  },
]

// Mock reducer
const mockReducer = (state = { products: [] }, action: any) => state

// Create mock store
const mockStore = createStore(mockReducer)

describe('ProductList Component', () => {
  it('should render the product list with products', () => {
    render(
      <Provider store={mockStore}>
        <ProductList products={mockProducts} />
      </Provider>
    )

    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('Product 2')).toBeInTheDocument()
  })

  it('should render a message when no products are available', () => {
    render(
      <Provider store={mockStore}>
        <ProductList products={[]} />
      </Provider>
    )

    expect(screen.getByText('No products available.')).toBeInTheDocument()
  })
})
