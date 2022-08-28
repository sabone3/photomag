import React from 'react'
import styles from './Cards.module.scss'
import doki from '../../assets/img/doki.png'
import photoprint from '../../assets/img/photoprint.jpg'
import rest from '../../assets/img/rest.jpg'

const Cards = () => (
  <div className={styles.cards}>

    <div className={styles.title}><h1>Наши Услуги</h1></div>

    <div className={styles.postwrap}>

      <div className={styles.postitem}>
        <div className={styles.postitemwrap}>
          <a href="" class="post-link">
            <img src={doki} height='440px' />
            <div className={styles.postinfo}>
              <h3 className={styles.posttitle}>Фото на доки</h3>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.postitem}>
        <div className={styles.postitemwrap}>
          <a href="" class="post-link">
            <img src={photoprint} height='440px' />
            <div className={styles.postinfo}>
              <h3 className={styles.posttitle}>Печать фотографий</h3>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.postitem}>
        <div className={styles.postitemwrap}>
          <a href="" class="post-link">
            <img src="https://html5book.ru/wp-content/uploads/2017/06/blue-image-3.jpg"></img>
            <div className={styles.postinfo}>
              <h3 className={styles.posttitle}>Лазерная печать вплоть до А3</h3>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.postitem}>
        <div className={styles.postitemwrap}>
          <a href="" class="post-link">
            <img src={rest} height='440px' />
            <div className={styles.postinfo}>
              <h3 className={styles.posttitle}>Реставрация фотографий</h3>
            </div>
          </a>
        </div>
      </div>

    </div>
  </div>
)

export default Cards