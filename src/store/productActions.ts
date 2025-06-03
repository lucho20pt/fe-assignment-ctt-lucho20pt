import { Product } from '../types/product'

export const fetchProducts = () => async (dispatch: any) => {
  dispatch({ type: 'FETCH_PRODUCTS_START' })

  try {
    const url = 'http://localhost:8081/api/products.json' // Ensure the URL is correct
    // console.log('Fetching products from:', url) // Debugging log

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: Product[] = await response.json()
    // console.log('Fetched Products:', data) // Debugging log

    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data || [] }) // Fallback to empty array
  } catch (error) {
    console.error('Fetch error:', error) // Debugging log
    dispatch({
      type: 'FETCH_PRODUCTS_FAILURE',
      payload: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
