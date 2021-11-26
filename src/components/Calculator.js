import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './Calculator.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDivide,
  faTimes,
  faMinus,
  faPlus,
  faEquals,
  faPercentage,
} from '@fortawesome/free-solid-svg-icons';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: '',
      result: '0',
      operation: null,
    };
  }

  displayResult = (result) => {
    if (result.next) {
      return result.next;
    }
    if (result.total !== null) {
      return result.total;
    }
    return '0';
  };

  buttonPress = (btnName) => {
    const { next, total, operation } = this.state;

    const obj = {
      total,
      next,
      operation,
    };

    const result = calculate(obj, btnName);
    this.setState({
      result: this.displayResult(result),
      next: result.next,
      total: result.total,
      operation: result.operation,
    });
  };

  render() {
    const { result } = this.state;

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
                { result }
              </Button>
            </Col>
          </Row>
          <Row>
            <Col />
          </Row>
          <Row className="number-container">
            <Col xs={12} className="number-container">
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('AC')}
              >
                AC
              </Button>
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('+/-')}
              >
                +/-
              </Button>
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('%')}
              >
                <FontAwesomeIcon icon={faPercentage} />
              </Button>
              <Button
                className="button symbols"
                onClick={() => this.buttonPress('÷')}
              >
                <FontAwesomeIcon icon={faDivide} />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="number-container">
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('7')}
              >
                7
              </Button>
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('8')}
              >
                8
              </Button>
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('9')}
              >
                9
              </Button>
              <Button
                className="button symbols"
                onClick={() => this.buttonPress('x')}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="number-container">
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('4')}
              >
                4
              </Button>
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('5')}
              >
                5
              </Button>
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('6')}
              >
                6
              </Button>
              <Button
                className="button symbols"
                onClick={() => this.buttonPress('-')}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="number-container">
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('1')}
              >
                1
              </Button>
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('2')}
              >
                2
              </Button>
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('3')}
              >
                3
              </Button>
              <Button
                className="button symbols"
                onClick={() => this.buttonPress('+')}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="number-container">
              <Button
                className="button btn-zero numkb"
                onClick={() => this.buttonPress('0')}
              >
                0
              </Button>
              <Button
                className="button numkb"
                onClick={() => this.buttonPress('.')}
              >
                .
              </Button>
              <Button
                className="button symbols"
                onClick={() => this.buttonPress('=')}
              >
                <FontAwesomeIcon icon={faEquals} />
              </Button>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Calculator;
