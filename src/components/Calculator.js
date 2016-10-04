import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './calculator.css';

class Calculator extends Component {
  constructor () {
    super();
    this.reset = this.reset.bind(this);
    this.getValue = this.getValue.bind(this);
    this.getSymbol = this.getSymbol.bind(this);
    this.state = {
      cleanState: true,
      defaultValue: 0,
      result: [ ]
    }
  }

  reset () {
    this.setState({
      cleanState: true,
      result: [ ]
    })
  }

  getValue (e) {
    const number = e.target.innerText;
    this.setState({
      cleanState: false,
      result: this.state.result.concat(number)
    })
  }

  getSymbol (e) {
    const symbol = e.target.innerText;
    this.calculate(symbol);
  }

  calculate (symbol) {
    if (symbol === '+') {
      console.log('+');
    }
  }

  render () {
    return (
      <div styleName='container'>
        <div styleName='resultBox'>{this.state.cleanState ? this.state.defaultValue : this.state.result}</div>
        <div styleName='keysContainer'>
          <div styleName='row'>
            <button styleName='button operator' onClick={this.reset}>AC</button>
            <button styleName='button operator' onClick={this.reset}>CE</button>
            <button styleName='button operator' >±</button>
            <button styleName='button operator' onClick={this.getSymbol}>÷</button>
          </div>
          <div styleName='row'>
            <button styleName='button' onClick={this.getValue}>7</button>
            <button styleName='button' onClick={this.getValue}>8</button>
            <button styleName='button' onClick={this.getValue}>9</button>
            <button styleName='button operator' onClick={this.getSymbol}>x</button>
          </div>
          <div styleName='row'>
            <button styleName='button' onClick={this.getValue}>4</button>
            <button styleName='button' onClick={this.getValue}>5</button>
            <button styleName='button' onClick={this.getValue}>6</button>
            <button styleName='button operator' onClick={this.getSymbol}>-</button>
          </div>
          <div styleName='row'>
            <button styleName='button' onClick={this.getValue}>1</button>
            <button styleName='button' onClick={this.getValue}>2</button>
            <button styleName='button' onClick={this.getValue}>3</button>
            <button styleName='button operator' onClick={this.getSymbol}>+</button>
          </div>
          <div styleName='row'>
            <button styleName='button' onClick={this.getValue}>0</button>
            <button styleName='button empty' ></button>
            <button styleName='button' >.</button>
            <button styleName='button operator' onClick={this.getSymbol}>=</button>
          </div>

        </div>
      </div>
    )
  }
}

export default CSSModules(Calculator, styles, {allowMultiple: true});
