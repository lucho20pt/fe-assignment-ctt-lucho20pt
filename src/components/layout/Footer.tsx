import React from 'react'

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center justify-center p-8
    text-indigo-500"
    >
      <p>© {new Date().getFullYear()} CTT Exercise</p>
    </footer>
  )
}

export default Footer
