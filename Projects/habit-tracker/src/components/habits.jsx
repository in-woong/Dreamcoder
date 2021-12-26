import React, { Component } from 'react';
import Habit from './habit';
class Habits extends Component {
  render() {
    return (
      <ul>
        {this.props.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.props.handleIncrement}
            onDecrement={this.props.handleDecrement}
            onDelete={this.props.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
