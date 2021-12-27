import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
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
    console.log('habitAddForm');
    return (
      <form className='add-form' ref={this.formRef} onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          className='add-input'
          type='text'
          name='actName'
          placeholder='what do you do?'
        />
        <input className="add-button" type='button' value='submit' onClick={this.onSubmit}/>
      </form>
    );
  }
}

export default HabitAddForm;
