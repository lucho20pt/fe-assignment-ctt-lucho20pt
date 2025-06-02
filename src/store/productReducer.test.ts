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
  it('should return the initial state', () => {
    const initialState = { products: [], loading: false, error: null }
    expect(
      productReducer(undefined, { type: 'UNKNOWN_ACTION' } as any)
    ).toEqual(initialState)
  })

  it('should handle ADD_PRODUCT', () => {
    const initialState = { products: [], loading: false, error: null }
    const action: ProductAction = { type: 'ADD_PRODUCT', payload: mockProduct }
    const newState = productReducer(initialState, action)
    expect(newState).toEqual([mockProduct])
  })

  it('should handle ADD_PRODUCT when state already contains products', () => {
    const initialState = { products: [mockProduct], loading: false, error: null }
    const action: ProductAction = {
      type: 'ADD_PRODUCT',
      payload: anotherProduct,
    }
    const newState = productReducer(initialState, action)
    expect(newState).toEqual([mockProduct, anotherProduct])
  })

  it('should handle UPDATE_PRODUCT', () => {
    const initialState = { products: [mockProduct], loading: false, error: null }
    const updatedProduct = { ...mockProduct, description: 'Updated Product' }
    const action: ProductAction = {
      type: 'UPDATE_PRODUCT',
      payload: updatedProduct,
    }
    const newState = productReducer(initialState, action)
    expect(newState).toEqual([updatedProduct])
  })

  it('should handle UPDATE_PRODUCT when product does not exist', () => {
    const initialState = { products: [mockProduct], loading: false, error: null }
    const updatedProduct = { ...anotherProduct, description: 'Updated Product' }
    const action: ProductAction = {
      type: 'UPDATE_PRODUCT',
      payload: updatedProduct,
    }
    const newState = productReducer(initialState, action)
    expect(newState).toEqual([mockProduct])
  })

  it('should handle DELETE_PRODUCT', () => {
    const initialState = { products: [mockProduct], loading: false, error: null }
    const action: ProductAction = {
      type: 'DELETE_PRODUCT',
      payload: mockProduct.id,
    }
    const newState = productReducer(initialState, action)
    expect(newState).toEqual([]) // Expect the state to be empty after deletion
  })

  it('should handle DELETE_PRODUCT when product does not exist', () => {
    const initialState = { products: [mockProduct], loading: false, error: null }
    const action: ProductAction = {
      type: 'DELETE_PRODUCT',
      payload: anotherProduct.id,
    }
    const newState = productReducer(initialState, action)
    expect(newState).toEqual([mockProduct])
  })
})
