import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Trans } from 'react-i18next'
import { withRouter } from 'react-router-dom'

import HeroesPageLayout from './HeroesPageLayout'
import { deleteHeroRequest, loadHeroesRequest } from '../ducks/hero'
import { selectHeroes, selectHeroesLoading } from '../selectors/Hero'

class HeroesPage extends Component {

  componentDidMount = () => {
    this.props.loadHeroes()
  }

  handlePlay = (hero) => {
    // TODO should I add react-redux-router
    this.props.history.push(`/heroes/${hero.id}`)
  }

  handleDelete = (hero) => {
    this.props.deleteHero(hero)
  }

  render() {
    const { heroes, heroesLoading } = this.props

    // Show loading bar if HTTP request is not completed
    if (heroesLoading) {
      return (<Trans>Загрузка</Trans>)
    }

    return (
      <HeroesPageLayout
        heroes={heroes}
        onPlay={this.handlePlay}
        onDelete={this.handleDelete}
      />
    )
  }
}

const mapStateToProps = () => createStructuredSelector({
  heroes: selectHeroes(),
  heroesLoading: selectHeroesLoading(),
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ 
  loadHeroes: loadHeroesRequest,
  deleteHero: deleteHeroRequest,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeroesPage))