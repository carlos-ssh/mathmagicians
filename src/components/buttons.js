import React, { useState } from 'react';
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

const RenderButtons = () => {
  const { calcState, setCalcState } = useState({
    total: null,
    next: '',
    result: '0',
    operation: null,
  });

  const { result } = calcState;

  const displayResult = (result) => {
    if (result.next) {
      return result.next;
    }
    if (result.total !== null) {
      return result.total;
    }
    return '0';
  };

  const buttonPress = (btnName) => {
    const { next, total, operation } = calcState;

    const obj = {
      total,
      next,
      operation,
    };
    try {
      const resultCalculate = calculate(obj, btnName);
      setCalcState({
        result: displayResult(resultCalculate),
        next: resultCalculate.next,
        total: resultCalculate.total,
        operation: resultCalculate.operation,
      });
    } catch {
      setCalcState({
        result: 'Error',
        next: '',
        total: null,
        operation: null,
      });
    }
  };

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
              {result}
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
              onClick={() => buttonPress('AC')}
            >
              AC
            </Button>
            <Button
              className="button numkb"
              onClick={() => buttonPress('+/-')}
            >
              +/-
            </Button>
            <Button
              className="button numkb"
              onClick={() => buttonPress('%')}
            >
              <FontAwesomeIcon icon={faPercentage} />
            </Button>
            <Button
              className="button symbols"
              onClick={() => buttonPress('÷')}
            >
              <FontAwesomeIcon icon={faDivide} />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="number-container">
            <Button
              className="button numkb"
              onClick={() => buttonPress('7')}
            >
              7
            </Button>
            <Button
              className="button numkb"
              onClick={() => buttonPress('8')}
            >
              8
            </Button>
            <Button
              className="button numkb"
              onClick={() => buttonPress('9')}
            >
              9
            </Button>
            <Button
              className="button symbols"
              onClick={() => buttonPress('x')}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="number-container">
            <Button
              className="button numkb"
              onClick={() => buttonPress('4')}
            >
              4
            </Button>
            <Button
              className="button numkb"
              onClick={() => buttonPress('5')}
            >
              5
            </Button>
            <Button
              className="button numkb"
              onClick={() => buttonPress('6')}
            >
              6
            </Button>
            <Button
              className="button symbols"
              onClick={() => buttonPress('-')}
            >
              <FontAwesomeIcon icon={faMinus} />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="number-container">
            <Button
              className="button numkb"
              onClick={() => buttonPress('1')}
            >
              1
            </Button>
            <Button
              className="button numkb"
              onClick={() => buttonPress('2')}
            >
              2
            </Button>
            <Button
              className="button numkb"
              onClick={() => buttonPress('3')}
            >
              3
            </Button>
            <Button
              className="button symbols"
              onClick={() => buttonPress('+')}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="number-container">
            <Button
              className="button btn-zero numkb"
              onClick={() => buttonPress('0')}
            >
              0
            </Button>
            <Button
              className="button numkb"
              onClick={() => buttonPress('.')}
            >
              .
            </Button>
            <Button
              className="button symbols"
              onClick={() => buttonPress('=')}
            >
              <FontAwesomeIcon icon={faEquals} />
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};
