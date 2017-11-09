import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import { FlipInY } from 'animate-css-styled-components'
import Typography from 'material-ui/Typography'

const styles = {
  media: {
    height: 240,
  },
}

class HeroListItem extends Component {

  handlePlayClick = () => this.props.onPlay(this.props.hero)
  handleDeleteClick = () => this.props.onDelete(this.props.hero)

  render() {
    const { classes, hero } = this.props
    const { category, name, race } = hero.profile
    return (
      <FlipInY>
        <Card>
          <CardMedia
            className={classes.media}
            image={`https://loremflickr.com/320/240/dnd,${Math.random() > 0.5 ? race : category}/all?random=${hero.id}`}
          />
          <CardContent>
          <Typography type='headline' component='h2'>
            {name}
          </Typography>
          <Typography component='p'>
            {category} - {race}
          </Typography>
          </CardContent>
          <CardActions>
            <Button dense color='primary' onClick={this.handlePlayClick}>
              Play
            </Button>
            <Button dense color='primary' onClick={this.handleDeleteClick}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </FlipInY>
    )
  }
}

HeroListItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeroListItem)