import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductList from './ProductList'

describe('ProductList', () => {
  it('should render the product list with products', () => {
    const mockProducts = [
      {
        id: '1',
        stock: 10,
        description: 'Product 1',
        categories: ['Category1'],
        price: 100,
      },
      {
        id: '2',
        stock: 5,
        description: 'Product 2',
        categories: ['Category2'],
        price: 50,
      },
    ]

    render(<ProductList products={mockProducts} />)

    expect(screen.getByText('<ProductList />')).toBeInTheDocument()
    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('Product 2')).toBeInTheDocument()
  })

  it('should render a message when no products are available', () => {
    render(<ProductList products={[]} />)

    expect(screen.getByText('No products available.')).toBeInTheDocument()
  })
})
