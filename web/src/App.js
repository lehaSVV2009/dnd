import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Hero from './Hero'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Hero/>
      </MuiThemeProvider>
    )
  }
}