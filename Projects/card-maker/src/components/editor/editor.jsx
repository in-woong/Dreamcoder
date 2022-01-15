import React, { useState } from 'react';
import Form from '../card_edit_form/card_edit_form';
import styles from "./editor.module.css";

const Editor = (props) => {
    const [values, setValues] = useState({ name: "", company: "", color: "", job: "", email: "", text: "", });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }
    return (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Editor</h1>
            <div className={styles.view}>
                <Form name={"anna"} values={values} onChange={handleChange} onSubmit={handleSubmit} />
                <br />
                <Form name={"ellie"} values={values} onChange={handleChange} onSubmit={handleSubmit} />
                <br />
                <Form name={"John"} values={values} onChange={handleChange} onSubmit={handleSubmit} />
            </div>
        </section>
    )
}

export default Editor;