import React, { Component } from 'react';
import pentagram from './assets/hell/pentagram.jpg'

class TopBar extends Component{
    render() {
        return (
          <header className="top-bar">
            {/* <img src={pentagram} alt="logo"/> */}
            <h1 className="top-bar-logo">H</h1>
            <h1 className="top-bar-title">Welcome to Hell</h1>
            <button className="feeling-naughty-button">Feeling Nice?</button>
          </header>
        );
    }
}

export default TopBar; 