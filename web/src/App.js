import React, { Component } from 'react'
import cyan from 'material-ui/colors/cyan'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import Hero from './Hero'

const theme = createMuiTheme({
  palette: {
    primary: cyan
  },
})

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Hero id={window.location.hash ? window.location.hash.replace('#', '') : 'Alex'}/>
      </MuiThemeProvider>
    )
  }
}