import { all } from 'redux-saga/effects'

import { detailSaga } from '../screens/detail/DetailSaga'

export default function *rootSaga() {
  yield all([
    ...detailSaga,
  ])
}
