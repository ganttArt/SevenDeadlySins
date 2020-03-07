import React, { Component } from 'react';
import QuoteState from './QuoteState'

class Sins extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'gluttony'}
    }

    handleClick (sin){
        this.setState({value: sin.target.value})
        console.log(this.state.value)
    }

    render() {
        return(
            <div className='sins-container'>
                <h1 className='sins-title'>Sins</h1>
                <div className='sins-buttons'>
                    <button 
                        value={'gluttony'}
                        onClick={(value) => this.handleClick(value)}
                    >
                        Gluttony
                    </button>
                    <button 
                        value={'lust'}
                        onClick={(value) => this.handleClick(value)}
                    >
                        Lust
                    </button>
                    <button 
                        value={'greed'}
                        onClick={(value) => this.handleClick(value)}
                    >
                        Greed
                    </button>
                    <button 
                        value={'pride'}
                        onClick={(value) => this.handleClick(value)}
                    >
                        Pride
                    </button>
                    <button 
                        value={'sloth'}
                        onClick={(value) => this.handleClick(value)}
                    >
                        Sloth
                    </button>
                    <button 
                        value={'wrath'}
                        onClick={(value) => this.handleClick(value)}
                    >
                        Wrath
                    </button>
                    <button 
                        value={'envy'}
                        onClick={(value) => this.handleClick(value)}
                    >
                        Envy
                    </button>
                </div>
                <br/>
            </div>
        )
    }
}

export default Sins; 