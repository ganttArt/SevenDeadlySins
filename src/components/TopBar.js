import React, { Component } from 'react';

class TopBar extends Component{
    render() {
        return (
          <header className="top-bar">
            <button
              className="top-bar-logo-button"
              onClick = {() => alert("Congratulations!\nYou found the hidden button!\nAnd because you're in hell, your prize is eternal suffering.\nThanks for visiting!")}  
            />
            <h1 className="top-bar-title">Welcome to Hell</h1>
            <button className="feeling-naughty-button">Feeling Nice?</button>
          </header>
        );
    }
}

export default TopBar; 