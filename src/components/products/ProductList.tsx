import React from 'react'
import ProductItem from './ProductItem'
import { ProductListProps } from '../../types/product'

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const title = '<ProductList />'
  return (
    <section
      className="flex flex-col items-center justify-center gap-10 p-8
    bg-indigo-300 rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-bold text-center">{title}</h2>
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
