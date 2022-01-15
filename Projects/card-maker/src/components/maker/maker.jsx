import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const Maker = ({ authService, uploadService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Ellie1',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: '',
      fileURL: '',
    },
    2: {
      id: '2',
      name: 'Ellie2',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: '',
      fileURL: '',
    },
    3: {
      id: '3',
      name: 'Ellie3',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: '',
      fileURL: '',
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const onLogout = () => {
    return authService.logout();
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.container}>
        <Editor
          cards={cards}
          createOrUpdateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          uploadService={uploadService}
        />
        <Preview cards={cards} uploadService={uploadService} />
      </section>

      <Footer />
    </section>
  );
};

export default Maker;
