import React from "react";
import styles from './Header.module.scss'
import logoImage from '../../assets/img/logo.svg'

const Header = () => {
 return (
 <div className={styles.header}>
    <div className={styles.logo}>
        <img src={logoImage} alt="" height='60'/>
    </div>
    <div className={styles.wrapper}>
        <div className={styles.buttons}>
            <button className={styles['header-button']}>Услуги</button>
            <button className={styles['header-button']}>Преимущества</button>
            <button className={styles['header-button']}>Прайс-лист</button>
            <button className={styles['header-button']}>Контакты</button>

        </div>
    </div>
 </div>
 )
}

export default Header;
