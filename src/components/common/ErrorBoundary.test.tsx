import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorBoundary from './ErrorBoundary'
import ThrowError from './ThrowError'

describe('ErrorBoundary Component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {}) // Suppress console.error logs
  })

  afterEach(() => {
    jest.restoreAllMocks() // Restore original console.error behavior
  })

  it('should have NODE_ENV set to "test"', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })

  it('renders fallback UI on error', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    )

    expect(getByText('Something went wrong.')).toBeInTheDocument()
  })

  it('renders children when no error occurs', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    )

    expect(getByText('Test content')).toBeInTheDocument()
  })
})
