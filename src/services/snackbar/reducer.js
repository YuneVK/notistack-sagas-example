import * as redukers from 'redukers'
import * as actionTypes from './action-types'

export default {
  snackbars: redukers.entities({
    update: actionTypes.SET_ALL,
    mergeById: actionTypes.ADD,
    updateById: actionTypes.UPDATE,
  }),
}
