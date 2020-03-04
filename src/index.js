import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from './components/Title';
import Sins from './components/Sins';
import Quotes from './components/Quotes';
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Title/>
        <br/>
        <Sins/>
        <br/>
        <br/>
        <Quotes/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
