import React, {Component} from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import { BounceIn } from 'animate-css-styled-components'
import Paper from 'material-ui/Paper'
import { Trans } from 'react-i18next'

const styles = {
  startSceneButton: {
    background: 'linear-gradient(45deg, #81C784 30%, #AEEA00 90%)',    
  },
}

class StartSceneButtonArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)
    this.handleWindowResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  /**
   * Make view shown on full browser window even if it is resized.
   */
  handleWindowResize = () => {
    this.setState({
      height: (window.innerHeight - 200) + 'px'
    })
  }

  handleStartScene = () => this.props.onStartScene()

  render() {
    const { classes } = this.props

    return (
      <Paper style={{
        height: this.state.height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <BounceIn delay='1s' duration='3s' iterationCount={50}>
          <Button
            className={classes.startSceneButton}
            raised
            onClick={this.handleStartScene}
          >
            <Trans>Начать бой</Trans>
          </Button>
        </BounceIn>
      </Paper>
    )
  }
}

export default withStyles(styles)(StartSceneButtonArea)