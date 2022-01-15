import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ card, uploadService, onFileChange }) => {
  const inputRef = useRef();
  const onBtnClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    const uploaded = await uploadService.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        accept='image/*'
        onChange={onChange}
        type='file'
      />
      <button className={styles.btn} onClick={onBtnClick}>
        {card?.fileName||"No file"}
      </button>
    </div>
  );
};
export default ImageFileInput;
