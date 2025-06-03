import React from 'react'
import ProductItem from './ProductItem'
import { ProductListProps } from '../../types/product'

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section>
      <h2>Product List</h2>
      <ul>
        {products &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </ul>
    </section>
  )
}

export default ProductList
