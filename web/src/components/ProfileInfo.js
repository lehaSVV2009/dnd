import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  card: {
    display: 'flex'
  },
  cover: {
    width: 150
  }
})

class ProfileInfo extends Component {
  render() {
    const { classes, image, title, subtitle, level } = this.props
    return (
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
            <Typography paragraph type='body2'>
              {level}
            </Typography>
          </CardContent>
        </div>
      </Card>
    )
  }
}

ProfileInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(ProfileInfo)