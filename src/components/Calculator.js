import React, { Component } from 'react';

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
      <div className={styles.container}>
        <div className={styles.resultBox}>{this.state.cleanState ? this.state.defaultValue : this.state.result}</div>
        <div className={styles.keysContainer}>
          <div className={styles.row}>
            <button className={`${styles.button} ${styles.operator}`} onClick={this.reset}>AC</button>
            <button className={`${styles.button} ${styles.operator}`} onClick={this.reset}>CE</button>
            <button className={`${styles.button} ${styles.operator}`} >±</button>
            <button className={`${styles.button} ${styles.operator}`} onClick={this.getSymbol}>÷</button>
          </div>
          <div className={styles.row}>
            <button className={styles.button} onClick={this.getValue}>7</button>
            <button className={styles.button} onClick={this.getValue}>8</button>
            <button className={styles.button} onClick={this.getValue}>9</button>
            <button className={`${styles.button} ${styles.operator}`} onClick={this.getSymbol}>x</button>
          </div>
          <div className={styles.row}>
            <button className={styles.button} onClick={this.getValue}>4</button>
            <button className={styles.button} onClick={this.getValue}>5</button>
            <button className={styles.button} onClick={this.getValue}>6</button>
            <button className={`${styles.button} ${styles.operator}`} onClick={this.getSymbol}>-</button>
          </div>
          <div className={styles.row}>
            <button className={styles.button} onClick={this.getValue}>1</button>
            <button className={styles.button} onClick={this.getValue}>2</button>
            <button className={styles.button} onClick={this.getValue}>3</button>
            <button className={`${styles.button} ${styles.operator}`} onClick={this.getSymbol}>+</button>
          </div>
          <div className={styles.row}>
            <button className={styles.button} onClick={this.getValue}>0</button>
            <button className={`${styles.button} ${styles.empty}`} ></button>
            <button className={styles.button} >.</button>
            <button className={`${styles.button} ${styles.operator}`} onClick={this.getSymbol}>=</button>
          </div>

        </div>
      </div>
    )
  }
}

export default Calculator;
