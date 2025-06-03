import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux'
import { thunk } from 'redux-thunk' // Use named export for thunk
import productReducer from './productReducer'

const rootReducer = combineReducers({
  products: productReducer, // Combine reducers
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

const store = createStore(
  rootReducer,
  undefined, // Preloaded state can be undefined
  applyMiddleware(thunk) // Use redux-thunk directly
)

export default store
