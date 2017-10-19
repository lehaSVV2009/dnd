import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import {ListItem} from 'material-ui/List'

export default class CollectionItem extends Component {

  render() {
    return (
      <ListItem>
        <Chip
          avatar={<Avatar>{'' + this.props.value}</Avatar>}
          label={this.props.name}
        />
      </ListItem>
    )
  }
}