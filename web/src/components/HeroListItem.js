import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}

class HeroListItem extends Component {
  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image='https://loremflickr.com/320/240/dungeonsanddragons/all'
          title='Hero'
        />
        <CardContent>
        <Typography type='headline' component='h2'>
          Hero
        </Typography>
        <Typography component='p'>
          Hero short description
        </Typography>
        </CardContent>
        <CardActions>
          <Button dense color='primary'>
            Edit
          </Button>
          <Button dense color='primary'>
            Delete
          </Button>
        </CardActions>
      </Card>
    )
  }
}

HeroListItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeroListItem)