import React, { useRef } from 'react';
import styles from "./card_add_form.module.css"

const CardAddForm = ({ createOrUpdateCard }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const imageRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const card = {
            id: Date.now().toString(),
            name: nameRef.current.value || "",
            company: companyRef.current.value || "",
            theme: themeRef.current.value,
            title: titleRef.current.value || "",
            email: emailRef.current.value || "",
            message: messageRef.current.value || "",
            image: imageRef.current.value || "",
        }
        formRef.current.reset();
        createOrUpdateCard(card);
    }

    return (
        <form action="input" ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <input type="text" ref={nameRef} placeholder='name' name='name' className={styles.name} />
            <input type="text" ref={companyRef} placeholder='company' name='company' className={styles.company} />
            <select name="theme" ref={themeRef} className={styles.color}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="colorful">Colorful</option>
            </select>
            <input type="text" ref={titleRef} placeholder='title' name='title' className={styles.title} />
            <input type="email" ref={emailRef} placeholder='email' name='email' className={styles.email} />
            <textarea className={styles.textarea} ref={messageRef} name="message" />
            <span type="text" ref={imageRef} className={styles.name2}>{`Fuck`}</span>
            <button type="submit" className={styles.button} >Add</button>
        </form>
    )
}

export default CardAddForm;