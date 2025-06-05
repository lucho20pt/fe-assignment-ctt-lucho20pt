import React from 'react'
import { ProductNavigationProps } from '../../types/product'

const ProductNavigation: React.FC<ProductNavigationProps> = ({
  view,
  setView,
}) => {
  return (
    <nav
      className="flex justify-center items-center p-4 px-8 
    bg-gray-700 shadow-md rounded-xl"
    >
      <ul className="flex gap-4 text-xl">
        <li>
          <button
            className={`${
              view === 'list' ? 'text-pink-500 font-bold' : 'text-white'
            }`}
            onClick={() => setView('list')}
          >
            Product List
          </button>
        </li>
        <li>
          <button
            className={`${
              view === 'form' ? 'text-pink-500 font-bold' : 'text-white'
            }`}
            onClick={() => setView('form')}
          >
            Add Product
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default ProductNavigation
