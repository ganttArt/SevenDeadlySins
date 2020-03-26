import React, { Component } from 'react';

class LeftSideBar extends Component{
    render() {
        return (
          <div className="left-side-bar">
            <button
              className="left-bar-buttons"
              id='pentagram-button'
              onClick={() => alert("The fact that there's a highway to hell and a stairway to heaven says a lot about anticipated traffic numbers\n - Bill Murray")}
            />
            <button
              className="left-bar-buttons"
              id='pitchfork-button'
              onClick={() => alert("The darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis\n - Dante Alighieri")}
            />
            <button
              className="left-bar-buttons"
              id='six-six-six-button'
              onClick={() => alert('Religion is for people who fear hell.\nSpirituality is for people who have been there.\n - David Bowie')}
              />
            <button className="left-bar-buttons" id='praying-hands-button'/>
          </div>
        );
    }
}

export default LeftSideBar; 