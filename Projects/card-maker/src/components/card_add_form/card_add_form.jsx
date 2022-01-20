import React, { memo, useRef, useState } from 'react';
import styles from './card_add_form.module.css';
import ImageFileInput from '../image_file_input/image_file_input';
import Button from '../button/button';

const CardAddForm = memo(({ createOrUpdateCard, uploadService }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: '', fileURL: '' });
  console.log('addForm');

  const handleSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now().toString(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName,
      fileURL: file.fileURL,
    };
    formRef.current.reset();
    setFile({ fileName: '', fileURL: '' });
    createOrUpdateCard(card);
  };

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <form
      action='input'
      ref={formRef}
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input
        type='text'
        ref={nameRef}
        placeholder='name'
        name='name'
        className={styles.name}
      />
      <input
        type='text'
        ref={companyRef}
        placeholder='company'
        name='company'
        className={styles.company}
      />
      <select name='theme' ref={themeRef} className={styles.color}>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        type='text'
        ref={titleRef}
        placeholder='title'
        name='title'
        className={styles.title}
      />
      <input
        type='email'
        ref={emailRef}
        placeholder='email'
        name='email'
        className={styles.email}
      />
      <textarea className={styles.textarea} ref={messageRef} name='message' />
      <div className={styles.fileInput}>
        <ImageFileInput
          card={file}
          uploadService={uploadService}
          onFileChange={onFileChange}
        />
      </div>
      <Button name='Add' onClick={handleSubmit} />
    </form>
  );
});

export default CardAddForm;
