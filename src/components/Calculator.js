import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container">
          <Row>
            <Col>
              <h1>Magic Calculator</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button className="display">
                0
              </Button>
            </Col>
          </Row>
          <Row>
            <Col />
          </Row>
          <Row className="number-container">
            <Col xs={12} className="number-container">
              <Button className="button numkb">
                AC
              </Button>
              <Button className="button numkb">
                +/-
              </Button>
              <Button className="button numkb">
                %
              </Button>
              <Button className="button symbols">
                ÷
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="number-container">
              <Button className="button numkb">
                7
              </Button>
              <Button className="button numkb">
                8
              </Button>
              <Button className="button numkb">
                9
              </Button>
              <Button className="button symbols">
                x
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="number-container">
              <Button className="button numkb">
                4
              </Button>
              <Button className="button numkb">
                5
              </Button>
              <Button className="button numkb">
                6
              </Button>
              <Button className="button symbols">
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="number-container">
              <Button className="button numkb">
                1
              </Button>
              <Button className="button numkb">
                2
              </Button>
              <Button className="button numkb">
                3
              </Button>
              <Button className="button symbols">
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="number-container">
              <Button className="button btn-zero numkb">
                0
              </Button>
              <Button className="button numkb">
                .
              </Button>
              <Button className="button symbols">
                =
              </Button>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Calculator;
