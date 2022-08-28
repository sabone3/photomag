import React from "react";
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>г. Омск, ул. Гусарова, 37</li>
                <li>ПН–СБ: 9.00–18.00; ВС: 10.00–18.00;</li>
                <li>Email: mphototorg@gmail.com</li>
                <li>Email: mphoto.z@bk.ru</li>
                <li>Телефон: +7-903-927-45-34</li>
            </ul>
        </footer>
    )
}

export default Footer;