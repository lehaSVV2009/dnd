import React, { Component } from 'react'
import { Trans } from 'react-i18next'

import * as api from '../API'
import Day from '../components/Day'
import SceneButton from '../components/SceneButton'

export default class DayPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: null,
      dayLoading: false,
      error: null,
      startSceneLoading: false,
      stopSceneLoading: false,
      scene: null,
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
    this.setState({ day: null, dayLoading: true, error: null })
    this.handleDayResponse(
      api.createDay()
    )
  }

  handleDayResponse = (promise) => {
    promise
      .then((response) => {
        this.setState({ day: response.data, dayLoading: false, error: null })
      })
      .catch((error) => {
        this.setState({ day: null, dayLoading: false, error: error.toString() })            
      })
  }

  handleStartScene = () => {
    this.setState({ scene: null, startSceneLoading: true, error: null })
    api.createScene({ dayId: this.state.day.id })
      .then((response) => {
        this.setState({ scene: response.data, startSceneLoading: false, error: null })
      })
      .catch((error) => {
        this.setState({ scene: null, startSceneLoading: false, error: error.toString() })            
      })
  }

  handleStopScene = () => {
    this.setState({ scene: null, stopSceneLoading: true, error: null })
    api.stopScene({ sceneId: this.state.scene.id })
      .then((response) => {
        this.setState({ scene: null, stopSceneLoading: false, error: null })
      })
      .catch((error) => {
        this.setState({ scene: null, stopSceneLoading: false, error: error.toString() })            
      })
  }

  render() {
    const { day, dayLoading, error, scene } = this.state
    
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
        <br/>
        <SceneButton
          started={scene && !scene.finished}
          onStartScene={this.handleStartScene}
          onStopScene={this.handleStopScene}
        />
      </div>
    )
  }
}