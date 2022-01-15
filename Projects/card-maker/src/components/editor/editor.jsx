import React, { useState } from 'react';
import Form from '../card_edit_form/card_edit_form';
import styles from "./editor.module.css";

const Editor = ({ cards }) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Editor</h1>
            {
                cards.map(card => <Form card={card} />)
            }
        </section>
    )
}

export default Editor;