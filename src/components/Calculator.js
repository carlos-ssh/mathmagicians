import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Row className="row d-flex justify-content-center">
          <Col xs={12} className="w-100">
            <Button variant="btn btn-primary">AC</Button>
            <Button>+/-</Button>
            <Button>%</Button>
            <Button>÷</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="w-100">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>x</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="w-100">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="w-100">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="w-100">
            <Button> 0 </Button>
            <Button>.</Button>
            <Button>=</Button>
          </Col>
        </Row>
      </>
    );
  }
}

export default Calculator;
