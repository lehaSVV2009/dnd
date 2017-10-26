import React, { Component } from 'react'
import { Trans } from 'react-i18next'

import * as api from '../API'
import Day from '../components/Day'

export default class DayPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: null,
      dayLoading: false,
      error: null
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
        debugger
        this.setState({ day: null, dayLoading: false, error: error.toString() })            
      })
  }

  render() {
    const { day, dayLoading, error } = this.state
    
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
      <Day
        day={day}
        onNewDay={this.handleNewDay}
      />
    )
  }
}