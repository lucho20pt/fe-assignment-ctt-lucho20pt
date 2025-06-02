import productReducer from './productReducer'
import { ProductAction } from '../types/product'

const mockProduct = {
  id: '1',
  stock: 10,
  description: 'Product 1',
  categories: ['A'],
  price: 19.99,
}

const anotherProduct = {
  id: '2',
  stock: 5,
  description: 'Product 2',
  categories: ['B'],
  price: 29.99,
}

describe('productReducer', () => {
  const initialState = { products: [], loading: false, error: null }

  it('should return the initial state', () => {
    expect(
      productReducer(undefined, { type: 'UNKNOWN_ACTION' } as any)
    ).toEqual(initialState)
  })

  it('should handle ADD_PRODUCT', () => {
    const action: ProductAction = { type: 'ADD_PRODUCT', payload: mockProduct }
    const newState = productReducer(initialState, action)
    expect(newState).toEqual({
      products: [mockProduct],
      loading: false,
      error: null,
    })
  })

  it('should handle ADD_PRODUCT when state already contains products', () => {
    const initialStateWithProducts = {
      products: [mockProduct],
      loading: false,
      error: null,
    }
    const action: ProductAction = {
      type: 'ADD_PRODUCT',
      payload: anotherProduct,
    }
    const newState = productReducer(initialStateWithProducts, action)
    expect(newState).toEqual({
      products: [mockProduct, anotherProduct],
      loading: false,
      error: null,
    })
  })

  it('should handle UPDATE_PRODUCT', () => {
    const initialStateWithProducts = {
      products: [mockProduct],
      loading: false,
      error: null,
    }
    const updatedProduct = { ...mockProduct, description: 'Updated Product' }
    const action: ProductAction = {
      type: 'UPDATE_PRODUCT',
      payload: updatedProduct,
    }
    const newState = productReducer(initialStateWithProducts, action)
    expect(newState).toEqual({
      products: [updatedProduct],
      loading: false,
      error: null,
    })
  })

  it('should handle UPDATE_PRODUCT when product does not exist', () => {
    const initialStateWithProducts = {
      products: [mockProduct],
      loading: false,
      error: null,
    }
    const updatedProduct = { ...anotherProduct, description: 'Updated Product' }
    const action: ProductAction = {
      type: 'UPDATE_PRODUCT',
      payload: updatedProduct,
    }
    const newState = productReducer(initialStateWithProducts, action)
    expect(newState).toEqual({
      products: [mockProduct],
      loading: false,
      error: null,
    })
  })

  it('should handle DELETE_PRODUCT', () => {
    const initialStateWithProducts = {
      products: [mockProduct],
      loading: false,
      error: null,
    }
    const action: ProductAction = {
      type: 'DELETE_PRODUCT',
      payload: mockProduct.id,
    }
    const newState = productReducer(initialStateWithProducts, action)
    expect(newState).toEqual({
      products: [],
      loading: false,
      error: null,
    })
  })

  it('should handle DELETE_PRODUCT when product does not exist', () => {
    const initialStateWithProducts = {
      products: [mockProduct],
      loading: false,
      error: null,
    }
    const action: ProductAction = {
      type: 'DELETE_PRODUCT',
      payload: anotherProduct.id,
    }
    const newState = productReducer(initialStateWithProducts, action)
    expect(newState).toEqual({
      products: [mockProduct],
      loading: false,
      error: null,
    })
  })
})
