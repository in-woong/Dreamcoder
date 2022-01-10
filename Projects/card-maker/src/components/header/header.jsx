import React from 'react';
import styles from "./header.module.css";
const Header = ({ onLogout }) => {
    return (
        <header className={styles.header}>
            {
                onLogout && <button className={styles.logout} onClick={onLogout}>
                    Logout
                </button>
            }

            <img className={styles.logo} src={"/images/logo.png"} alt="logo" />
            <span className={styles.title}>Bussiniss Card Maker</span>
        </header>)
}


    ;

export default Header;