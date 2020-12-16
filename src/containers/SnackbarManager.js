import { useEffect } from 'react'
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
    displayed = [...displayed.filter(currId => id !== currId)]
  }

  useEffect(() => {
    notifications.forEach(
      ({ id, message, options = {}, dismissed = false }) => {
        if (dismissed) {
          closeSnackbar(id)
          return
        }

        if (displayed.includes(id)) return

        enqueueSnackbar(message, {
          key: id,
          ...options,
          onClose: (event, reason, id) => {
            if (options.onClose) {
              options.onClose(event, reason, id)
            }
          },
          onExited: (_, id) => {
            dispatch(removeSnackbar(id))
            removeDisplayed(id)
          },
        })

        storeDisplayed(id)
      },
    )
  }, [notifications, closeSnackbar, enqueueSnackbar, dispatch])

  return null
}

export default SnackbarManager
