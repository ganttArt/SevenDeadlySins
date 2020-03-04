import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from './components/Title';
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
      <Title/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
