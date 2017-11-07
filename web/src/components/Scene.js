import React, {Component} from 'react'
import ReactAudioPlayer from 'react-audio-player'

import SceneButton from './SceneButton'
import TalentsList from './TalentsList'

export default class Scene extends Component {

  handleStartScene = () => this.props.onStartScene()
  handleStopScene = () => this.props.onStopScene()
  handleUseTalent = (talent) => this.props.onUseTalent(talent)
  
  render() {
    const { availableTalents, scene } = this.props
    const isSceneStarted = scene && !scene.finished
    return (
      <div>
        <br/>
        <SceneButton
          started={isSceneStarted}
          onStartScene={this.handleStartScene}
          onStopScene={this.handleStopScene}
        />
        <br/>
        {
          isSceneStarted &&
          <TalentsList
            expanded
            onUse={this.handleUseTalent}
            talents={availableTalents}
          />
        }
        {
          isSceneStarted &&
          <ReactAudioPlayer
            src='/epic.mp3'
            autoPlay
            loop
          />
        }
      </div>
    )
  }
}