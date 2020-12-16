import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useSnackbar } from 'notistack'
import { removeSnackbar } from '../services/snackbar/actions'

import { getSnackbarsAsList } from '../services/snackbar/selectors'

let displayed = []

const SnackbarManager = () => {
  const dispatch = useDispatch()

  const notifications = useSelector(getSnackbarsAsList)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const storeDisplayed = id => {
    displayed = [...displayed, id]
  }

  const removeDisplayed = id => {
    displayed = [...displayed.filter(key => id !== key)]
  }

  React.useEffect(() => {
    notifications.forEach(
      ({ key, message, options = {}, dismissed = false }) => {
        if (dismissed) {
          closeSnackbar(key)
          return
        }

        if (displayed.includes(key)) return

        enqueueSnackbar(message, {
          key,
          ...options,
          onClose: (event, reason, myKey) => {
            if (options.onClose) {
              options.onClose(event, reason, myKey)
            }
          },
          onExited: (_, myKey) => {
            dispatch(removeSnackbar(myKey))
            removeDisplayed(myKey)
          },
        })

        storeDisplayed(key)
      },
    )
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch])

  return null
}

export default SnackbarManager
