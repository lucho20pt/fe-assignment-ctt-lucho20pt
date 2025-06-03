import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorBoundary from './ErrorBoundary'

describe('ErrorBoundary Component', () => {
  it('renders fallback UI on error', () => {
    const ThrowError = () => {
      throw new Error('Test error')
    }

    const { getByText } = render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    )

    expect(getByText('Something went wrong: Test error')).toBeInTheDocument()
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
