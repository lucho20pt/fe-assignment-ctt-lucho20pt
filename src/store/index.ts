import { legacy_createStore as createStore, combineReducers } from 'redux'
import productReducer from './productReducer'

const rootReducer = combineReducers({
  products: productReducer,
})

const store = createStore(rootReducer)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
