import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Product from './components/products/Product'

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <div
        className="container mx-auto flex flex-col gap-10
      text-white text-lg"
      >
        <Header />
        <main className="flex flex-col items-center justify-center gap-10">
          <Product />
        </main>
        <Footer />
      </div>
    </Provider>
  </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
