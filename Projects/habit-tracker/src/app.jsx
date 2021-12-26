import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
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
    habits[index].count =
      habits[index].count <= 1 ? 0 : habits[index].count - 1;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
    //제외하기 특정 인덱스가 있는 값을 제외하기
  };

  render() {
    return (
      <>
      <Navbar state={this.state}/>
      <Habits
        state={this.state}
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        handleDelete={this.handleDelete}
      />
      
      </>
    );
  }
}

export default App;
