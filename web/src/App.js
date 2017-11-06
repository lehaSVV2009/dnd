import React, { Component } from 'react'
import cyan from 'material-ui/colors/cyan'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { translate } from 'react-i18next'

import * as I18N from './i18n'
import MainPage from './containers/MainPage'

const theme = createMuiTheme({
  palette: {
    primary: cyan
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <MainPage heroId={window.location.hash ? window.location.hash.replace('#', '') : 'Alex'}/>
      </MuiThemeProvider>
    )
  }
}

export default translate(I18N.COMMON_TRANSLATIONS)(App)