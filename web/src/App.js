import React, { Component } from 'react'
import deepOrange from 'material-ui/colors/deepOrange'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import red from 'material-ui/colors/red'

import Hero from './Hero'

const theme = createMuiTheme({
  palette: {
    primary: deepOrange
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