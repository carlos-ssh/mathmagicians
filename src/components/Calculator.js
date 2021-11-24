import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">
          <div className="calculator-display-value">0</div>
        </div>
        <div className="calculator-keypad">
          <div className="calculator-keypad-row">
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">&#8592;</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">&#8594;</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">&#8593;</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">&#8595;</div>
            </div>
          </div>
          <div className="calculator-keypad-row">
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">1</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">2</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">3</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">+</div>
            </div>
          </div>
          <div className="calculator-keypad-row">
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">4</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">5</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">6</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">-</div>
            </div>
          </div>
          <div className="calculator-keypad-row">
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">7</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">8</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">9</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">*</div>
            </div>
          </div>
          <div className="calculator-keypad-row">
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">.</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">0</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">/</div>
            </div>
            <div className="calculator-keypad-key">
              <div className="calculator-keypad-key-symbol">=</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
