import * as actionTypes from './action-types'

export const enqueueSnackbar = snackbar => ({
  type: actionTypes.ENQUEUE,
  payload: snackbar,
})

export const closeSnackbar = id => ({
  type: actionTypes.CLOSE,
  id,
})

export const removeSnackbar = id => ({
  type: actionTypes.REMOVE,
  id,
})

export const updateSnackbars = snackbars => ({
  type: actionTypes.SET_ALL,
  payload: snackbars,
})

export const updateSnackbarById = (id, snackbar) => ({
  type: actionTypes.UPDATE,
  payload: {
    id,
    data: snackbar,
  },
})

export const addSnackbar = (id, snackbar) => ({
  type: actionTypes.ADD,
  payload: {
    id,
    data: { ...snackbar, id },
  },
})
