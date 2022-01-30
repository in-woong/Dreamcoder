import React, { Component } from 'react';

class TodoInput extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    console.log("Input render")
    return (
      <form
        ref={this.formRef}
        className='add-form'
        onSubmit={this.handleSubmit}
      >
        <input
          className='add-input'
          placeholder='Habit'
          ref={this.inputRef}
          type='text'
        />
        <input className='add-button' type='submit' value='Submit' />
      </form>
    );
  }
}

export default TodoInput;
