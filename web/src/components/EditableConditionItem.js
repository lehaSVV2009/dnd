import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Chip from 'material-ui/Chip'
import List, {ListItem, ListItemText} from 'material-ui/List'
import ModeEditIcon from 'material-ui-icons/ModeEdit'

import CounterFormDialog from './CounterFormDialog'

const styles = {}

class EditableConditionItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openDialog: false,
      value: props.value,
    }
  }

  handleEditClick = () => this.setState({ openDialog: true })
  handleCloseDialog = () => this.setState({ openDialog: false })
  handleSave = (counter) => {
    if (counter) {
      const newValue = this.state.value + counter
      this.props.onChange(newValue)
      this.setState({ 
        value: newValue,
        openDialog: false,
      })
    }
  }

  render() {
    const { icon, name, description, min, max } = this.props
    const { value } = this.state

    return (
      <div>
        <CounterFormDialog
          title={this.props.name}
          label={this.props.label}
          open={this.state.openDialog}
          min={min - value}
          max={max - value}
          onSave={this.handleSave}
          onClose={this.handleCloseDialog}
        />
        <List className='left'>
          <ListItem>
            <Avatar>{icon}</Avatar>
            <ListItemText 
              primary={name}
              secondary={description}
            />
            <Button 
              onClick={this.handleEditClick}
            >
              <Chip 
                label={this.state.value}
              />
              <ModeEditIcon/>
            </Button>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(EditableConditionItem)