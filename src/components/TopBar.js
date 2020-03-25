import React, { Component } from 'react';

class TopBar extends Component{
    render() {
        return (
          <div className="top-bar">
            <h1 className="top-bar-logo">H</h1>
            <h1 className="top-bar-title">Welcome to Hell</h1>
            <button className="feeling-naughty-button">Feeling Nice?</button>
          </div>
        );
    }
}

export default TopBar; 