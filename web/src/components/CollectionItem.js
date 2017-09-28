import React, { Component } from 'react'

import {ListItem} from 'material-ui/List'

export default class CollectionItem extends Component {

  render() {
    return (
      <ListItem 
        primaryText={this.props.name}
        secondaryText={'' + this.props.value}
      />
    )
  }
}