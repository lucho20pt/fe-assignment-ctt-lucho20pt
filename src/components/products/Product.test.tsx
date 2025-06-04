import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { thunk } from 'redux-thunk'
import Product from './Product'

const mockStore = configureStore([thunk])

describe('Product Component', () => {
  it('renders loading state', () => {
    const store = mockStore({
      products: {
        products: [],
        loading: true,
        error: null,
      },
    })

    const { getByText } = render(
      <Provider store={store}>
        <Product />
      </Provider>
    )

    expect(getByText('Loading products...')).toBeInTheDocument()
  })

  it('renders error state', () => {
    const store = mockStore({
      products: {
        products: [],
        loading: false,
        error: 'Network error',
      },
    })

    render(
      <Provider store={store}>
        <Product />
      </Provider>
    )

    expect(
      screen.getByText((content, element) =>
        content.startsWith('Error loading products: Network error')
      )
    ).toBeInTheDocument()
  })

  it('renders product list', () => {
    const store = mockStore({
      products: {
        products: [
          {
            id: '1',
            stock: 10,
            description: 'Product 1',
            categories: ['Category A', 'Category B'],
            price: 19.99,
          },
        ],
        loading: false,
        error: null,
      },
    })

    const { getByText } = render(
      <Provider store={store}>
        <Product />
      </Provider>
    )

    expect(getByText('Product 1')).toBeInTheDocument()
    expect(getByText('Stock: 10')).toBeInTheDocument()
  })
})
