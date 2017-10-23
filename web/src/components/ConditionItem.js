import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import List, {ListItem, ListItemText} from 'material-ui/List'

import EditableCounter from './EditableCounter'

export default class ConditionItem extends Component {

  handleChange = (value) => this.props.onChange(value)

  render() {
    let { min, max, step, value } = this.props;
    min = min || 0
    max = max || 100
    step = step || 1
    value = value >= min && value <= max ? value: min

    return (
      <List className='left'>
        <ListItem>
          <Avatar>
            {this.props.icon}
          </Avatar>
          <ListItemText primary={this.props.name} secondary={this.props.description} />
          <EditableCounter
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={this.handleChange}
          />
        </ListItem>
      </List>
    )
  }
}
