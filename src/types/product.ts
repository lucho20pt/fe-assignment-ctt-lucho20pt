export interface Product {
  id: string
  stock: number
  description: string
  categories: string[]
  price: number
}
export interface ProductListProps {
  products: Product[]
}

export interface ProductItemProps {
  product: Product
}
