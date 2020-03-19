import React, { Component } from "react";
import ReactDOM from "react-dom";
import Title from './components/Title';
import QuoteState from './components/QuoteSinsContainer'

import LeftSideBar from './heaven_components/LeftSideBar'
import TopBar from './heaven_components/TopBar'

import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        
        <LeftSideBar/>
        <TopBar/>

        {/* <Title/>
        <br/>
        <QuoteState/> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
