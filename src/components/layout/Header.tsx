import React from 'react'

const Header = () => {
  return (
    <header
      className="flex flex-row items-center justify-between p-4 px-10
        bg-white text-lg text-gray-700"
    >
      <h1 className="">
        <img
          src="https://www.ctt.pt/application/themes/images/logo-ctt.svg"
          alt="CTT"
        />
        <span className="hidden">CTT</span>
      </h1>
      <div className="flex flex-row items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded-md"
        />
        <button>🔍</button>
      </div>
    </header>
  )
}

export default Header
