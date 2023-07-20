import React from 'react';
import styles from './Bradesco2.module.css';
import bradesco2Mockup from '../../assets/img/mockupsprojects/mockupleitorscanner.png';

export const Bradesco2 = () => {
    return (
        <div className={styles.Bradesco2Container}>
            <div className={styles.Bradesco2Left}>
                <div className={styles.ProductInfo}>
                    <h3>Bradesco's app barcode / QR code scanner</h3>
                    <strong>Product Designer - UX/UI</strong>
                    <p>Development of a camera scanner that captures barcodes and QR codes for bill payments in the Bradesco Empresas e Negócios app.</p>
                    <button className={styles.OutlinedButton}>View project</button>
                </div>
            </div>
            <div className={styles.Bradesco2Right}>
                <img src={bradesco2Mockup} alt="Mockup" />
            </div>
        </div>
    );
};
