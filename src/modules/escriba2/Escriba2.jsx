import React from 'react';
import styles from './Escriba2.module.css';
import escriba2Mockup from '../../assets/img/mockupsprojects/mockupescribadash.png';

export const Escriba2 = () => {
    return (
        <div className={styles.Escriba2Container}>
            <div className={styles.Escriba2Left}>
                <div className={styles.ProductInfo}>
                    <h3>Escriba's Dashboards</h3>
                    <strong>UX/UI Designer</strong>
                    <p>3 dashboards designed for Escriba's modules. One for Assina, one for Cash, and one for the Notas hubs.</p>
                    <button className={styles.OutlinedButton}>View project</button>
                </div>
            </div>
            <div className={styles.Escriba2Right}>
                <img src={escriba2Mockup} alt="Mockup" />
            </div>
        </div>
    );
};
