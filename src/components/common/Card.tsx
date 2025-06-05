import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center gap-10 p-6
      bg-gray-700 rounded-lg shadow-md ${className || ''}`}
    >
      {children}
    </section>
  )
}

export default Card
