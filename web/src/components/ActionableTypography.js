import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'

const styles = {
  icon: {
    float: 'right',
  },
}

class ActionableTypography extends Component {

  render() {
    const { classes, icon, onClick, text } = this.props

    return (
      <Typography type='headline' component='h2'>
        {text}
        {
          onClick &&
          <IconButton className={classes.icon} onClick={onClick}>
            {icon}
          </IconButton>
        }
      </Typography>
    )
  }
}

ActionableTypography.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onClick: PropTypes.func
}

export default withStyles(styles)(ActionableTypography)