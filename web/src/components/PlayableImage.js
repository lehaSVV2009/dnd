import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ButtonBase from 'material-ui/ButtonBase'
import IconPlay from 'material-ui-icons/PlayCircleOutline'
import Image from 'material-ui-image'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
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
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
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
          <Typography
            component='h3'
            type='subheading'
            color='inherit'
            className={classes.imageTitle}
          >
            Play
            <div className={classes.imageMarked} />
          </Typography>
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