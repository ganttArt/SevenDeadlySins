import React, { Component } from "react";
import ReactDOM from "react-dom";
import QuoteState from './components/QuoteSinsContainer'
import TopBar from './components/TopBar'
import BurgerMenu from './components/BurgerMenu'

import "./style.css";
import "./responsive.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <QuoteState/>
        <TopBar/>
        <BurgerMenu/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
