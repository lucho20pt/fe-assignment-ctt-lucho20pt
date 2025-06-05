import { Product } from '../types/product'
import { Dispatch } from 'redux'

const API_BASE_URL = 'http://localhost:8081/api' // Updated backend server URL

export const fetchProducts = () => async (dispatch: Dispatch) => {
  dispatch({ type: 'FETCH_PRODUCTS_START' })

  try {
    const response = await fetch(`${API_BASE_URL}/products.json`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: Product[] = await response.json()

    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data })
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to fetch products. Please check your network connection.'
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: errorMessage })
  }
}

export const addProduct = (product: Product) => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: Product = await response.json()
    dispatch({ type: 'ADD_PRODUCT', payload: data })
  } catch (error) {
    if (process.env.NODE_ENV !== 'test') {
      console.error('Failed to add product:', error)
    }
  }
}

export const updateProduct =
  (product: Product) => async (dispatch: Dispatch) => {
    try {
      await fetch(`/api/products/${product.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      })
      dispatch({ type: 'UPDATE_PRODUCT', payload: product })
    } catch (error) {
      if (process.env.NODE_ENV !== 'test') {
        console.error('Failed to update product:', error)
      }
    }
  }

export const deleteProduct = (id: string) => async (dispatch: Dispatch) => {
  try {
    await fetch(`/api/products/${id}`, { method: 'DELETE' })
    dispatch({ type: 'DELETE_PRODUCT', payload: id })
  } catch (error) {
    if (process.env.NODE_ENV !== 'test') {
      console.error('Failed to delete product:', error)
    }
  }
}
