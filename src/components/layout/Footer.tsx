import React from 'react'

const Footer = () => {
  return (
    <footer
      className="flex items-center justify-between p-8
      border-t border-gray-300 text-gray-700"
    >
      <img
        src="https://www.ctt.pt/application/themes/images/logo-ctt.svg"
        alt="CTT"
        className="h-10"
      />
      <ul className="text-center flex-grow font-semibold">
        <li>
          <p>© {new Date().getFullYear()} CTT Exercise</p>
        </li>
        <li>
          <p>All rights reserved by lucho20pt</p>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
