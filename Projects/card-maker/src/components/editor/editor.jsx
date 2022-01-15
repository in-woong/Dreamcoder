import React from 'react';
import styles from "./editor.module.css";

const Editor = (props) => {
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Editor</h1>
            <div className={styles.view}></div>
        </section>
    )
}

export default Editor;