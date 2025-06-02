import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductList from './ProductList'
import { RootState } from '../../types/product'

const Product: React.FC = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  )

  if (loading) {
    return <p>Loading products...</p>
  }
  
  if (error) {
    return <p>Error loading products: {error}</p>
  }

  return <ProductList products={products} />
}

export default Product
