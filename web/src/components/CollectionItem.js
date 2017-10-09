import React, { Component } from 'react'

import {ListItem, ListItemText} from 'material-ui/List'

export default class CollectionItem extends Component {

  render() {
    return (
      <ListItem>
        <ListItemText primary={this.props.name} secondary={'' + this.props.value} />
      </ListItem>
    )
  }
}