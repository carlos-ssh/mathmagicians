import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Calculator.css';
import RenderButtons from './buttons';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <RenderButtons />
          </Col>
        </Row>
      </>
    );
  }
}

export default Calculator;
