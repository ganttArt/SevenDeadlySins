import React, { Component } from 'react';

class Quote extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className='quotes-container'>
                <h1 className='quote-title'> { this.props.sin } </h1>
                <p className='quote'> { this.props.quote } </p>
                <button
                    className='random-button'
                    onClick={() => this.props.handleStateChange(this.props.sin)}
                    >
                    New Quote
                </button>
            </div>
        )
    }
}

export default Quote; 