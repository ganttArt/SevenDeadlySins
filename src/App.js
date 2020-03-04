import React, { Component } from "react";

import "./style.css";
// imports from components
// import Profile from './components/Profile';


class App extends Component {
  render() {
    return (
      <div className="app-container">
      <Profile name='Chris'/>
      </div>
    );
  }
}

export default App;
