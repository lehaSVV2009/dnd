import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import { Link } from 'react-router-dom' 
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styles = {
  image: {
    height: 50
  }
}

class Header extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <AppBar position='fixed' color='white'>
          <Toolbar>
            <Typography type='title' color='inherit'>
              <br/>
              <Link to='/'>
                <img className={classes.image} src='/logo.png' alt='logo'/>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )  
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)