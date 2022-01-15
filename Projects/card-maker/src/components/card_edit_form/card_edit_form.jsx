import styles from "./card_edit_form.module.css";
import React from 'react';

const CardEditForm = ({ card }) => {
    const { name, company, theme, title, email, message, fileName, fileURL } = card
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return (
        <form action="input" onSubmit={handleSubmit} className={styles.form}>
            <input type="text" value={name} onChange={handleChange} placeholder='name' name='name' className={styles.name} />
            <input type="text" value={company} onChange={handleChange} placeholder='company' name='company' className={styles.company} />
            <select name="theme" value={theme} onChange={handleChange} className={styles.color}>
                <option value="Dark">Dark</option>
                <option value="Light">Light</option>
                <option value="Red">Red</option>
            </select>
            <input type="text" value={title} onChange={handleChange} placeholder='title' name='title' className={styles.title} />
            <input type="email" value={email} onChange={handleChange} placeholder='email' name='email' className={styles.email} />
            <textarea className={styles.textarea} name="message" value={message} />
            <span type="text" className={styles.name2}>{`${fileName}`}</span>
            <button type="submit" className={styles.button} >Delete</button>
        </form>
    )
}

export default CardEditForm;