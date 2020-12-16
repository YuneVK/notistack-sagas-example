import * as actionTypes from './action-types'

export const showSnackbar = snackbar => ({
  type: actionTypes.ENQUEUE,
  payload: snackbar,
})

export const closeSnackbar = key => ({
  type: actionTypes.CLOSE,
  key,
})

export const removeSnackbar = key => ({
  type: actionTypes.REMOVE,
  key,
})

export const updateSnackbars = snackbars => ({
  type: actionTypes.SET,
  payload: snackbars,
})

export const updateSnackbarById = (id, snackbar) => ({
  type: actionTypes.UPDATE,
  payload: {
    id: id,
    data: snackbar,
  },
})

export const addSnackbar = (id, snackbar) => ({
  type: actionTypes.ADD,
  payload: {
    id: id,
    data: { ...snackbar, key: id },
  },
})
