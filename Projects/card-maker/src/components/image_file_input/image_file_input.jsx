import React, { useRef, useState } from 'react';
import Loading from '../loading/loading';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ card, uploadService, onFileChange }) => {
  const [onLoading, setOnLoading] = useState(false);
  const inputRef = useRef();
  const onBtnClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    
    setOnLoading(true);
    try {
      const uploaded = await uploadService.upload(event.target.files[0]);
      onFileChange({
        name: uploaded.original_filename,
        url: uploaded.url,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setOnLoading(false);
      console.log(card);
    }
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
      {onLoading ? (
        <Loading />
      ) : (
        <button
          className={`${styles.btn} ${
            card?.fileName ? styles.pink : styles.gray
          }`}
          onClick={onBtnClick}
        >
          {card?.fileName || 'No file'}
        </button>
      )}
    </div>
  );
};
export default ImageFileInput;
