import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import Badge from 'material-ui/Badge'

export default class BadgedAvatar extends Component {
  render() {
    return (
      <Badge badgeContent={this.props.badgeContent} color='accent'>
        <Avatar src={this.props.image}/>
      </Badge>
    )
  }
}