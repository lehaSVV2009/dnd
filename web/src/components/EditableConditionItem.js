import React, { Component } from 'react'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Chip from 'material-ui/Chip'
import List, {ListItem, ListItemText} from 'material-ui/List'
import ModeEditIcon from 'material-ui-icons/ModeEdit'

export default class EditableConditionItem extends Component {

  handleEditClick = () => this.props.onEditClick()

  render() {
    return (
      <List className='left'>
        <ListItem>
          <Avatar>
            {this.props.icon}
          </Avatar>
          <ListItemText primary={this.props.name} secondary={this.props.description} />
          <Button onClick={this.handleEditClick}>
            <Chip label={this.props.value}/>
            <ModeEditIcon/>
          </Button>
        </ListItem>
      </List>
    )
  }
}
