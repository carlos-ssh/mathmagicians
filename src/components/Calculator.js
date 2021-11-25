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
        <div className="container mx-auto pt-5">
          <Row className="row d-flex justify-content-center py-5">
            <Col>
              <h1>Magic Calculator</h1>
            </Col>
          </Row>
          <Row className="row d-flex justify-content-center">
            <Col xs={12} className="w-100">
              <Button
                variant="btn btn-secondary col-8 border-dark text-end pe-3 py-3"
              >
                0
              </Button>
            </Col>
          </Row>
          <Row className="row d-flex justify-content-center">
            <Col className="w-100 bg-dark" />
          </Row>
          <Row className="row d-flex justify-content-center">
            <Col xs={12} className="w-100">
              <Button
                variant="btn btn-secondary col-2 border-dark"
              >
                AC
              </Button>
              <Button
                variant="btn btn-secondary col-2 border-dark"
              >
                +/-
              </Button>
              <Button
                variant="btn btn-secondary col-2 border-dark"
              >
                %
              </Button>
              <Button
                variant="btn btn-secondary col-2 border-dark"
              >
                ÷
              </Button>
            </Col>
          </Row>
          <Row className="row d-flex justify-content-center">
            <Col xs={12} className="w-100">
              <Button
                variant="btn btn-success col-2 border-dark"
              >
                7
              </Button>
              <Button
                variant="btn btn-success col-2 border-dark"
              >
                8
              </Button>
              <Button
                variant="btn btn-success col-2 border-dark"
              >
                9
              </Button>
              <Button
                variant="btn btn-secondary col-2 border-dark"
              >
                x
              </Button>
            </Col>
          </Row>
          <Row className="row d-flex justify-content-center">
            <Col xs={12} className="w-100">
              <Button
                variant="btn btn-success col-2 border-dark"
              >
                4
              </Button>
              <Button
                variant="btn btn-success col-2 border-dark"
              >
                5
              </Button>
              <Button
                variant="btn btn-success col-2 border-dark"
              >
                6
              </Button>
              <Button
                variant="btn btn-secondary col-2 border-dark"
              >
                -
              </Button>
            </Col>
          </Row>
          <Row className="row d-flex justify-content-center">
            <Col xs={12} className="w-100">
              <Button
                variant="btn btn-success col-2 border-dark"
              >
                1
              </Button>
              <Button
                variant="btn btn-success col-2 border-dark"
              >
                2
              </Button>
              <Button
                variant="btn btn-success col-2 border-dark"
              >
                3
              </Button>
              <Button
                variant="btn btn-secondary col-2 border-dark"
              >
                +
              </Button>
            </Col>
          </Row>
          <Row className="row d-flex justify-content-center">
            <Col xs={12} className="w-100">
              <Button
                variant="btn btn-success col-4 border-dark"
              >
                0
              </Button>
              <Button
                variant="btn btn-success col-2 border-dark"
              >
                .
              </Button>
              <Button
                variant="btn btn-secondary col-2 border-dark"
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
