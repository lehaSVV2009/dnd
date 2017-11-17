import React, { Component } from 'react'
import { withStyles } from 'material-ui'
import { LinearProgress } from 'material-ui/Progress'

const styles = {}

class Loading extends Component {
  render() {
    return (<LinearProgress mode='query'/>)
  }
}

export default withStyles(styles)(Loading)