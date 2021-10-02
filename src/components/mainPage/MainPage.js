import React from 'react';
import styles from './MainPage.module.scss'
const MainPage = () => {
    return (
        <div className={styles.main}>
            <label className={styles.title} htmlFor="cities">Выберите город:</label>
            <input className={styles.search} type="text" list='cities'/>
            <datalist id='cities'>
                <option value="Москва"/>
                <option value="Калининград"/>
                <option value="Санкт-Петербург"/>
                <option value="Смоленск"/>
            </datalist>
            <div className={styles.wap}>
                <hr/>
                <button>ОК</button>
            </div>
            <p className={styles.p}>или</p>
            <button className={styles.gps}>
                <svg viewBox="0 0 30 30" >
                    <path d="M9.79351 21.2859L0.000110885 19.594L18.6905 4.29481L18.0054 29.82L9.79351 21.2859Z" />
                </svg>
                Моё местоположение</button>
        </div>
    );
};

export default MainPage;
