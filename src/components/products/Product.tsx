import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import ProductList from './ProductList'
import { RootState, ProductAction } from '../../types/product'
import { fetchProducts } from '../../store/productActions'
import ErrorBoundary from '../common/ErrorBoundary'

const Product: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, ProductAction> =
    useDispatch()
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // console.log('Products state:', products) // Debugging log

  if (loading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return <p>Error loading products: {error}</p>
  }

  if (!products || products.length === 0) {
    return <p>No products available.</p>
  }

  return <ProductList products={products} />
}

const ProductWithErrorBoundary: React.FC = () => (
  <ErrorBoundary>
    <Product />
  </ErrorBoundary>
)

export default ProductWithErrorBoundary
