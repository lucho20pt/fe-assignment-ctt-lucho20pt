import React, { useEffect, useState } from 'react'
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
import ProductNavigation from './ProductNavigation'

const Product: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, ProductAction> =
    useDispatch()
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  )

  const [view, setView] = useState<'list' | 'form'>('list')

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const handleFormSubmit = (product: ProductType) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product }) // Dispatch ADD_PRODUCT action
    setView('list') // Switch back to the product list after adding a product
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
      <ProductNavigation view={view} setView={setView} />
      {view === 'list' ? (
        products && products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <p>No products available.</p>
        )
      ) : (
        <ProductForm onSubmit={handleFormSubmit} />
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
