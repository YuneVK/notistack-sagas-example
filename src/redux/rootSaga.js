import { all, call } from 'redux-saga/effects'
import snackbarSagas from '../services/snackbar/sagas'

function* allSagas() {
  try {
    yield all([snackbarSagas()])
  } catch (e) {
    console.error(e)
  }
}

export default function* rootSaga() {
  try {
    yield call(allSagas)
  } catch (e) {
    console.error(e)
  }
}
