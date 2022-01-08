import React from 'react';
import styles from "./header.module.css";
const Header = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.header_img} src={require("../../favicon.jpg")} alt="/" />
            <span className={styles.header_span}>Bussiniss Card Maker</span>
        </header>)
}


    ;

export default Header;