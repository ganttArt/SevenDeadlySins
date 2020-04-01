import React, { Component } from 'react';

class Sins extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='sins-container'>
                <h1 className='sins-title'>Sins</h1>
                <div>
                    <button className='sin-button' onClick={() => this.props.handleStateChange('Gluttony')}>Gluttony</button>
                    <button className='sin-button' onClick={() => this.props.handleStateChange('Lust')}>Lust</button>
                    <button className='sin-button' onClick={() => this.props.handleStateChange('Greed')}>Greed</button>
                    <button className='sin-button' onClick={() => this.props.handleStateChange('Pride')}>Pride</button>
                    <button className='sin-button' onClick={() => this.props.handleStateChange('Sloth')}>Sloth</button>
                    <button className='sin-button' onClick={() => this.props.handleStateChange('Wrath')}>Wrath</button>
                    <button className='sin-button' id='envy-button' onClick={() => this.props.handleStateChange('Envy')}>Envy</button>
                </div>
                <br/>
            </div>
        )
    }
}

export default Sins; 