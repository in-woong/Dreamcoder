import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from "../editor/editor";
import Preview from "../preview/preview"
import styles from "./maker.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react/cjs/react.development';


const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: "1",
            name: "Ellie1",
            company: "Samsung",
            theme: "dark",
            title: "Software Engineer",
            email: "ellie@gmail.com",
            message: "go for it",
            fileNmae: "ellie",
            fileURL: "",
        },
        {
            id: "2",
            name: "Ellie2",
            company: "Samsung",
            theme: "colorful",
            title: "Software Engineer",
            email: "ellie@gmail.com",
            message: "go for it",
            fileNmae: "ellie",
            fileURL: "",
        },
        {
            id: "3",
            name: "Ellie3",
            company: "Samsung",
            theme: "light",
            title: "Software Engineer",
            email: "ellie@gmail.com",
            message: "go for it",
            fileNmae: "ellie",
            fileURL: "",
        },
    ]);
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
                <Editor cards={cards} />
                <Preview cards={cards} />
            </section>

            <Footer />
        </section>

    )
}

export default Maker;