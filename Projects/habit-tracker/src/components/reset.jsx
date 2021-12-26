import React, { Component } from 'react';

class reset extends Component {

    render() {
        return (
            <button className='reset-btn' onClick={()=>this.props.reset()}>
                Reset
            </button>
        );
    }
}

export default reset;