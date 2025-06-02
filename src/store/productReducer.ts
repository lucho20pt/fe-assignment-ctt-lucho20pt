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
    default:
      return state
  }
}

export default productReducer
