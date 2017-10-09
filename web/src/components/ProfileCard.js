import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious'
import PlayArrowIcon from 'material-ui-icons/PlayArrow'
import SkipNextIcon from 'material-ui-icons/SkipNext'

const styles = theme => ({
  card: {
    display: 'flex',
  },
  cover: {
    width: 150,
    height: 150,
  },
})

class ProfileCard extends Component {
  render() {
    const { 
      additionalNotes, avatar, classes, 
      description, descriptionTitle, descriptionSubtitle, 
      image, theme, title, subtitle 
    } = this.props
    return (
      <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={image}
        />
        <div>
          <CardContent>
            <Typography type='headline'>
              {title}
            </Typography>
            <Typography type='subheading' color='secondary'>
              {subtitle}
            </Typography>
          </CardContent>
          <IconButton aria-label='Previous'>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label='Play/pause'>
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label='Next'>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </Card>
      <div>
        <CardContent>
          <Typography type='headline'>
            {descriptionTitle}
          </Typography>
          <Typography type='subheading' color='secondary'>
            {descriptionSubtitle}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography type='headline'>
            {additionalNotes}
          </Typography>
          <Typography type='subheading' color='secondary'>
            {description}
          </Typography>
        </CardContent>
        </div>
      </div>
    )
  }
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(ProfileCard)