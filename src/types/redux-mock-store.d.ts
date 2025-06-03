declare module 'redux-mock-store' {
  import { Middleware, Store } from 'redux'

  type MockStoreCreator = (middlewares?: Middleware[]) => MockStore

  interface MockStore {
    <TState>(state?: TState): Store<TState>
  }

  const configureStore: MockStoreCreator
  export default configureStore
}
