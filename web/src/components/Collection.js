import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import Subheader from 'material-ui/List/ListSubheader'
import { Trans } from 'react-i18next'

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
})

class Collection extends Component {

  render() {
    const { classes, items } = this.props;

    if (!Array.isArray(items)) {
      return (<Trans>Список пустой</Trans>)
    }

    return (
      <div>
        <Subheader>{this.props.name}</Subheader>
        <div className={classes.row}>
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
};

export default withStyles(styles)(Collection)