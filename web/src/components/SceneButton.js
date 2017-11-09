import React, {Component} from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import { translate, Trans } from 'react-i18next'

const styles = {
  center: {
    textAlign: 'center',
  },
  startSceneButton: {
    background: 'linear-gradient(45deg, #81C784 30%, #AEEA00 90%)',    
  },
  stopSceneButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',   
  },
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
          <Button 
            className={classes.stopSceneButton}
            raised 
            onClick={this.handleStopScene}
          >
            <Trans>Завершить бой</Trans>
          </Button>
          :
          <Button
            className={classes.startSceneButton}
            raised
            onClick={this.handleStartScene}
          >
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