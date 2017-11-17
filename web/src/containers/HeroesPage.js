import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import Loading from '../components/Loading'
import HeroesPageLayout from './HeroesPageLayout'
import { deleteHeroRequest, loadHeroesRequest } from '../ducks/hero'
import { selectHeroes, selectHeroDeleteLoading, selectHeroesLoading } from '../selectors/Hero'

class HeroesPage extends Component {

  /**
   * Load all heroes before rendering
   */
  componentDidMount = () => {
    this.props.loadHeroes()
  }

  /**
   * Hero item is clicked
   */
  handlePlay = (hero) => {
    // TODO should I add react-redux-router?
    this.props.history.push(`/heroes/${hero.id}`)
  }

  /**
   * Delete hero item button is clicked
   */
  handleDelete = (hero) => {
    this.props.deleteHero(hero)
  }

  render() {
    const { heroes, heroDeleteLoading, heroesLoading } = this.props

    // Show loading bar if HTTP request is not completed
    if (heroesLoading || heroDeleteLoading) {
      return (<Loading/>)
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
  heroDeleteLoading: selectHeroDeleteLoading(),
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ 
  loadHeroes: loadHeroesRequest,
  deleteHero: deleteHeroRequest,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeroesPage))