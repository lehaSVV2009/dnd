import React, { Component } from 'react'
import { Trans } from 'react-i18next'

import * as api from '../API'
import Day from '../components/Day'
import Scene from '../components/Scene'

export default class DayPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hero: props.hero,
      day: null,
      dayLoading: false,
      error: null,
      startSceneLoading: false,
      stopSceneLoading: false,
      scene: null,
      availableTalentsLoading: false,
      availableTalents: []
    }
  }

  /**
   * Load when component is created.
   */
  componentDidMount = () => {
    this.setState({ day: null, dayLoading: true, error: null })
    this.handleDayResponse(
      api.fetchLastDay()
    )
  }

  handleNewDay = () => {
    this.setState({ day: null, dayLoading: true, error: null, scene: null, availableTalents: [] })
    this.handleStopScene()
    this.handleDayResponse(
      api.createDay()
    )
  }

  handleDayResponse = (promise) => {
    promise
      .then((response) => {
        this.setState({ day: response.data, dayLoading: false, error: null })
        this.loadLastDayScene()
      })
      .catch((error) => {
        this.setState({ day: null, dayLoading: false, error: error.toString() })            
      })
  }

  handleStartScene = () => {
    this.setState({ scene: null, startSceneLoading: true, error: null })
    api.startScene({ dayId: this.state.day.id })
      .then((response) => {
        this.setState({ scene: response.data, startSceneLoading: false, error: null })
        this.reloadAvailableTalents()
      })
      .catch((error) => {
        this.setState({ scene: null, startSceneLoading: false, error: error.toString() })            
      })
  }

  handleStopScene = () => {
    if (!this.state.scene) {
      return
    }
    this.setState({ scene: null, stopSceneLoading: true, error: null })
    api.stopScene({ sceneId: this.state.scene.id })
      .then((response) => {
        this.setState({ scene: null, stopSceneLoading: false, error: null })
      })
      .catch((error) => {
        this.setState({ scene: null, stopSceneLoading: false, error: error.toString() })            
      })
  }

  handleUseTalent = (talent) => {
    api.makeMove({
      sceneId: this.state.scene.id, 
      turn: {
        action: talent, 
        owner: this.state.hero 
      }
    }).then((response) => {
      this.reloadAvailableTalents()
    }).catch((error) => {
      this.setState({ error: error.toString() })            
    })
  }

  loadLastDayScene = () => {
    this.setState({ scene: null })
    api.fetchLastScene({ dayId: this.state.day.id })
      .then((response) => {
        const scene = response.data
        if (scene && !scene.finished) {
          this.setState({ scene: scene })
          this.reloadAvailableTalents()
        }
      })
      .catch((error) => {
        this.setState({ scene: null, error: error.toString() })            
      })
  }

  reloadAvailableTalents = () => {
    this.setState({ availableTalents: [], availableTalentsLoading: true, error: null })
    api.fetchAvailableTalents({ sceneId: this.state.scene.id, heroId: this.state.hero.id })
      .then((response) => {
        this.setState({ availableTalents: response.data, availableTalentsLoading: false, error: null })
      })
      .catch((error) => {
        this.setState({ scene: null, startSceneLoading: false, error: error.toString() })            
      })
  }

  render() {
    const { availableTalents, day, dayLoading, error, scene } = this.state
    
    // Show loading bar if HTTP request is not completed
    if (dayLoading) {
      return (<Trans>Загрузка</Trans>)
    }

    // Show error if HTTP request failed
    if (error) {
      return (<div>{error}</div>)
    }

    if (!day) {
      return (<Trans>День отсутствует</Trans>)
    }

    return (
      <div>
        <Day
          day={day}
          onNewDay={this.handleNewDay}
        />
        <Scene
          availableTalents={availableTalents}
          scene={scene}
          onStartScene={this.handleStartScene}
          onStopScene={this.handleStopScene}
          onUseTalent={this.handleUseTalent}
        />
      </div>
    )
  }
}