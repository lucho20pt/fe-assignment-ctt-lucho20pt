import { Product, ProductAction } from '../types/product'

const initialState = {
  products: [] as Product[],
  loading: false,
  error: null as string | null,
}

const productReducer = (
  state = initialState,
  action: ProductAction
): typeof initialState => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_PRODUCTS_SUCCESS':
      return { ...state, loading: false, products: action.payload }
    case 'FETCH_PRODUCTS_FAILURE':
      return { ...state, loading: false, error: action.payload }
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      }
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      }
    default:
      return state
  }
}

export default productReducer
