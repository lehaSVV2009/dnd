import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './ducks'
import { watchSaga } from './sagas'

export default () => {
  // Logger middleware, log every state changing
  const loggerMiddleware = createLogger()

  // Middleware for easily manipulate with redux actions and API
  const sagaMiddleware = createSagaMiddleware()

  // Create function to create store with middleware
  const createStoreWithMiddleware = compose(
    applyMiddleware(loggerMiddleware, sagaMiddleware)
  )(createStore)

  // Initial state is {}
  const store = createStoreWithMiddleware(reducer, {})

  // Saga requires functions running after store creating
  sagaMiddleware.run(watchSaga)

  return store
}