import styles from "./card_edit_form.module.css";
import React from 'react';

const CardEditForm = ({ name, values, onChange, onSubmit }) => {

    return (
        <form action="input" onSubmit={onSubmit}>
            <input type="text" value={values.name} onChange={onChange} placeholder='name' name='name' className={styles.name} />
            <input type="text" value={values.company} onChange={onChange} placeholder='company' name='company' className={styles.company} />
            <select name="backgroundColor" value={values.color} onChange={onChange} id="color" className={styles.color}>
                <option value="Dark">Dark</option>
                <option value="Light">Light</option>
                <option value="Red">Red</option>
            </select>
            <input type="text" value={values.job} onChange={onChange} placeholder='job' name='job' className={styles.job} />
            <input type="email" value={values.email} onChange={onChange} placeholder='email' name='email' className={styles.email} />
            <input type="text" value={values.text} onChange={onChange} placeholder='text' name='text' className={styles.text} />
            <span type="text" className={styles.name2}>{`${name}`}</span>
            <button type="submit" className={styles.button} >Delete</button>
        </form>
    )
}

export default CardEditForm;