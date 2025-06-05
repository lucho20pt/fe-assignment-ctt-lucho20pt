import React from 'react'
import { ProductActionsProps } from '../../types/product'

const ProductActions: React.FC<ProductActionsProps> = ({
  onDelete,
  onEdit,
}) => {
  return (
    <aside className="flex flex-row gap-4 items-start">
      <button
        className="p-2 hover:bg-indigo-600 text-xl bg-red-500 rounded-3xl"
        onClick={onDelete}
      >
        ✖
      </button>
      <button
        className="p-2 hover:bg-indigo-600 text-xl bg-green-500 rounded-3xl"
        onClick={onEdit}
      >
        ✏️
      </button>
    </aside>
  )
}

export default ProductActions
