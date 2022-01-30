import React, { Component } from 'react';

class Habit extends Component {
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
    console.log(`habit:${this.props.habit.name} render`)
    const { name, count } = this.props.habit;
    return (
      <li>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button onClick={this.handleIncrement}>
          <i className='fas fa-plus'></i>
        </button>
        <button onClick={this.handleDecrement}>
          <i className='fas fa-minus'></i>
        </button>
        <button onClick={this.handleDelete}>
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
