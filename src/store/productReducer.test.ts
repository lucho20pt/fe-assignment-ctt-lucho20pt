import { Product } from '../types/product'
import productReducer from './productReducer'
import { ProductAction } from '../types/product'

const mockProduct = {
  id: '1',
  stock: 10,
  description: 'Product 1',
  categories: ['A'],
  price: 19.99,
}

describe('productReducer', () => {
  it('should return the initial state', () => {
    const initialState: Product[] = []
    expect(productReducer(undefined, { type: 'UNKNOWN_ACTION' } as any)).toEqual(
      initialState
    )
  })

  it('should handle ADD_PRODUCT', () => {
    const initialState: Product[] = []
    const action: ProductAction = { type: 'ADD_PRODUCT', payload: mockProduct }
    const newState = productReducer(initialState, action)
    expect(newState).toEqual([mockProduct])
  })
})
