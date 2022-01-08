import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from "./login.module.css";
const Login = ({ authService }) => {
    const onLogin = event => {
        authService//
            .login(event.currentTarget.textContent)//
            .then(console.log)
    }
    return (
        <section className={styles.login}>
            <Header />
            <span className={styles.login_span}>Login</span>
            <ul className={styles.login_SSO}>
                <li className={styles.login_google} onClick={onLogin}>
                    Google
                </li>
                <li className={styles.login_github} onClick={onLogin}>
                    Github
                </li>
            </ul>
            <Footer />
        </section>
    )
}

export default Login;