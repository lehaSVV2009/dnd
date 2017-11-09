import React, {Component} from 'react'
import Grid from 'material-ui/Grid'
import { Trans } from 'react-i18next'

import HeroListItem from './HeroListItem'

/**
 * Read only list of hero items
 */
export default class HeroList extends Component {

  handlePlay = (hero) => this.props.onPlay(hero)
  handleDelete = (hero) => this.props.onDelete(hero)

  render() {
    const { heroes } = this.props

    if (!Array.isArray(heroes) || heroes.length === 0) {
      return (<Trans>Герои отсутствует</Trans>)
    }

    return (
      <Grid container justify='center'>
        {
          heroes.map((hero, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <HeroListItem
                hero={hero}
                onPlay={this.handlePlay}
                onDelete={this.handleDelete}
              />
            </Grid>
          ))
        }
      </Grid>
    )
  }
}