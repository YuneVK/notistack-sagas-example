import { combineReducers } from 'redux'
import snackbarReducer from '../services/snackbar/reducer'

const createRootReducer = () => combineReducers({ ...snackbarReducer })

export default createRootReducer
