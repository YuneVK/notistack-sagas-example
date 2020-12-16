import * as redukers from 'redukers'
import * as actionTypes from './action-types'

export default {
  snackbars: redukers.entities({
    mergeById: actionTypes.ADD,
    update: actionTypes.SET,
    updateById: actionTypes.UPDATE,
    reset: actionTypes.RESET,
  }),
}
