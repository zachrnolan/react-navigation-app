import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  global.reduxNativeDevTools ? global.reduxNativeDevTools() : nope => nope,
)

const store = createStore(
  reducer,
  enhancer,
)

sagaMiddleware.run(rootSaga)

if (global.reduxNativeDevTools) {
  global.reduxNativeDevToolsCompose(store)
}

export default store
