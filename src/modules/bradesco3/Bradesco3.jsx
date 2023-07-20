import React from 'react';
import styles from './Bradesco3.module.css';
import bradesco3Mockup from '../../assets/img/mockupsprojects/mockupjornadapgtos.png';

export const Bradesco3 = () => {
    return (
        <div className={styles.Bradesco3Container}>
            <div className={styles.Bradesco3Left}>
                <div className={styles.ProductInfo}>
                    <h3>Bradesco's app payments feature</h3>
                    <strong>Product Designer - UX/UI</strong>
                    <p>Development of the complete payment journey, including invoices, utility bills, taxes and PIX, with different input methods and formats. Also contemplating camera scanners and PDF reader.</p>
                    <button className={styles.OutlinedButton}>View project</button>
                </div>
            </div>
            <div className={styles.Bradesco3Right}>
                <img src={bradesco3Mockup} alt="Mockup" />
            </div>
        </div>
    );
};
