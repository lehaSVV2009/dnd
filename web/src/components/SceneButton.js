import React, {Component} from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import { translate, Trans } from 'react-i18next'

const styles = {
  center: {
    textAlign: 'center',
  }
}

class SceneButton extends Component {

  handleStartScene = () => this.props.onStartScene()
  handleStopScene = () => this.props.onStopScene()

  render() {
    const { classes, started } = this.props
    return (
      <Paper className={classes.center}>
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

export default translate()(withStyles(styles)(SceneButton))