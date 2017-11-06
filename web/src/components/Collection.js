import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import Subheader from 'material-ui/List/ListSubheader'
import TextField from 'material-ui/TextField'
import { Trans } from 'react-i18next'

const styles = theme => ({
  searchInput: {
    margin: 25,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
})

class Collection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      items: props.items,
    }
  }

  handleSearchTextChange = (event) => {
    const searchText = event.target.value
    this.setState({
      search: searchText,
      items: !searchText ? this.props.items : this.props.items.filter(
        item => this.containsSearchText(item.name, searchText) || this.containsSearchText(item.value + '', searchText))
    })
  }

  containsSearchText = (text, searchText) => 
    text
    && typeof text === 'string'
    && searchText 
    && text.toLowerCase().includes(searchText.toLowerCase())

  render() {
    const { classes } = this.props
    const { items } = this.state

    if (!Array.isArray(items)) {
      return (<Trans>Список пустой</Trans>)
    }

    return (
      <div>
        <Subheader>{this.props.name}</Subheader>
        <TextField
          className={classnames(classes.searchInput, classes.center)}
          label={<Trans>Поиск</Trans>}
          value={this.state.search}
          onChange={this.handleSearchTextChange}
        />
        <div className={classes.center}>
          {
            items.map((item, index) => (
              <Chip
                key={index}
                className={classes.chip}
                avatar={<Avatar>{'' + item.value}</Avatar>}
                label={item.name}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

Collection.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Collection)