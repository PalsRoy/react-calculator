import React, {
  Component
} from 'react';
import * as math from 'mathjs';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resultBlock: ''
    };
  this.handleNumberClick = this.handleNumberClick.bind(this);
  this.handleOperatorClick = this.handleOperatorClick.bind(this);
  this.handlePercentage = this.handlePercentage.bind(this);
  this.handlePlusMinus = this.handlePlusMinus.bind(this);
  this.handleDecimal = this.handleDecimal.bind(this);
  }

  handleNumberClick(event){
  let removeZero = (this.state.resultBlock === '0'? event.target.value : (this.state.resultBlock + event.target.value));
  this.setState({resultBlock: removeZero});
  }

  handleOperatorClick(event){
  let expressionResult = math.eval(this.state.resultBlock);
  this.setState({resultBlock: expressionResult});
  }

  handlePercentage(event){
  let percentageResult = math.eval(this.state.resultBlock + '/100');
  this.setState({resultBlock: percentageResult});
  }

  handlePlusMinus(event){
  let alwaysString = this.state.resultBlock.toString();
  let plusMinusResult = (alwaysString.charAt(0) === '-' ? alwaysString.slice(1) : ('-'+  alwaysString));
  this.setState({resultBlock: plusMinusResult});
  }

  handleDecimal(event){
  let result = this.state.resultBlock;
  let singleDecimal = (result.charAt(result.length-1) === '.'? this.state.resultBlock : (result + '.'));
  this.setState({resultBlock: singleDecimal});
  }

  render() {

    return (
        <div className="App">
          <div className="Calculator">
            <div className="Result">{this.state.resultBlock}</div>
            <div className="CalculatorRow">
              <button className="Button" onClick={() => this.setState({resultBlock:'0'})}>AC</button>
              <button className="Button" onClick={this.handlePlusMinus}>+/-</button>
              <button className="Button" onClick={this.handlePercentage} value="%">%</button>
              <button className="Button Operator" onClick={this.handleNumberClick} value="/">/</button>
            </div>
            <div className="CalculatorRow">
              <button className="Button" onClick={this.handleNumberClick} value="7">7</button>
              <button className="Button" onClick={this.handleNumberClick} value="8">8</button>
              <button className="Button" onClick={this.handleNumberClick} value="9">9</button>
              <button className="Button Operator" onClick={this.handleNumberClick} value="*">*</button>
            </div>
            <div className="CalculatorRow">
              <button className="Button" onClick={this.handleNumberClick} value="4">4</button>
              <button className="Button" onClick={this.handleNumberClick} value="5">5</button>
              <button className="Button" onClick={this.handleNumberClick} value="6">6</button>
              <button className="Button Operator" onClick={this.handleNumberClick} value="-">-</button>
            </div>
            <div className="CalculatorRow">
              <button className="Button" onClick={this.handleNumberClick} value="1">1</button>
              <button className="Button" onClick={this.handleNumberClick} value="2">2</button>
              <button className="Button" onClick={this.handleNumberClick} value="3">3</button>
              <button className="Button Operator" onClick={this.handleNumberClick} value="+">+</button>
            </div>
            <div className="CalculatorRow">
              <button className="Button ZeroButton" onClick={this.handleNumberClick} value="0">0</button>
              <button className="Button" onClick={this.handleDecimal} value=".">.</button>
              <button className="Button Operator" onClick={this.handleOperatorClick}>=</button>
            </div>
          </div>
        </div>
    );

  }

}
export default Calculator;
