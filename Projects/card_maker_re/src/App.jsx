import React, { PureComponent } from 'react';
import Habits from './component/habits';
import TodoInput from './component/input';
import Navbar from './component/navbar';
//Object 안에 깊숙한 한 값만 임의로 변경해주는 것은 좋지 않다. 왜냐하면 REactsms shallow comparison을 통해서
//DOM을 최신화 시키기 때문이다.
//따라서 Object를 크게크게 새로 만들어소 교체 해주는 것이 바람직 하다
class App extends PureComponent {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Study', count: 0 },
      { id: 3, name: 'Playing', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
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
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
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
