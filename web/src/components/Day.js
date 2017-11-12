import React, {Component} from 'react'
import Avatar from 'material-ui/Avatar'
import IconBrightness2 from 'material-ui-icons/Brightness2'
import Button from 'material-ui/Button'
import List, {ListItem, ListItemText} from 'material-ui/List'
import Paper from 'material-ui/Paper'
import { translate, Trans } from 'react-i18next'
import { ZoomInUp } from 'animate-css-styled-components'

class Day extends Component {

  handleNewDayClick = () => this.props.onNewDay()

  render() {
    const { day, t } = this.props
    return (
      <ZoomInUp delay='1s'>
        <Paper>
          <List className='left'>
            <ListItem>
              <Avatar>
                <IconBrightness2/>
              </Avatar>
              <ListItemText
                primary={t('День') + ' ' + day.counter}
              />
              <Button raised onClick={this.handleNewDayClick}>
                <Trans>Новый день</Trans>
              </Button>
            </ListItem>
          </List>
        </Paper>
      </ZoomInUp>
    )
  }
}

export default translate()(Day)