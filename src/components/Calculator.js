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
        <div>
          <Row>
            <Col>
              <h1>Magic Calculator</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button
              >
                0
              </Button>
            </Col>
          </Row>
          <Row>
            <Col />
          </Row>
          <Row>
            <Col xs={12}>
              <Button
              >
                AC
              </Button>
              <Button
              >
                +/-
              </Button>
              <Button
              >
                %
              </Button>
              <Button
              >
                ÷
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button
              >
                7
              </Button>
              <Button
              >
                8
              </Button>
              <Button
              >
                9
              </Button>
              <Button
              >
                x
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} >
              <Button
              >
                4
              </Button>
              <Button
              >
                5
              </Button>
              <Button
              >
                6
              </Button>
              <Button
              >
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button
              >
                1
              </Button>
              <Button
              >
                2
              </Button>
              <Button
              >
                3
              </Button>
              <Button
              >
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button
              >
                0
              </Button>
              <Button
              >
                .
              </Button>
              <Button
              >
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
