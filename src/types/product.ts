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

export type ProductAction =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: string }
