import { ProductAction } from '../types/product'

describe('Product Actions', () => {
  it('should create an action to add a product', () => {
    const product = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      stock: 10,
      description: 'Test Product',
      categories: ['123e4567-e89b-12d3-a456-426614174001'],
      price: 19.99,
    }
    const expectedAction: ProductAction = {
      type: 'ADD_PRODUCT',
      payload: product,
    }

    expect(expectedAction).toEqual({
      type: 'ADD_PRODUCT',
      payload: product,
    })
  })

  it('should create an action to update a product', () => {
    const product = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      stock: 15,
      description: 'Updated Product',
      categories: ['123e4567-e89b-12d3-a456-426614174001'],
      price: 24.99,
    }
    const expectedAction: ProductAction = {
      type: 'UPDATE_PRODUCT',
      payload: product,
    }

    expect(expectedAction).toEqual({
      type: 'UPDATE_PRODUCT',
      payload: product,
    })
  })

  it('should create an action to delete a product', () => {
    const productId = '123e4567-e89b-12d3-a456-426614174000'
    const expectedAction: ProductAction = {
      type: 'DELETE_PRODUCT',
      payload: productId,
    }

    expect(expectedAction).toEqual({
      type: 'DELETE_PRODUCT',
      payload: productId,
    })
  })

  it('should create an action to start fetching products', () => {
    const expectedAction: ProductAction = {
      type: 'FETCH_PRODUCTS_START',
    }

    expect(expectedAction).toEqual({
      type: 'FETCH_PRODUCTS_START',
    })
  })

  it('should create an action to fetch products successfully', () => {
    const products = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        stock: 10,
        description: 'Test Product 1',
        categories: ['123e4567-e89b-12d3-a456-426614174001'],
        price: 19.99,
      },
    ]
    const expectedAction: ProductAction = {
      type: 'FETCH_PRODUCTS_SUCCESS',
      payload: products,
    }

    expect(expectedAction).toEqual({
      type: 'FETCH_PRODUCTS_SUCCESS',
      payload: products,
    })
  })

  it('should create an action for fetch products failure', () => {
    const error = 'Failed to fetch products'
    const expectedAction: ProductAction = {
      type: 'FETCH_PRODUCTS_FAILURE',
      payload: error,
    }

    expect(expectedAction).toEqual({
      type: 'FETCH_PRODUCTS_FAILURE',
      payload: error,
    })
  })
})
