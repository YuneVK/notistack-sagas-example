import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'

import store from './redux/store'
import SnackbarManager from './containers/SnackbarManager'
import Snackbar from './containers/Snackbar'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      content={(id, message) => <Snackbar id={id} message={message} />}
      autoHideDuration={3000}
      maxSnack={10}
    >
      <SnackbarManager />
      <App />
    </SnackbarProvider>
  </Provider>,
  rootElement,
)
