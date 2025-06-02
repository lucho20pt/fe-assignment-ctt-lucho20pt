import { Product } from '../types/product'

export const fetchProducts = () => async (dispatch: any) => {
  dispatch({ type: 'FETCH_PRODUCTS_START' })

  try {
    // TODO: Replace this with an actual API call
    const response = await fetch('/path/to/api/products')
    const data: Product[] = await response.json()

    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data })
  } catch (error) {
    dispatch({
      type: 'FETCH_PRODUCTS_FAILURE',
      payload: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
