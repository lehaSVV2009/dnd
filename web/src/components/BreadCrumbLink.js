import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-scroll'

const styles = {}

class BreadCrumbLink extends Component {
  render() {
    return (
      <Link 
        to={this.props.to}
        offset={-90}
        duration={1000}
        smooth
       >
        {this.props.children}
      </Link>
    )
  }
}

BreadCrumbLink.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BreadCrumbLink)