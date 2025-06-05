import React from 'react'
import ProductItem from './ProductItem'
import { ProductListProps } from '../../types/product'

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const title = '<ProductList />'

  return (
    <section
      className="flex flex-col items-center justify-center gap-10 p-6
    bg-indigo-700 bg-opacity-90 rounded-lg shadow-md"
    >
      <h2 className="text-3xl font-bold text-center bg-pink-500"><code>{title}</code></h2>
      <ul className="flex flex-col gap-10">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </ul>
    </section>
  )
}

export default ProductList
