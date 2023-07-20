import React from 'react';
import styles from './Bradesco4.module.css';
import bradesco4Mockup from '../../assets/img/mockupsprojects/mockuplpbra.png';

export const Bradesco4 = () => {
    return (
        <div className={styles.Bradesco4Container}>
            <div className={styles.Bradesco4Left}>
                <div className={styles.ProductInfo}>
                    <h3>Bradesco's app commercial landing page</h3>
                    <strong>Web Designer - UX/UI</strong>
                    <p>With the first MVP (Minimum Viable Product) of the Bradesco Empresas e Negócios app available, I took place in the development of a commercial landing page to promote the new channel.</p>
                    <button className={styles.OutlinedButton}>View project</button>
                </div>
            </div>
            <div className={styles.Bradesco4Right}>
                <img src={bradesco4Mockup} alt="Mockup" />
            </div>
        </div>
    );
};
