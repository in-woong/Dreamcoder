import React, { Component } from 'react';

class Habit extends Component {
  state = {};
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;

    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncrement}
        >
          +
        </button>
        <button
          className='habit-button habit-decrease'
          onClick={this.handleDecrement}
        >
          -
        </button>
        <button
          className='habit-button habit-trash'
          onClick={this.handleDelete}
        >
          T
        </button>
      </li>
    );
  }
}

export default Habit;
