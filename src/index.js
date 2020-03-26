import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuoteState from './components/QuoteSinsContainer'

import LeftSideBar from './components/LeftSideBar'
import TopBar from './components/TopBar'

import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <QuoteState/>
        <TopBar/>
        <LeftSideBar/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
