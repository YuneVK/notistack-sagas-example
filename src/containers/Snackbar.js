import React, { useCallback } from 'react'
import MuiSnackbar from '@material-ui/core/Snackbar'
import { SnackbarContent } from 'notistack'

import useStyles from '../ui/styles'

import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'

import { closeSnackbar } from '../services/snackbar/actions'

const Snackbar = React.forwardRef((props, ref) => {
  const { message, id } = props
  const dispatch = useDispatch()

  const classes = useStyles()

  const handleClose = useCallback(() => {
    dispatch(closeSnackbar(id))
  }, [dispatch, id])

  return (
    <SnackbarContent ref={ref} className={classes.root}>
      <MuiSnackbar
        className={classes.container}
        ContentProps={{ className: classes.content }}
        open
        message={message}
        action={
          <Button color="primary" onClick={handleClose}>
            Undo
          </Button>
        }
      />
    </SnackbarContent>
  )
})

export default Snackbar
