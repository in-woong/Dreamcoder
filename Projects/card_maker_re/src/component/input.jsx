import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.myInput = React.createRef();
    
  }
  

  render() {
    
    return (
      <form onSubmit={() => this.props.handleSubmit("value")}>
        <input ref={this.myInput} type='text' />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default TodoInput;
