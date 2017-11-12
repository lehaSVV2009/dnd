import React, {Component} from 'react'
import { withStyles } from 'material-ui/styles'

import StartSceneButtonArea from './StartSceneButtonArea'
import StopSceneButtonArea from './StopSceneButtonArea'

const styles = {}

class SceneButtonArea extends Component {
  handleStartScene = () => this.props.onStartScene()
  handleStopScene = () => this.props.onStopScene()

  render() {
    const { started } = this.props

    if (started) {
      return (
        <StopSceneButtonArea onStopScene={this.handleStopScene}/>
      )
    }

    // if battle is not started
    return (
      <StartSceneButtonArea onStartScene={this.handleStartScene}/>
    )
  }
}

export default withStyles(styles)(SceneButtonArea)