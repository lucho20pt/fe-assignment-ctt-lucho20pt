import React, { Component, ErrorInfo } from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV !== 'test') {
      console.error('ErrorBoundary caught an error:', error, errorInfo) // Suppress during tests
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <p style={{ color: 'red' }}>
          Something went wrong: {this.state.error?.message}
        </p>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
