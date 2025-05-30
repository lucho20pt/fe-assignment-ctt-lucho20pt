import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Product from './Product'

test('Product component renders without crashing', () => {
  const { container } = render(<Product />)
  expect(container).toBeInTheDocument()
})
