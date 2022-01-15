import React from 'react';
import styles from "./card.module.css"

function getStyles(theme) {
    switch (theme) {
        case "dark":
            return styles.dark;
        case "light":
            return styles.light;
        case "colorful":
            return styles.colorful;
        default:
            throw new Error(`unknown theme:${theme}`)
    }
}

const Card = ({ card }) => {
    const DEFAULT_IMAGE = "/images/default_logo.png";
    const { name, company, title, email, message, theme, fileURL } = card;
    const url = fileURL || DEFAULT_IMAGE;

    return (
        <li className={`${styles.card} ${getStyles(theme)}`}>
            <img className={styles.cardImg} src={url} alt="logo" />
            <div className={styles.cardDesc}>
                <span className={styles.name}>{name}</span>
                <span className={styles.company}>{company}</span>
                <span className={styles.title}>{title}</span>
                <span className={styles.email}>{email}</span>
                <span className={styles.message}>{message}</span>
            </div>
        </li>
    )
}


export default Card;