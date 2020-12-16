import React from 'react'
import MuiSnackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'

import useStyles from './styles'

const Snackbar = ({ message, onClose }) => {
  const classes = useStyles()

  return (
    <MuiSnackbar
      className={classes.container}
      ContentProps={{ className: classes.content }}
      open
      message={message}
      action={
        <Button color="primary" onClick={onClose}>
          Undo
        </Button>
      }
    />
  )
}

export default Snackbar
