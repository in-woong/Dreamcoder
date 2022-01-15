import styles from './card_edit_form.module.css';
import React, { useRef } from 'react';

const CardEditForm = ({ card, createOrUpdateCard, deleteCard}) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const imageRef = useRef();

  const onChange = (e) => {
    e.preventDefault();
    if (e.currentTarget == null) {
      return;
    }
    createOrUpdateCard({
      ...card,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmit=(e)=>{
    deleteCard(card);
  }

  
  return (
    <form
      action='input'
      ref={formRef}
      className={styles.form}
    >
      <input
        type='text'
        ref={nameRef}
        value={name}
        onChange={onChange}
        placeholder='name'
        name='name'
        className={styles.name}
      />
      <input
        type='text'
        ref={companyRef}
        value={company}
        onChange={onChange}
        placeholder='company'
        name='company'
        className={styles.company}
      />
      <select
        name='theme'
        ref={themeRef}
        value={theme}
        onChange={onChange}
        className={styles.color}
      >
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        type='text'
        value={title}
        ref={titleRef}
        onChange={onChange}
        placeholder='title'
        name='title'
        className={styles.title}
      />
      <input
        type='email'
        value={email}
        ref={emailRef}
        onChange={onChange}
        placeholder='email'
        name='email'
        className={styles.email}
      />
      <textarea
        className={styles.textarea}
        ref={messageRef}
        name='message'
        onChange={onChange}
        value={message}
      />
      <span
        type='text'
        ref={imageRef}
        className={styles.name2}
      >{`${fileName}`}</span>
      <button type='submit' className={styles.button} onClick={onSubmit}>
        Delete
      </button>
    </form>
  );
};

export default CardEditForm;
