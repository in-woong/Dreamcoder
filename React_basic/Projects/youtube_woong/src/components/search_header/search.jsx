import styles from './search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useRef } from 'react';

const Search = ({ onSubmit, goHome }) => {
  const formRef = useRef();
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    onSubmit(text);
    formRef.current.reset();
  };

  return (
    <section className={styles.header}>
      <div className={styles.home} onClick={goHome}>
        <FontAwesomeIcon className={styles.logo} icon={faYoutube} />
        <span className={styles.span}>Youtube</span>
      </div>
      <form
        ref={formRef}
        className={styles.form}
        onSubmit={handleSubmit}
        action='submit'
      >
        <input ref={inputRef} className={styles.input} type='text' placeholder='Search...' />
        <input type='submit' className={styles.button} value='GO' />
      </form>
    </section>
  );
};

export default Search;
