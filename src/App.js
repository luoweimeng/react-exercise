import React, { Component } from "react";
import NumberContainer from "./container/NumberContainer";
import ComputeContainer from "./container/ComputeContainer";
import OperatorContainer from "./container/OperatorContainer";
import Result from "./component/Result";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "0",
      temp: null,
      compute: null,
      reset: false
    };
  }
  parseNumber(number) {
    let { result, reset } = this.state;
    let newResult;
    if (result === "0" || reset) newResult = `${number}`;
    else newResult = `${result}${number}`;
    return {
      result: newResult,
      reset: false
    };
  }
  parseCompute(compute) {
    let { result, temp } = this.state;
    let newResult;
    newResult = this.computeResult();

    if (compute === "=") {
      return {
        result: newResult,
        temp: null,
        compute: compute,
        reset: true
      };
    } else {
      if (temp === null) {
        return {
          result: result,
          temp: result,
          compute: compute,
          reset: true
        };
      } else {
        return {
          result: newResult,
          temp: newResult,
          compute: compute,
          reset: true
        };
      }
    }
  }

  computeResult() {
    let { result, temp, compute } = this.state;
    if (temp === null) return;
    switch (compute) {
      case "+":
        return `${Number(temp) + Number(result)}`;
      case "-":
        return `${Number(temp) - Number(result)}`;
      case "×":
        return `${Number(temp) * Number(result)}`;
      case "÷":
        return `${Number(temp) / Number(result)}`;
    }
  }

  parseOperator(input) {
    switch (input) {
      case "AC":
        return {
          result: "0",
          temp: null
        };
      case "+/-":
        return {
          result: `${-this.state.result}`
        };
      case "%":
        return {
          result: `${this.state.result / 100.0}`
        };
    }
  }
  handleNumberClick(number) {
    this.setState(this.parseNumber(number));
  }
  handleComputeClick(compute) {
    this.setState(this.parseCompute(compute));
  }
  handleOperatorClick(input) {
    this.setState(this.parseOperator(input));
  }

  render() {
    return (
      <div className="App">
        <Result val={this.state.result} />
        <div className="edit">
          <OperatorContainer
            handleOperatorClick={this.handleOperatorClick.bind(this)}
          />
          <NumberContainer
            handleNumberClick={this.handleNumberClick.bind(this)}
          />
        </div>
        <ComputeContainer
          handleComputeClick={this.handleComputeClick.bind(this)}
        />
      </div>
    );
  }
}

export default App;
