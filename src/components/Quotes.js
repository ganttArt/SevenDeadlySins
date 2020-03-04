import React, { Component } from 'react';

class Quotes extends Component {
    render() {
        return(
            <div className='quotes-container'>
                <br/>
                <p className='quote'>Quote goes here</p>
                <form>
                    <input
                        className='random_button'
                        type='submit'
                        value='Random Quote'
                    />
                </form>
            </div>
        )
    }
}

export default Quotes; 