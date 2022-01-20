import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const Maker = ({ authService, uploadService, cardRepository }) => {
  const state = useLocation().state;
  const [userId, setUserId] = useState(state);
  const [cards, setCards] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCard(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId]);
  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else if (!user) {
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
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <>
      <section className={styles.maker}>
        <section className={styles.header}>
          <Header onLogout={onLogout} />
        </section>
        <section className={styles.container}>
          <Editor
            cards={cards}
            createOrUpdateCard={createOrUpdateCard}
            deleteCard={deleteCard}
            uploadService={uploadService}
            cardRepository={cardRepository}
            userId={userId}
          />
          <Preview cards={cards} uploadService={uploadService} />
        </section>

        <Footer />
      </section>
    </>
  );
};

export default Maker;
