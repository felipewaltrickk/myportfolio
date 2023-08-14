import React from 'react'
import styles from './Aboutme.module.css'
import imageFernando from '../../assets/img/img-pessoal.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const AboutMe = () => {
  return (
    <div className={styles.AboutMeContainer}>
      <div className={styles.AboutMeLeft}>
        <img src={imageFernando} alt="" />
      </div>
      <div className={styles.AboutMeRight}>
        <h2>Over 400 <br />
          designs created</h2>
        <p>
          Welcome to the new era! I'm a restless professional passionate about creating incredible experiences in the virtual
          world. Imagine a world without borders, where creativity soars high and ideas are free to take flight. It is in
          this space of endless possibilities that I find myself. If you're looking for an extraordinary professional who
          isn't afraid to dream big and think outside the box, then you've come to the right place!
          <br />
          <br />
          Step into the atelier of an avant-garde UX/UI designer, where design isn't just a skill, but a way of life.
          I am driven by the belief that every pixel tells a story, and every interaction shapes an experience. 
          My approach is a marriage of art and science, meticulously tailored to evoke emotions and simplify complexities. 
          With an unwavering commitment to user-centered design, I'm your partner in creating digital narratives that resonate deeply.
          Let's challenge the status quo, elevate your brand, and unveil a world of design that captivates, inspires, and leaves an indelible mark.
        </p>
        <div className={styles.ButtonContainer}>
          <button className={styles.BlueButton}>Download CV</button>
          <button className={styles.OutlinedButton}>Get in touch</button>
        </div>
      </div>
    </div>
  )
}


