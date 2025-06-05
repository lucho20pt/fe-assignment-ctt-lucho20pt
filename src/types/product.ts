export interface RootState {
  products: {
    products: Product[]
    loading: boolean
    error: string | null
  }
}

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

export interface ProductFormProps {
  initialProduct?: Product
  onSubmit: (product: Product) => void
}

export interface ProductNavigationProps {
  view: 'list' | 'form'
  setView: (view: 'list' | 'form') => void
}

export type ProductAction =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: string }
  | { type: 'FETCH_PRODUCTS_START' }
  | { type: 'FETCH_PRODUCTS_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_PRODUCTS_FAILURE'; payload: string }
