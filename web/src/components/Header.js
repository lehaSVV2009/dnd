import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconPdf from 'material-ui-icons/PictureAsPdf'
import { Link } from 'react-router-dom' 
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withRouter } from 'react-router-dom'

const styles = {
  image: {
    height: 40
  },
  flex: {
    flex: 1,
  },
}

class Header extends Component {

  handlePdfClick = () => {
    window.open('/PlayBook.pdf', '_blank')
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <AppBar position='fixed' color='white'>
          <Toolbar>
            <Typography type='title' color='inherit' className={classes.flex}>
              <Link to='/'>
                <img className={classes.image} src='/logo.png' alt='logo'/>
              </Link>
            </Typography>
            <IconButton onClick={this.handlePdfClick}>
              <IconPdf/>
            </IconButton>
            {this.props.children}
          </Toolbar>
        </AppBar>
        <br/>
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

export default withRouter(withStyles(styles)(Header))