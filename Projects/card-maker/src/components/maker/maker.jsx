import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from "./maker.module.css";
import { useNavigate } from "react-router-dom"

const Maker = ({ authService }) => {
    const navigate = useNavigate();

    useEffect(() => {
        authService.onAuthChanged((user) => {
            if (!user) {
                navigate("/");
            }
        })
    })

    const onLogout = () => {
        return authService.logout();
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <h1>Maker</h1>
            <Footer />
        </section>

    )
}

export default Maker;