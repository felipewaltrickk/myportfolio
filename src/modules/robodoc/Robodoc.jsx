import React from 'react';
import styles from './Robodoc.module.css';
import robodocMockup from '../../assets/img/mockupsprojects/mockuprobodoc.png';

export const Robodoc = () => {
    return (
        <div className={styles.RobodocContainer}>
            <div className={styles.RobodocLeft}>
                <div className={styles.ProductInfo}>
                    <h3>Robodoc</h3>
                    <strong>UX/UI Designer</strong>
                    <p>An application that streamlines the entry
                        of vital signs from hospitalized patients
                        directly at the bedside, replacing
                        handwritten medical records.</p>
                    <button className={styles.OutlinedButton}>View project</button>
                </div>
            </div>
            <div className={styles.RobodocRight}>
                <img src={robodocMockup} alt="Mockup" />
            </div>
        </div>
    );
};
