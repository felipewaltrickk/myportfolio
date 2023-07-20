import React from 'react';
import styles from './Bradesco1.module.css';
import bradesco1Mockup from '../../assets/img/mockupsprojects/mockupabrirpdf.png';

export const Bradesco1 = () => {
    return (
        <div className={styles.Bradesco1Container}>
            <div className={styles.Bradesco1Left}>
                <div className={styles.ProductInfo}>
                    <h3>Bradesco's app PDF Reader</h3>
                    <strong>Product Designer - UX/UI</strong>
                    <p>Implementation of the barcode scanning journey through the new PDF file reader feature in the Bradesco Empresas e Negócios app.</p>
                    <button className={styles.OutlinedButton}>View project</button>
                </div>
            </div>
            <div className={styles.Bradesco1Right}>
                <img src={bradesco1Mockup} alt="Mockup" className={styles.MockupImg} />
            </div>
        </div>
    );
};
