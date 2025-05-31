import { legacy_createStore as createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
})

const store = createStore(rootReducer)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
