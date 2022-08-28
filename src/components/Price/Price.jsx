import React from 'react'
import styles from './Price.module.scss'

const Price = () => (
    <div className={styles.cards}>
        <div className={styles.title}><h1>Прайс</h1></div>
        <div className={styles.postwrap}>

            <div className={styles.postitem}>
                <h3 class="card__heading">
                    Фото и видео
                </h3>
                <div class="card__body">
                    <ul>
                        <li>Документальное фото</li>
                        <li>Печать фотографий</li>
                        <li>Сканирование фото/слайдов</li>
                        <li>Фотокерамика</li>
                        <li>Реставрация фотографий</li>
                        <li>Оцифровка</li>
                        <li>Изготовление фотокниг</li>
                    </ul>
                </div>
                <a className={styles.button} target="_blank" href="https://drive.google.com/file/d/1d_N8G4YWnXCNcR0YLXVJwRaiDk8KRGOu/view?usp=sharing">
                    Посмотреть прайс
                </a>
            </div>

            <div className={styles.postitem}>
                <h3 class="card__heading">
                    Полиграфия
                </h3>
                <div class="card__body">
                    <ul>
                        <li>Услуги по верстке и дизайну</li>
                        <li>Цветная лазерная/струйная печать</li>
                        <li>Визитные карточки (цифровая/офсетная печать)</li>
                        <li>Листовки</li>
                        <li>Наружная печать</li>
                        <li>Тиражирование на ризографе</li>
                        <li>Постпечатные работы</li>
                        <li>Изготовление календарей</li>
                    </ul>
                </div>
                <a className={styles.button} target="_blank" href="https://drive.google.com/file/d/1XmX1jiQuF1Q4H9jxW3EIKfgFl31Ef-2E/view?usp=sharing">
                    Посмотреть прайс
                </a>
            </div>

            <div className={styles.postitem}>
                <h3 class="card__heading">
                    Фотосувениры
                </h3>
                <div class="card__body">
                    <ul>
                        <li>Печать на одежде</li>
                        <li>Печать на кружках</li>
                        <li>Печать на подушках</li>
                        <li>Печать на пазлах</li>
                        <li>Печать на часах</li>
                        <li>Печать на елочных шарах</li>
                        <li>Печать на холсте</li>
                        <li>Изготовление брелоков</li>
                        <li>Изготовление фотомагнитов</li>
                    </ul>
                </div>
                <a className={styles.button} target="_blank" href="https://drive.google.com/file/d/18Au-ua6b6Re9VXPEuap0WRdafGMKJ7p3/view?usp=sharing">
                    Посмотреть прайс
                </a>
            </div>

        </div>
    </div>
)

export default Price