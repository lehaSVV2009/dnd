import React, {Component} from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import { Trans } from 'react-i18next'

const styles = {
  center: {
    textAlign: 'center',
  },
  stopSceneButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',   
  },
}

class StopSceneButtonArea extends Component {
  handleStopScene = () => this.props.onStopScene()

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.center}>
        <br/>
        <Button
          className={classes.stopSceneButton}
          raised 
          onClick={this.handleStopScene}
        >
          <Trans>Завершить бой</Trans>
        </Button>
        <br/>
        <br/>
      </Paper>
    )
  }
}

export default withStyles(styles)(StopSceneButtonArea)