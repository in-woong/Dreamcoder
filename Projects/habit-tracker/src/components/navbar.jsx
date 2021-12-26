import React, { Component } from 'react';

class navbar extends Component {
  render() {
    let count = 0;
    this.props.state.habits.map((habit) => (count += habit.count));
    return (
      <div>
        <span className='nav-text'>Habit Tracker</span>
        <span className='nav-count'>{count}</span>
      </div>
    );
  }
}

export default navbar;
