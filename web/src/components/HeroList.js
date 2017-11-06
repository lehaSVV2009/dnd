import React, {Component} from 'react'
import { Trans } from 'react-i18next'

import HeroListItem from './HeroListItem'

/**
 * Read only list of hero items
 */
export default class HeroList extends Component {
  render() {
    const heroes = this.props.heroes

    if (!Array.isArray(heroes)) {
      return (<Trans>Герои отсутствует</Trans>)
    }

    return (
      <div>
        { 
          heroes.map((hero, index) => (
            <HeroListItem
              key={index}
              hero={hero}
            />
          ))
        }
      </div>
    )
  }
}