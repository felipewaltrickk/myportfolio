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
          For me, life is too short for limitations and boring bureaucracies. My passion lies in collaborating with clients
          that share the vision of exploring the unexplored, embracing the unknown, and being willing to create truly
          revolutionary digital products. I don't settle for the obvious, which is why I'm always seeking challenges that
          push me beyond conventional limits. With me by your side, we can surpass the mundane and achieve the extraordinary.
        </p>
        <div className={styles.ButtonContainer}>
          <button className={styles.BlueButton}>Download CV</button>
          <button className={styles.OutlinedButton}>Get in touch</button>
        </div>
      </div>
    </div>
  )
}


