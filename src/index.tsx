import React from 'react'
import ReactDOM from 'react-dom/client'
import Product from './components/products/Product'

const App = () => (
  <React.StrictMode>
    <header>
      <h1>
        CTT Exercise - Frontend Typescript
      </h1>
    </header>
    <main>
      <Product />
    </main>
    <footer>
      <p>© 2025 CTT Exercise</p>
    </footer>
  </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
