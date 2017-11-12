import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

import BreadCrumbLink from './BreadCrumbLink'

const styles = {}

class BreadCrumb extends Component {

  render() {
    const { links } = this.props

    if (!Array.isArray(links) || links.length < 1) {
      return (<span/>)
    }

    return (
      <span>
        { links.map(link => (
          <BreadCrumbLink 
            key={link.to}
            to={link.to}
          >
            <Button>{link.name}</Button>
          </BreadCrumbLink>
        ))}
      </span>
    )
  }
}

BreadCrumb.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BreadCrumb)