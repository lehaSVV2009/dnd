import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ButtonBase from 'material-ui/ButtonBase'
import IconPlay from 'material-ui-icons/PlayCircleOutline'
import Image from 'material-ui-image'

const styles = theme => ({
  root: {
    width: '100%',
    '&:hover': {
      background: theme.palette.common.white,
      transition: theme.transitions.create('opacity'),
      opacity: 0.8,
    },
    '&:hover $imageButton': {
      height: 100,
      width: 100,
    },
  },
  imageButton: {
    position: 'absolute',
    color: theme.palette.common.white,
  },
})

class PlayableImage extends Component {

  handleClick = () => this.props.onClick()

  render() {
    const { classes, src } = this.props

    return (
      <ButtonBase className={classes.root} onClick={this.handleClick}>
        <Image style={{ width: '100%', height: '100%' }} src={src}/>
        <IconPlay className={classes.imageButton}/>
      </ButtonBase>
    )
  }
}

PlayableImage.propTypes = {
  classes: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default withStyles(styles)(PlayableImage)