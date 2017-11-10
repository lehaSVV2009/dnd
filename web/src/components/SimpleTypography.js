import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

class SimpleTypography extends Component {

  render() {
    return (
      <Typography component='p'>
        {this.props.text}
      </Typography>
    )
  }
}

SimpleTypography.propTypes = {
  text: PropTypes.string.isRequired,
}

export default SimpleTypography