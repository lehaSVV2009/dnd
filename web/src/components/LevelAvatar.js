import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'

const styles = {
  avatar: {
    width: 60,
    height: 60,
    color: '#fff',
    background: 'linear-gradient(45deg, #81C784 30%, #AEEA00 90%)',
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