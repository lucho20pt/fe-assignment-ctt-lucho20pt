import React from 'react'

interface ProductNavigationProps {
  view: 'list' | 'form'
  setView: (view: 'list' | 'form') => void
}

const ProductNavigation: React.FC<ProductNavigationProps> = ({
  view,
  setView,
}) => {
  return (
    <nav className="flex justify-center items-center p-4 bg-indigo-900 shadow-md">
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
