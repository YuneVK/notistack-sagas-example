import { createStore, applyMiddleware, compose } from 'redux'
import createRootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(createRootReducer(), enhancer)

sagaMiddleware.run(rootSaga)

export default store
