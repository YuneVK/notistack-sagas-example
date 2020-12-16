import React from 'react'
import { useDispatch } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import SnackbarManager from './containers/SnackbarManager'

import { showSnackbar } from './services/snackbar/actions'

export default function App() {
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(showSnackbar({ message: 'Message' }))
  }

  return (
    <>
      <SnackbarManager />

      <Typography variant="h3" gutterBottom>
        Notistack sagas example
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add snackbar
      </Button>
    </>
  )
}
