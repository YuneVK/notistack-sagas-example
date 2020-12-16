import React, { useCallback, forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { SnackbarContent } from 'notistack'

import { closeSnackbar } from '../services/snackbar/actions'

import UiSnackbar from '../components/snackbar'
import useStyles from '../components/snackbar/styles'

const Snackbar = forwardRef(({ message, id }, ref) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleClose = useCallback(() => {
    dispatch(closeSnackbar(id))
  }, [dispatch, id])

  return (
    <SnackbarContent ref={ref} className={classes.root}>
      <UiSnackbar onClose={handleClose} message={message} />
    </SnackbarContent>
  )
})

export default Snackbar
