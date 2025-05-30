import React from 'react'
import ProductList from './ProductList'
import productData from '../../data/products.json'

interface ProductProps {
  id: string
  stock: number
  description: string
  categories: string[]
  price: number
}

const Product: React.FC = () => {
  const [products, setProducts] = React.useState<ProductProps[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Load data from the JSON file
        setProducts(productData)
      } catch (error) {
        console.error('Error loading products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return <p>Loading products...</p>
  }

  return <ProductList products={products} />
}

export default Product
