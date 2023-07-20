import React, { useState, useEffect } from 'react'
import styles from './hero.module.css'
import { motion } from 'framer-motion'

export const Hero = () => {
  const [isEn, setIsEn] = useState(true);
  const roles = [
    { text: 'Product Designer', color: '#467EE7' },
    { text: 'UX/UI Designer', color: '#6632CB' },
    { text: 'Frontend Enthusiast', color: '#61FF71' },
    { text: 'Software Engineer', color: '#FFEB33' },
    { text: 'Product Designer', color: '#467EE7' },
    { text: 'UX/UI Designer', color: '#6632CB' },
    { text: 'Frontend Enthusiast', color: '#61FF71' },
    { text: 'Software Engineer', color: '#FFEB33' },
  ];
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={styles.heroContainer}>
      <div className={styles.language}>
        <div className={styles.selectedLanguage}>
          {isEn ? '🇺🇸 en' : '🇧🇷 pt'}
        </div>
        <div className={styles.deselectedLanguage} onClick={() => setIsEn(!isEn)}>
          {!isEn ? 'en' : 'pt'}
        </div>
      </div>
      <div className={styles.mainContent}>
        <small>
          The official portfolio and artwork of
        </small>
        <h1>
          <span className={styles.rolesWrap}>
            Waltrick is a
            <div
              className={styles.rolesContent}
              animate={{ y: -scrollPosition / 1.2 }}
            >
              {
                roles.map((item, key) => {
                  return (
                    <motion.p
                      key={`roles-${key}`}
                      animate={{ y: -scrollPosition / 1.2 }}
                      style={{ margin: 0, color: item.color }}
                    >
                      {item.text}
                    </motion.p>
                  )
                })
              }
            </div >
          </span>
          merging art and technology to<br />
          craft stunning digital products
        </h1>
        <div className={styles.divider}></div>
        <p>
          Hello there! I'm a Product Designer based in Brazil <br />
          currently working for <span>@Bradesco</span>. I help my clients <br />
          turn their ideas into products people love to use.
        </p>
      </div>
      <a className={styles.Scroll} href='#experiences'>
        <div className={styles.Wheel}>
        </div>
      </a>
    </div>
  )
}
