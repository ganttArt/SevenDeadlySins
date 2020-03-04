import React, { Component } from 'react';

class Sins extends Component {
    render() {
        return(
            <div className='sins-container'>
                <h1 className='sins-title'>Sins</h1>
                <div className='sins-buttons'>
                    <form>
                        <input
                            className='gluttony-button'
                            type='submit'
                            value='Gluttony'
                        />
                        <input
                            className='lust-button'
                            type='submit'
                            value='Lust'
                        />
                        <input
                            className='greed-button'
                            type='submit'
                            value='Greed'
                        />
                        <input
                            className='pride-button'
                            type='submit'
                            value='Pride'
                        />
                        <input
                            className='sloth-button'
                            type='submit'
                            value='Sloth'
                        />
                        <input
                            className='wrath-button'
                            type='submit'
                            value='Wrath'
                        />
                        <input
                            className='envy-button'
                            type='submit'
                            value='Envy'
                        />
                    </form>
                </div>
                <br/>
            </div>
        )
    }
}

export default Sins; 