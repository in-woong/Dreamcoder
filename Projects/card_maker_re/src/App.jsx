import React, { Component } from 'react';
import Habits from './component/habits';
import TodoInput from './component/input';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Study', count: 0 },
      { id: 3, name: 'Playing', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count > 0 ? count : 0;
    this.setState({ habits });
  };

  handleRemove = (habit) => {
    const habits = this.state.habits.filter((item) => item.id != habit.id);
    this.setState({ habits });
  };

  onSubmit = (value) => {
    console.log(value);
    this.setState({
      habits: [...this.state.habits, { name: value, count: 0 }],
    });
  };
  render() {
    return (
      <div>
        <TodoInput handleSubmit={this.onSubmit} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
