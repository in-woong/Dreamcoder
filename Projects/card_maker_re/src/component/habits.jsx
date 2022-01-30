import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    return (
      <ul>
        {this.props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onRemove={this.props.onRemove}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
