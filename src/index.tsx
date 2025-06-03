import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Product from './components/products/Product'
import store from './store'

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <header>
        <h1>CTT Exercise - Frontend Typescript</h1>
      </header>
      <main>
        <Product />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} CTT Exercise</p>
      </footer>
    </Provider>
  </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
