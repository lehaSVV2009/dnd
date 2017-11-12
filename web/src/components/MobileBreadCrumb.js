import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui-icons/Menu'
import Menu, { MenuItem } from 'material-ui/Menu'

import BreadCrumbLink from './BreadCrumbLink'

const styles = {}

class MobileBreadCrumb extends Component {
  state = {
    anchorEl: null,
    openMenu: false,
  };

  handleMenuClick = event => {
    this.setState({ openMenu: true, anchorEl: event.currentTarget });
  };

  handleOptionClick = () => {
    this.setState({ openMenu: false });
  };

  render() {
    const { links } = this.props

    if (!Array.isArray(links) || links.length < 1) {
      return (<span/>)
    }

    return (
      <span>
        <IconButton onClick={this.handleMenuClick}>
          <IconMenu/>
        </IconButton>
        <Menu
          anchorEl={this.state.anchorEl}
          open={this.state.openMenu}
          onRequestClose={this.handleOptionClick}
        >
          { 
            links.map(link => (
              <BreadCrumbLink
                key={link.to}
                to={link.to}
              >
                <MenuItem onClick={this.handleOptionClick}>{link.name}</MenuItem>
              </BreadCrumbLink>
          ))}
        </Menu>
      </span>
    )
  }
}

MobileBreadCrumb.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MobileBreadCrumb)