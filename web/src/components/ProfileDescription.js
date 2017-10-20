import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'

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
  media: {
    height: 350,
  }
})

class ProfileDescription extends Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { additionalNotes, classes, description, image } = this.props
    return (
      <div>
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
            <CardMedia
              className={classes.media}
              image={image}
            />
            <CardContent>
              <Typography paragraph>
                {additionalNotes}
              </Typography>
              <Typography paragraph>
                {description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    )
  }
}

ProfileDescription.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(ProfileDescription)