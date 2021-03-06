import React from 'react';

export const SinsJsx = () => {
return (
        <div className='sins-container'>
            <h1 className='sins-title'>Sins</h1>
            <div className='sins-buttons'>
                <button onClick={() => this.props.handleStateChange('Gluttony')}>Gluttony</button>
                <button onClick={() => this.props.handleStateChange('Lust')}>Lust</button>
                <button onClick={() => this.props.handleStateChange('Greed')}>Greed</button>
                <button onClick={() => this.props.handleStateChange('Pride')}>Pride</button>
                <button onClick={() => this.props.handleStateChange('Sloth')}>Sloth</button>
                <button onClick={() => this.props.handleStateChange('Wrath')}>Wrath</button>
                <button onClick={() => this.props.handleStateChange('Envy')}>Envy</button>
            </div>
            <br/>
        </div>
)
}