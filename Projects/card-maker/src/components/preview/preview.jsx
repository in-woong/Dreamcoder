import React from 'react';
import styles from "./preview.module.css";

const Preview = (props) => {
    return (
    <section className={styles.preview}>
        <h1 className={styles.title}>Card Preview</h1>
        <div className={styles.view}></div>
    </section>)
}

export default Preview;