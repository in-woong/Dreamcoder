import React, { Component } from 'react';

class navbar extends Component {
  render() {
    let count = 0;
    this.props.state.habits.map((habit) => (count += habit.count));
    return (
      <nav className='nav'>
        <i className="nav-logo">H</i>
        <span className='nav-text'>Habit Tracker</span>
        <span className='nav-count'>{count}</span>
      </nav>
    );
  }
}

export default navbar;
