import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import ProductList from './ProductList'
import {
  Product as ProductType,
  RootState,
  ProductAction,
} from '../../types/product'
import { fetchProducts } from '../../store/productActions'
import ErrorBoundary from '../common/ErrorBoundary'
import ProductForm from './ProductForm'

const Product: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, ProductAction> =
    useDispatch()
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const handleFormSubmit = (product: ProductType) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product }) // Dispatch ADD_PRODUCT action
  }

  if (loading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return (
      <p className="text-red-500">
        Error loading products: {error}. Please check your backend server, API
        URL, or network connection.
      </p>
    )
  }

  return (
    <>
      <ProductForm onSubmit={handleFormSubmit} />
      {products && products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No products available.</p>
      )}
    </>
  )
}

const ProductWithErrorBoundary: React.FC = () => (
  <ErrorBoundary>
    <Product />
  </ErrorBoundary>
)

export default ProductWithErrorBoundary
