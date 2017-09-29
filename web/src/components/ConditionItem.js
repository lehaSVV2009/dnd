import React, { Component } from 'react'
import { Col, Row } from 'react-flexbox-grid'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'

import LabeledSlider from './LabeledSlider'

export default class ConditionItem extends Component {

  handleChange = (value) => this.props.onChange(value)

  render() {
    return (
      <Row>
        <Col xs={2}/>
        <Col xs={2}>
          <List>
            <ListItem
              disabled={true}
              leftIcon={this.props.icon}
            />
          </List>
        </Col>
        <Col xs={4}>
          <LabeledSlider
            min={this.props.min || 0}
            max={this.props.max || 100}
            step={this.props.step || 1}
            value={this.props.value || 0}
            onChange={this.handleChange}
          />
        </Col>
        <Col xs={4}>
          <List>
            <ListItem
              disabled={true}
            >
              {this.props.name}
            </ListItem>
          </List>
        </Col>
      </Row>
    )
  }
}
