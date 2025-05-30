import React from 'react'
import ProductItem from './ProductItem'

interface Product {
  id: string
  stock: number
  description: string
  categories: string[]
  price: number
}

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </section>
  )
}

export default ProductList
