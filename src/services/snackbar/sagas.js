import { all, put, takeEvery, select } from 'redux-saga/effects'
import * as actionTypes from './action-types'

import { getSnackbars, getSnackbarById } from './selectors'
import { updateSnackbars, updateSnackbarById, addSnackbar } from './actions'

function* enqueueSnackbarSaga(action) {
  const id = new Date().getTime() + Math.random()

  yield put(addSnackbar(id, action.payload))
}

function* closeSnackbarSaga(action) {
  const snackbar = yield select(getSnackbarById(action.id))

  yield put(updateSnackbarById(action.id, { ...snackbar, dismissed: true }))
}

function* removeSnackbarSaga(action) {
  const snackbars = yield select(getSnackbars)

  delete snackbars[action.id]

  yield put(updateSnackbars(snackbars))
}

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.ENQUEUE, enqueueSnackbarSaga),
    takeEvery(actionTypes.CLOSE, closeSnackbarSaga),
    takeEvery(actionTypes.REMOVE, removeSnackbarSaga),
  ])
}
