import React, {Component} from 'react'
import List, {ListItem, ListItemText} from 'material-ui/List'
import Paper from 'material-ui/Paper'

import ExperienceProgress from './ExperienceProgress'
import BadgedAvatar from './BadgedAvatar'
import * as DndUtils from '../utils/dndUtils'

export default class ProfileInfo extends Component {

  handleChange = (newJson) => this.props.onChange(newJson)  
  
  render() {
    const { experience, image, title, subtitle } = this.props
    return (
      <Paper>
        <List className='left'>
          <ListItem>
            <BadgedAvatar 
              image={image}
              badgeContent={DndUtils.calculateLevel(experience)}
            />
            <ListItemText 
              primary={title} 
              secondary={subtitle} 
            />
            <ExperienceProgress 
              experience={experience}
              onChange={this.handleChange}
            />
          </ListItem>
        </List>
      </Paper>
    )
  }
}