import { Product } from '../types/product'
import { isValidUuid } from './validateUuid'

export const validateProduct = (
  product: Product
): { [key: string]: string } => {
  const errors: { [key: string]: string } = {}

  if (!product.description.trim()) {
    errors.description = 'Description is required.'
  }

  if (product.categories.length === 0) {
    errors.categories = 'At least one category is required.'
  } else {
    const invalidCategories = product.categories.filter(
      (category) => !isValidUuid(category)
    )
    if (invalidCategories.length > 0) {
      errors.categories =
        'All categories must be valid UUIDs (e.g., 123e4567-e89b-12d3-a456-426614174000).'
    }
  }

  if (product.price <= 0) {
    errors.price = 'Price must be greater than 0.'
  }

  if (product.stock < 0) {
    errors.stock = 'Stock cannot be negative.'
  }

  return errors
}
