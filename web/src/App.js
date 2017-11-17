import React, { Component } from 'react'
import cyan from 'material-ui/colors/cyan'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { Provider } from 'react-redux'
import { translate } from 'react-i18next'

import './i18n'
import * as I18N from './i18n'
import configureStore from './configureStore'
import Routes from './Routes'

const theme = createMuiTheme({
  palette: {
    primary: cyan
  },
  overrides: {
    MuiButton: {
      accent: {
        background: 'linear-gradient(45deg, #81C784 30%, #AEEA00 90%)'
      },
    },
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={configureStore()}>
          <Routes/>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default translate(I18N.COMMON_TRANSLATIONS)(App)