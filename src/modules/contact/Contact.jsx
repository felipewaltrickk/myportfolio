import React from 'react'
import styles from './Contact.module.css'
import imgLogoFooter from '../../assets/img/mylogo.png'
<script src="https://kit.fontawesome.com/c4254e24a8.js"></script>


export
    const Contact = () => {
        return (
            <div className={styles.ContactContainer}>
                <footer>
                    <hr />
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <img src={imgLogoFooter} alt="" className={styles.LogosImg} />
                            <p>Thank you for visiting my portfolio website. I hope you found inspiration and insights into <br />
                                my approach to creating meaningful user experiences. I appreciate your time and interest in my work. <br />
                            </p>
                            <br />
                            <p className={styles.copyright}>All rights reserved © to Felipe Waltrick - 2023</p>
                        </div>
                        <div className={styles.col}>
                            <h3>Based in <div className={styles.underline}><span></span></div></h3>
                            <p>Brazil</p>
                            <p>Curitiba, Paraná</p>
                            <p>Working from home</p>
                            <p className={styles.emailId}>waltrick.contato@gmail.com</p>
                            <h4>+ 55 (41) 98759-4021</h4>
                        </div>
                        <div className={styles.col}>
                            <h3>Navigate <div className={styles.underline}><span></span></div></h3>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Experience</a></li>
                                <li><a href="">About Me</a></li>
                                <li><a href="">Recomendations</a></li>
                                <li><a href="">Projects</a></li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                            <h3>Wanna hear from me? <div className={styles.underline}><span></span></div></h3>
                            <form className={styles.Form}>
                                <div className={styles.group}>
                                    <input type="text" className={styles.Input} required />
                                    <span className={styles.highlight}></span>
                                    <span className={styles.bar}></span>
                                    <label className={styles.Label}>Email</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
