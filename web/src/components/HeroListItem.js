import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import DeleteIcon from 'material-ui-icons/Delete'
import { FlipInY } from 'animate-css-styled-components'

import ActionableTypography from './ActionableTypography'
import PlayableImage from './PlayableImage'
import SimpleTypography from './SimpleTypography'

const styles = {}

class HeroListItem extends Component {

  handlePlayClick = () => this.props.onPlay(this.props.hero)
  handleDeleteClick = () => this.props.onDelete(this.props.hero)

  render() {
    const { hero } = this.props
    const { category, name, race } = hero.profile

    return (
      <FlipInY>
        <Card>
          <CardMedia>
            <PlayableImage
              src={hero.profile.image}
              onClick={this.handlePlayClick}
            />
          </CardMedia>
          <CardContent>
            <ActionableTypography 
              text={name}
              icon={<DeleteIcon/>}
              onClick={this.handleDeleteClick}
            />
            <SimpleTypography
              text={`${category} - ${race}`} 
            />
          </CardContent>
        </Card>
      </FlipInY>
    )
  }
}

HeroListItem.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeroListItem)