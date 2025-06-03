import { combineReducers } from 'redux'
import productReducer from './productReducer' // Adjust path to your product reducer

const rootReducer = combineReducers({
  products: productReducer, // Combine reducers
})

export default rootReducer
