import React, { Component } from 'react'
import Badge from 'material-ui/Badge'

export default class BadgedItem extends Component {

  render() {
    return (
      <Badge
        badgeContent={this.props.value}
        primary={true}
      >
        {this.props.children}
      </Badge>
    )
  }
}