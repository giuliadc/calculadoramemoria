import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button.jsx";
import { Input } from "./components/Input.jsx";
import { ClearButton } from "./components/ClearButton.jsx";
import * as math from "mathjs";
import { evaluate } from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      memorylist: [""]
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };
  
  memoriasoma = val => {
    this.setState({ input: evaluate(this.state.input + this.state.memorylist[this.state.memorylist.length -1]) });
  }
  apagaregisto = () => {
    this.setState({memorylist: [""]})
  };
  salvaregisto = () =>{
    this.setState({memorylist: evaluate(this.state.input)})
  };
  handleEqual = () => {
    this.setState({ input: evaluate(this.state.input) });
  };
  recuperaultimo = val =>{
    this.addToInput(this.state.memorylist[this.state.memorylist.length-1]);
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.salvaregisto}> MS </Button>
            <Button handleClick={this.apagaregisto}> MC </Button>
            <Button handleClick={this.memoriasoma}> M+ </Button>
            <Button handleClick={this.recuperaultimo}> MR </Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>X</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              AC
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;