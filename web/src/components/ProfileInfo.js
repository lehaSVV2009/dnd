import React, {Component} from 'react'
import List, {ListItem, ListItemText} from 'material-ui/List'
import Paper from 'material-ui/Paper'

import ExperienceProgress from './ExperienceProgress'
import LevelAvatar from './LevelAvatar'
import * as DndUtils from '../utils/dndUtils'

export default class ProfileInfo extends Component {

  handleChange = (newJson) => this.props.onChange(newJson)  

  render() {
    const { experience, title, subtitle } = this.props
    return (
      <Paper>
        <List className='left'>
          <ListItem>
            <LevelAvatar 
              level={DndUtils.calculateLevel(experience)}
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