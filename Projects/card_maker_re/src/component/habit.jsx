import React, { Component } from 'react';

class Habit extends Component {
  render() {
    const { name, count } = this.props.habit;
    return (
      <li>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button onClick={() => this.props.onIncrement(this.props.habit)}>
          <i className='fas fa-plus'></i>
        </button>
        <button onClick={() => this.props.onDecrement(this.props.habit)}>
          <i className='fas fa-minus'></i>
        </button>
        <button onClick={() => this.props.onRemove(this.props.habit)}>
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
