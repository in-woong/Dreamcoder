import React, { Component } from 'react';
import Habits from './component/habits';
import TodoInput from './component/input';
import Navbar from './component/navbar';

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

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id != habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now().toString(), name, count: 0 },
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    this.setState({ habits: [] });
  };
  handleCountReset = () => {
    const habits = this.state.habits.map((item) => {
      item.count = 0;
      return item;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <div>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
        />
        <button className='reset-btn' onClick={this.handleReset}>
          ResetAll
        </button>
        <button className='countReset-btn' onClick={this.handleCountReset}>
          CountReset
        </button>
      </div>
    );
  }
}

export default App;
