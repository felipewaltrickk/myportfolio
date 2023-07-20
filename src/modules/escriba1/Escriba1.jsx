import React from 'react';
import styles from './Escriba1.module.css';
import escriba1Mockup from '../../assets/img/mockupsprojects/mockupescribaops.png';

export const Escriba1 = () => {
    return (
        <div className={styles.Escriba1Container}>
            <div className={styles.Escriba1Left}>
                <div className={styles.ProductInfo}>
                    <h3>Escriba's Design System</h3>
                    <strong>UX/UI Designer - Ops</strong>
                    <p>The brand style of Escriba's products. The style guide developed by me, encompassing all the behaviors used in the features of the modules.</p>
                    <button className={styles.OutlinedButton}>View project</button>
                </div>
            </div>
            <div className={styles.Escriba1Right}>
                <img src={escriba1Mockup} alt="Mockup" />
            </div>
        </div>
    );
};
