import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = (event) => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };
  render() {
    return (
      <>
        <span className='habit-name'>Reading</span>
        <span className='habit-count'>{this.state.count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncrement}
        >
          +
        </button>
        <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
          -
        </button>
        <button className='habit-button habit-trash'>
          <i className='fas fa-trash'></i>
        </button>
      </>
    );
  }
}

export default Habit;
