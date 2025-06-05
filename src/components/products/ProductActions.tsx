import React from 'react'
import { ProductActionsProps } from '../../types/product'

const ProductActions: React.FC<ProductActionsProps> = ({
  onDelete,
  onEdit,
}) => {
  return (
    <aside
      className="flex flex-row md:flex-col items-start gap-4 p-3 rounded-lg
    bg-black bg-opacity-20 md:self-center"
    >
      <button
        className="p-2 hover:bg-indigo-600 text-xl bg-red-400 rounded-3xl border-2"
        onClick={onDelete}
      >
        ✖
      </button>
      <button
        className="p-2 hover:bg-indigo-600 text-xl bg-green-400 rounded-3xl border-2"
        onClick={onEdit}
      >
        ✏️
      </button>
    </aside>
  )
}

export default ProductActions
