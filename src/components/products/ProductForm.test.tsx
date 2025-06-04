import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductForm from './ProductForm'

describe('ProductForm', () => {

  it('should call onSubmit with valid data when the form is submitted', () => {
    const mockOnSubmit = jest.fn()
    render(<ProductForm onSubmit={mockOnSubmit} />)

    // Fill out the form
    fireEvent.change(screen.getByLabelText('Description:'), {
      target: { value: 'Test Product' },
    })
    fireEvent.change(screen.getByLabelText('Categories (comma-separated):'), {
      target: { value: 'Category1, Category2' },
    })
    fireEvent.change(screen.getByLabelText('Price:'), {
      target: { value: '10.99' },
    })
    fireEvent.change(screen.getByLabelText('Stock:'), {
      target: { value: '5' },
    })

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /submit/i }))

    // Check that onSubmit was called with the correct data
    expect(mockOnSubmit).toHaveBeenCalledWith({
      id: expect.any(String), // ID is generated dynamically
      description: 'Test Product',
      categories: expect.any(Array), // Categories are transformed into UUIDs
      price: 10.99,
      stock: 5,
    })
    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  })
})
