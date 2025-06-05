import React from 'react'

const ThrowError: React.FC = () => {
  throw new Error('This is a test error') // Example error
  return <div>ThrowError Component</div>
}

export default ThrowError
