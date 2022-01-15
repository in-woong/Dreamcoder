import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from "../editor/editor";
import Preview from "../preview/preview"
import styles from "./maker.module.css";
import { useNavigate } from "react-router-dom";


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
            <section className={styles.container}>
                <Editor />
                <Preview />
            </section>

            <Footer />
        </section>

    )
}

export default Maker;