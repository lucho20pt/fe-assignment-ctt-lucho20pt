import React from 'react'
import ProductItem from './ProductItem'
import { ProductListProps } from '../../types/product'

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl font-bold text-center">Product List</h2>
      <ul className="flex flex-col gap-10">
        {products &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </ul>
    </section>
  )
}

export default ProductList
