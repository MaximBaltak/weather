import React from 'react';
import styles from './MainPage.module.scss'
import cursorButton from './../../img/cursor/cursorButton.png'
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
            <button className={styles.gps}><img src={cursorButton} alt="cursor"/>Моё местоположение</button>
        </div>
    );
};

export default MainPage;
