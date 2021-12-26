import React, { Component } from 'react';

class reset extends Component {

    render() {
        return (
            <button className='reset-btn' onClick={()=>this.props.onReset()}>
                Reset
            </button>
        );
    }
}

export default reset;