import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Product from './components/products/Product'
import store from './store'

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <div className="container mx-auto flex flex-col gap-10">
        <header
          className="flex flex-col items-center justify-center p-8 
        bg-indigo-700 text-white text-lg rounded-lg shadow-md"
        >
          <h1 className="text-5xl font-bold text-center">
            CTT Exercise - Frontend Typescript
          </h1>
        </header>
        <main
          className="flex flex-col items-center justify-center p-8
        bg-indigo-600 text-white text-lg rounded-lg shadow-md"
        >
          <Product />
        </main>
        <footer>
          <p>© {new Date().getFullYear()} CTT Exercise</p>
        </footer>
      </div>
    </Provider>
  </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
