import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from './components/Title';
import Sins from './components/Sins';
import Quote from './components/Quote';
import QuoteState from './components/QuoteState'
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Title/>
        <br/>
        <QuoteState/>
        <Sins/>
        <br/>
        <br/>
        <Quote/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
