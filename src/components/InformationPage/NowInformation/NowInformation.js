import React from 'react';
import styles from "./NowInformation.module.scss";
import clear from "../../../img/icon/nightClear.png";

const NowInformation = () => {
    return (
        <>
        <div className={styles.weather}>
                <p className={styles.title}>Ясно</p>
                <div className={styles.wap}>
                    <img src={clear} alt="icon"/>
                    <p className={styles.value}>19°</p>
                </div>
            </div>
        <div className={styles.information}>
            <div className={styles.container}>
                <h3>Ветер</h3>
                <p>5 м/c, западный</p>
            </div>
            <div className={styles.container}>
                <h3>Давление</h3>
                <p>752 мм рт. ст.</p>
            </div>
            <div className={styles.container}>
                <h3>Влажность</h3>
                <p>60%</p>
            </div>
            <div className={styles.container}>
                <h3>Вероятность дождя</h3>
                <p>10%</p>
            </div>
        </div>
        </>
    )
};

export default NowInformation;
