import React, { Component } from 'react';
import QuoteState from './QuoteSinsContainer'

class Quote extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className='quotes-container'>
                <h1 className='quote-title'>
                    { this.props.dataFromParent }
                </h1>
                <p className='quote'>Quote goes here</p>
                <button
                    className='random-button'
                    // onClick={this.props.handler}
                    >
                    Random Quote
                </button>
            </div>
        )
    }
}

export default Quote; 