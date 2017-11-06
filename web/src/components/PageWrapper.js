import React, { Component } from 'react'
import { Col, Row } from 'react-flexbox-grid'

export default class PageWrapper extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <Row center='xs'>
            <Col lg={6} md={8} sm={10} xs={12}>
              {this.props.children}
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}