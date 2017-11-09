import React, { Component } from 'react'
import cyan from 'material-ui/colors/cyan'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { translate } from 'react-i18next'

import * as I18N from './i18n'
import Routes from './Routes'

const theme = createMuiTheme({
  palette: {
    primary: cyan
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Routes/>
      </MuiThemeProvider>
    )
  }
}

export default translate(I18N.COMMON_TRANSLATIONS)(App)