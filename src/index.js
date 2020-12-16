import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'

import store from './redux/store'
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
      content={(key, message) => <Snackbar id={key} message={message} />}
      autoHideDuration={3000}
    >
      <App />
    </SnackbarProvider>
  </Provider>,
  rootElement,
)
