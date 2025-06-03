import { Product } from '../types/product'

export const fetchProducts = () => async (dispatch: any) => {
  dispatch({ type: 'FETCH_PRODUCTS_START' })

  try {
    const url = 'http://localhost:8081/api/products.json' // Ensure the URL is correct

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: Product[] = await response.json()

    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data || [] }) // Fallback to empty array
  } catch (error) {
    if (process.env.NODE_ENV !== 'test') {
      console.error('Fetch error:', error) // Suppress during tests
    }
    dispatch({
      type: 'FETCH_PRODUCTS_FAILURE',
      payload: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
