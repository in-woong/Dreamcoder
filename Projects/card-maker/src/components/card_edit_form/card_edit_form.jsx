import styles from './card_edit_form.module.css';
import React, { useRef } from 'react';
import ImageFileInput from '../image_file_input/image_file_input';
import Button from '../button/button';

const CardEditForm = ({
  card,
  createOrUpdateCard,
  deleteCard,
  uploadService,
}) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

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

  const onSubmit = (e) => {
    deleteCard(card);
  };

  const onFileChange = (file) => {
    createOrUpdateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
    console.log(card);
  };

  return (
    <form action='input' ref={formRef} className={styles.form}>
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
      <div className={styles.fileInput}>
        <ImageFileInput
          uploadService={uploadService}
          card={card}
          onFileChange={onFileChange}
        />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
