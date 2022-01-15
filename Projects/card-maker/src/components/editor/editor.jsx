import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({
  cards,
  addCard,
  createOrUpdateCard,
  deleteCard,
  uploadService,
}) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      <div className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <CardEditForm
            className={styles.cards}
            card={cards[key]}
            key={key}
            createOrUpdateCard={createOrUpdateCard}
            deleteCard={deleteCard}
            uploadService={uploadService}
          />
        ))}
        <CardAddForm
          className={styles.cards}
          cards={cards}
          createOrUpdateCard={createOrUpdateCard}
          uploadService={uploadService}
        />
      </div>
    </section>
  );
};

export default Editor;
