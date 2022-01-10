import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from "./login.module.css";
const Login = ({ authService }) => {
    const navigate = useNavigate();
    const goToMaker = (user) => {
        navigate("/maker", { state: user });
    }
    const onLogin = (event) => {
        return authService//
            .login(event.currentTarget.textContent)//
            .then(data => goToMaker(data.user.uid))
    };

    useEffect(() => {
        authService.onAuthChanged((user) => {
            user && goToMaker(user.uid);
        })
    }, [])
    return (
        <section className={styles.login}>
            <Header authService={authService} />
            <section>
                <h1>Login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Google
                        </button>

                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>
                            Github
                        </button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    )
}

export default Login;