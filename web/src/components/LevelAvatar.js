import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import purple from 'material-ui/colors/purple'

const styles = {
  avatar: {
    width: 60,
    height: 60,
    color: '#fff',
    backgroundColor: purple[500]
  }
}

class LevelAvatar extends Component {
  render() {
    const { classes, level } = this.props
    return (
      <Avatar className={classes.avatar}>{level}</Avatar>
    )
  }
}

LevelAvatar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LevelAvatar)