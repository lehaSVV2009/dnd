import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Card from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/List/ListSubheader'
import { Trans } from 'react-i18next'

import TalentCard from './TalentCard'

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
})

class TalentsList extends Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { classes, onUse, talents } = this.props;

    if (!Array.isArray(talents)) {
      return (<Trans>Таланты отсутствуют</Trans>)
    }

    return (
      <Paper className='left'>
        <Subheader><Trans>Таланты</Trans></Subheader>
        <IconButton
          className={classnames(classes.expand, {
            [classes.expandOpen]: this.state.expanded
          })}
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
        >
          <ExpandMoreIcon />
        </IconButton>
        <Card className='left'>
          <Collapse in={this.state.expanded} transitionDuration='auto' unmountOnExit>
            {
              talents.map((talent, index) => (
                <TalentCard
                  key={index}
                  index={index}
                  talent={talent}
                  onUse={onUse}
                />
              ))
            }
          </Collapse>
        </Card>
      </Paper>
    )
  }
}

TalentsList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(TalentsList)