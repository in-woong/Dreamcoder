import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = '';
    formRef.current.reset();
  };

  console.log('habitAddForm');
  return (
    <form className='add-form' ref={formRef} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        className='add-input'
        type='text'
        name='actName'
        placeholder='what do you do?'
      />
      <input
        className='add-button'
        type='button'
        value='submit'
        onClick={onSubmit}
      />
    </form>
  );
});

export default HabitAddForm;
