import React from 'react'

const Header = () => {
  const title = '<CTT />'
  return (
    <header
      className="flex flex-col items-center justify-center p-8 
        border-b-2 border-indigo-500 text-lg"
    >
      <h1 className="text-5xl text-indigo-500 font-bold text-center">
        {title}
      </h1>
    </header>
  )
}

export default Header
