import React, { Component } from 'react'

import * as api from './API'
import MainPage from './containers/MainPage'

export default class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hero: null,
      heroLoading: false,
      error: null
    }
  }

  /**
   * Load when component is created.
   */
  componentDidMount = () => {
    this.setState({ hero: null, heroLoading: true, error: null })
    this.handleHeroResponse(
      api.fetchHero({ id: this.props.id })
    )
  }

  handleConditionChange = (newJson) => {
    this.handleHeroResponse(
      api.patchHero({ id: this.props.id, hero: newJson })      
    )
  }

  handleHeroResponse = (promise) => {
    promise
      .then((response) => {
        this.setState({ hero: response.data, heroLoading: false, error: null })
      })
      .catch((error) => {
        this.setState({ hero: null, heroLoading: false, error: error.toString() })            
      })
  }

  render() {
    const { hero, heroLoading, error } = this.state
    
    // Show loading bar if HTTP request is not completed
    if (heroLoading) {
      return (<div>Loading...</div>)
    }

    // Show error if HTTP request failed
    if (error) {
      return (<div>{error}</div>)
    }

    if (!hero) {
      return (<div>Герой отсутствует</div>)
    }

    return (
      <MainPage 
        hero={hero}
        onConditionChange={this.handleConditionChange}  
      />
    )
  }
}