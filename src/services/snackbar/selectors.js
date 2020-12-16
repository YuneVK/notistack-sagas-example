import { entities } from 'redukers'

export const getSnackbars = state => state.snackbars

export const getSnackbarsAsList = state => entities.getAsList(state.snackbars)

export const getSnackbarById = id => state =>
  entities.getOne(id, state.snackbars)
