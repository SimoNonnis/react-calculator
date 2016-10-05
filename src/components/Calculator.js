import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './calculator.css';

class Calculator extends Component {
  constructor () {
    super();
    this.allClear   = this.allClear.bind(this);
    this.clearEntry = this.clearEntry.bind(this);
    this.toggleSign = this.toggleSign.bind(this);
    this.displayNum = this.displayNum.bind(this);
    this.decimalDot = this.decimalDot.bind(this);
    this.operation  = this.operation.bind(this);
    this.calculate  = this.calculate.bind(this);


    this.state = {
      operation: '',
      displayVal: '0',
      preVal: '',
      lastVal: ''
    }
  }

  allClear () {
    this.setState({
      operation: '',
      displayVal: '0',
      preVal: '',
      lastVal: ''
    })
  }

  clearEntry () {
    const { displayVal } = this.state;

    if (displayVal.length > 1) {
      this.setState({
        displayVal: displayVal.slice(0, displayVal.length -1)
      })
    } else {
      this.setState({
        displayVal: '0'
      })
    }
  }

  toggleSign () {
    const { displayVal } = this.state;

    switch (displayVal.charAt(0)) {
      case '-':
        this.setState({
          displayVal: displayVal.slice(1)
        })
        break;
      default:
        this.setState({
          displayVal: `-${displayVal}`
        })
    }
  }

  displayNum (e) {
    const number = e.target.innerText;
    const { displayVal } = this.state;

    switch (displayVal) {
      case '0':
        this.setState({
          displayVal: number
        })
        break;
      case '+':
        this.setState({
          displayVal: number
        })
        break;
      default:
        this.setState({
          displayVal: displayVal + number
        })
    }
  }

  decimalDot () {
    const { displayVal } = this.state;

    if (!displayVal.includes('.')) {
      this.setState({
        displayVal: `${displayVal}.`
      })
    }
  }

  operation (e) {
    const{ displayVal } = this.state;
    const operation = e.target.innerText;
    console.log('Clicked operation: ', operation);

    this.setState({
      operation: operation,
      displayVal: operation,
      prevVal: displayVal
    })
  }

  calculate (e) {
    const calculate = e.target.innerText;
    const { prevVal, operation, lastVal } = this.state;
    const result = `${prevVal} ${operation} ${lastVal}`;
    console.log('Clicked calculate: ', calculate);
    this.setState({
      operation: '',
      displayVal: String(result),
      preVal: '',
      lastVal: ''
    })
  }















  render () {
    const { displayVal } = this.state;

    return (
      <div styleName='container'>
        <div styleName='displayValBox'>{displayVal}</div>
        <div styleName='keysContainer'>
          <div styleName='row'>
            <button styleName='button operation' onClick={this.allClear}>AC</button>
            <button styleName='button operation' onClick={this.clearEntry}>CE</button>
            <button styleName='button operation' onClick={this.toggleSign}>±</button>
            <button
              styleName='button operation'
              onClick={this.operation}
            >/</button>
          </div>
          <div styleName='row'>
            <button styleName='button' onClick={this.displayNum}>7</button>
            <button styleName='button' onClick={this.displayNum}>8</button>
            <button styleName='button' onClick={this.displayNum}>9</button>
            <button
              styleName='button operation'
              onClick={this.operation}
            >x</button>
          </div>
          <div styleName='row'>
            <button styleName='button' onClick={this.displayNum}>4</button>
            <button styleName='button' onClick={this.displayNum}>5</button>
            <button styleName='button' onClick={this.displayNum}>6</button>
            <button
              styleName='button operation'
              onClick={this.operation}
            >-</button>
          </div>
          <div styleName='row'>
            <button styleName='button' onClick={this.displayNum}>1</button>
            <button styleName='button' onClick={this.displayNum}>2</button>
            <button styleName='button' onClick={this.displayNum}>3</button>
            <button
              styleName='button operation'
              onClick={this.operation}
            >+</button>
          </div>
          <div styleName='row'>
            <button styleName='button' onClick={this.displayNum}>0</button>
            <button styleName='button empty' ></button>
            <button styleName='button' onClick={this.decimalDot}>.</button>
            <button
              styleName='button operation'
              onClick={this.calculate}
            >=</button>
          </div>

        </div>
      </div>
    )
  }
}

export default CSSModules(Calculator, styles, { allowMultiple: true });
