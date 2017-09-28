import React, { Component } from 'react'
import {List} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

import CollectionItem from './CollectionItem'

export default class Collection extends Component {

  render() {
    const { items } = this.props;

    if (!Array.isArray(items)) {
      return (<div>Список пустой</div>)
    }

    return (
      <List className='left'>
        <Subheader>{this.props.name}</Subheader>
        {
          items.map((item, index) => (
            <CollectionItem 
              key={index} 
              name={item.name} 
              value={item.value}
            />
          ))
        }
      </List>
    )
  }
}