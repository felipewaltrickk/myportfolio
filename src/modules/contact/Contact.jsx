import React from 'react';
import styles from './Contact.module.css';
import imgLogoFooter from '../../assets/img/mylogo.png';

export const Contact = () => {
    return (
        <div className={styles.ContactContainer}>
            <footer>
                <hr style={{ width: '100%' }} />
                <div className={styles.row}>
                    <div className={styles.col}>
                        <img src={imgLogoFooter} alt="" className={styles.LogosImg} />
                        <br />
                        <p className={styles.copyright}>
                            Designed and developed by Felipe Waltrick
                        </p>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.centered}>
                            <p className={styles.centeredText}>Copyright © 2023</p>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <p className={styles.contactInfo}>
                            waltrick.contato@gmail.com <br /> 41 98759-4021
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};