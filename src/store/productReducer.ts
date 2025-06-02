import { Product, ProductAction } from '../types/product'

const initialState: Product[] = []

const productReducer = (
  state = initialState,
  action: ProductAction
): Product[] => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.payload]
    case 'UPDATE_PRODUCT':
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      )
    case 'DELETE_PRODUCT': {
      return state.filter((product) => product.id !== action.payload)
    }
    default:
      return state
  }
}

export default productReducer
