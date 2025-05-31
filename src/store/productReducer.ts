import { Product } from '../types/product'

const initialState: Product[] = []

type ProductAction =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: Product }

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
    case 'DELETE_PRODUCT':
      return state.filter((product) => product.id !== action.payload.id)
    default:
      return state
  }
}

export default productReducer
