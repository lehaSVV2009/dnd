import React, { Component } from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

export default class ProfileCard extends Component {

  render() {
    return (
      <Card expanded={true}>
        <CardHeader
          style={{ textAlign: 'left' }}
          title={this.props.title}
          subtitle={this.props.subtitle}
          {... this.props.avatar && { avatar : this.props.avatar }}
        />
        {
          this.props.image &&
          <CardMedia
            overlay={
              <CardTitle 
                title={this.props.title} 
                subtitle={this.props.subtitle} 
              />
            }
          >
            <img src={this.props.image} alt='' />
          </CardMedia>
        }
        {
          this.props.descriptionTitle &&
          <CardTitle
            title={this.props.descriptionTitle} 
            subtitle={this.props.descriptionSubtitle} 
          />
        }
        {
          this.props.description &&
          <CardText className='left'>
            {this.props.description}
            <br/>
            <br/>
            {this.props.additionalNotes}
          </CardText>
        }
      </Card>
    )
  }
}