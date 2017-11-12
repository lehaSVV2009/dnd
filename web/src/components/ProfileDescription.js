import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const styles = {
  media: {
    height: 350,
  },
}

class ProfileDescription extends Component {

  render() {
    const { additionalNotes, classes, description, image } = this.props
    return (
      <Card className='left'>
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
      </Card>
    )
  }
}

ProfileDescription.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProfileDescription)