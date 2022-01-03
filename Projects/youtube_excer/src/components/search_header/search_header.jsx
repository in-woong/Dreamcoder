import React, { memo } from 'react';
import styles from './search_header.module.css';
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
    <header className={styles.header}>
      <FontAwesomeIcon
        className={styles.iconYoutube}
        icon={faYoutube}
        size='3x'
      />
      <span className={styles.span}>Youtube</span>
      <form className={styles.form_search} ref={formRef}>
        <input
          ref={inputRef}
          type='text'
          placeholder='Search..'
          className={styles.input}
        />
        <button onClick={onSubmit} className={styles.btn}>
          <FontAwesomeIcon icon={faSearch} className={styles.btnIcon} />
        </button>
      </form>
    </header>
  );
});

export default header;
