import React, { Component } from 'react'
import {List} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import TextField from 'material-ui/TextField'

import CollectionItem from './CollectionItem'

export default class Collection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      items: this.props.items
    }
  }

  handleSearchTextChange = (event) => {
    const text = event.target.value
    this.setState({
      search: text,
      items: !text ? this.props.items : this.props.items.filter(
        item => this.containsSearchText(item.name, text) || this.containsSearchText(item.value + '', text))
    })
  }

  containsSearchText = (text, searchText) => {
    return text && searchText && text.toLowerCase().includes(searchText.toLowerCase())
  }

  render() {
    const { items } = this.state;

    if (!Array.isArray(items)) {
      return (<div>Список пустой</div>)
    }

    return (
      <div>
        <Subheader>{this.props.name}</Subheader>
        <TextField
          hintText='Поиск'
          value={this.state.search}
          onChange={this.handleSearchTextChange}
        />
        <List className='left'>
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
      </div>
    )
  }
}