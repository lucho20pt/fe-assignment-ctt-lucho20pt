import React from 'react'
import ProductItem from './ProductItem'
import { ProductListProps } from '../../types/product'
import Card from '../common/Card' // Import Card component

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const title = '<ProductList />'

  return (
    <Card>
      <h2 className="text-3xl font-bold text-center bg-pink-500">
        <code>{title}</code>
      </h2>
      <ul className="flex flex-col gap-10">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </ul>
    </Card>
  )
}

export default ProductList
