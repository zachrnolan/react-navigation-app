import { combineReducers } from 'redux'
import detailReducer from '../screens/detail/DetailState'

const reducers = {
  detail: detailReducer,
}

export default combineReducers(reducers)
