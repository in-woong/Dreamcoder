import React, { Component } from 'react';

class input extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    return (
      <form name='actForm' ref={this.formRef}>
        <input
          ref={this.inputRef}
          className='add-form'
          type='text'
          name='actName'
          placeholder='what do you do?'
        />
        <input type='button' onClick={this.onSubmit} value='submit' />
      </form>
    );
  }
}

export default input;
