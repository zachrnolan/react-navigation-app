import { createStore, compose } from 'redux'
import reducer from './reducer'

const enhancer = compose(
  global.reduxNativeDevTools ? global.reduxNativeDevTools() : nope => nope,
)

const store = createStore(
  reducer,
  enhancer,
)

if (global.reduxNativeDevTools) {
  global.reduxNativeDevToolsCompose(store)
}

export default store
