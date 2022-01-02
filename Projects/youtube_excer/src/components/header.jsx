import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const header = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const search = inputRef.current.value;
    props.setInput(search);
    formRef.current.reset();
  };

  return (
    <header className='header'>
      <FontAwesomeIcon className='icon_youtube' icon={faYoutube} size='3x' />
      <span className='header_span'>Youtube</span>
      <form className='header_search-form' ref={formRef}>
        <input
          ref={inputRef}
          type='text'
          placeholder='Search..'
          className='hearder_input'
        />
        <button onClick={onSubmit} className='header_btn'>
          <FontAwesomeIcon icon={faSearch} className='icon_search' />
        </button>
      </form>
    </header>
  );
});

export default header;
