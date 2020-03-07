import React, { Component } from 'react';
import QuoteState from './QuoteState'

class Quote extends Component {
    render() {
        return(
            <div className='quotes-container'>
                <br/>
                <p className='quote'>Quote goes here</p>
                <button
                    className='random-button'
                    onClick={() => console.log('Random Quote')}>
                    Random Quote
                </button>
            </div>
        )
    }
}

export default Quote; 