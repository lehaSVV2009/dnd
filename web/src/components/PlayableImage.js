import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ButtonBase from 'material-ui/ButtonBase'
import IconPlay from 'material-ui-icons/PlayCircleOutline'

const styles = theme => ({
  image: {
    position: 'relative',
    height: 350,
    width: '100%',
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $icon': {
      height: 70,
      width: 70,
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  icon: {
    height: 50,
    width: 50,
  },
})

class PlayableImage extends Component {

  handleClick = () => this.props.onClick()

  render() {
    const { classes, src } = this.props

    return (
      <ButtonBase
        focusRipple
        className={classes.image}
        onClick={this.handleClick}
      >
        <div
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
        <div className={classes.imageBackdrop} />
        <div className={classes.imageButton}>
          <IconPlay className={classes.icon}/>
        </div>
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