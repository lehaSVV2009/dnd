import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import { FadeInDown } from 'animate-css-styled-components'
import { Link } from 'react-router-dom' 
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styles = {
  image: {
    height: 50
  },
  flex: {
    flex: 1,
  },
}

class Header extends Component {
  render() {
    const { classes } = this.props
    return (
      <FadeInDown>
        <AppBar position='fixed' color='white'>
          <Toolbar>
            <Typography type='title' color='inherit' className={classes.flex}>
              <br/>
              <Link to='/'>
                <img className={classes.image} src='/logo.png' alt='logo'/>
              </Link>
            </Typography>
            {this.props.children}
          </Toolbar>
        </AppBar>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </FadeInDown>
    )  
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)