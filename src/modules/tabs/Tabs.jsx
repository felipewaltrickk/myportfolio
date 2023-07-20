import React from 'react';
import styles from './Tabs.module.css';

export const Tabs = () => {
    return (
        <div className={styles.TabsContainer}>
            <div>
                <h3>Projects</h3>
                <p className={styles.Description}>The good stuff's in here. Feel free to discover my work and if we've spoken already, request access to the locked projects.</p>
                <div className={styles.TabMenu}>
                    <button>All</button>
                    <button>Mobile</button>
                    <button>Desktop</button>
                    <button>Responsive</button>
                    <button>Locked</button>
                </div>
            </div>
        </div>
    );
};