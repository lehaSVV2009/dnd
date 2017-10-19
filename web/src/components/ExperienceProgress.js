import React, {Component} from 'react'
import ButtonBase from 'material-ui/ButtonBase'
import CircularProgressbar from 'react-circular-progressbar'

import * as DndUtils from '../utils/dndUtils'
import './ExperienceProgress.css'

export default class ExperienceProgress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      experience: props.experience,
      percentage: DndUtils.calculatePercentage(props.experience)
    }
  }

  render() {
    const { experience, percentage } = this.state
    return (
      <ButtonBase>
        <CircularProgressbar
          percentage={percentage}
          initialAnimation={true}
          textForPercentage={() => `${experience}`}
        />
      </ButtonBase>
    )
  }
}