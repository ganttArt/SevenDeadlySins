import React, { Component } from 'react';

class Credits extends Component{
    render() {
        return (
          <div className="credits-container">
            <p id='name'>Chris Gantt - 2020</p>
            <div id='links'>
              <a id='linkedin' href='https://www.linkedin.com/in/gantt/'>LinkedIn</a>
              <a id='github' href='https://github.com/ganttArt'>GitHub</a>
            </div>
          </div>
        );
    }
}

export default Credits; 