import { call, put, takeLatest } from 'redux-saga/effects'

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from './DetailState'

function *getUsers({ payload: {id} }) {
  try {
    const users = yield call(() => fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json => json))
    console.log('users: ', users)
    yield put({type: GET_USERS_SUCCESS, payload: {users, id}})
  } catch (e) {
    console.log('e: ', e)
  }
}

export const detailSaga = [
  takeLatest(GET_USERS_REQUEST, getUsers),
]
