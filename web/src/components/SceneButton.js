import React, {Component} from 'react'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import { translate, Trans } from 'react-i18next'

class SceneButton extends Component {

  handleStartScene = () => this.props.onStartScene()
  handleStopScene = () => this.props.onStopScene()

  render() {
    const { started } = this.props
    return (
      <Paper>
        <br/>
        {
          started
          ?
          <Button raised onClick={this.handleStopScene}>
            <Trans>Завершить бой</Trans>
          </Button>
          :
          <Button raised onClick={this.handleStartScene}>
            <Trans>Начать бой</Trans>
          </Button>
        }
        <br/>
        <br/>
      </Paper>
    )
  }
}

export default translate()(SceneButton)