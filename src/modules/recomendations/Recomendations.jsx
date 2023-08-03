import React, { useEffect, useState } from 'react'
import styles from './Recomendations.module.css'
import recomendation1 from '../../assets/img/recomendations/alexandre.png'
import imgElipse from '../../assets/img/recomendations/elipse.svg'
import imgCorrectIcon from '../../assets/img/icon.png'
import imgReviewer1 from '../../assets/img/reviewer1.png'
import imgReviewer2 from '../../assets/img/reviewer2.png'
import imgReviewer3 from '../../assets/img/reviewer3.png'
import imgReviewer4 from '../../assets/img/reviewer4.png'
import imgReviewer5 from '../../assets/img/reviewer5.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export const Recomendations = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        window.addEventListener("touchmove", handleScroll, { passive: false });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("touchmove", handleScroll, { passive: false });
        };
    }, []);

    function handleScroll() {
        const scrollPosition = window.scrollY / 20;
        setRotation(scrollPosition);
        console.log(scrollPosition);
    }
    return (
        <div className={styles.RecomendationsContainer}>
            <div className={styles.OpinionsContainer}>
                <div className={styles.OpinionsContainerTitles}>
                    <div>
                        <h2>HONEST FEEDBACK</h2>
                        <p>See what clients and <br/> coworkers have to say about me</p>
                    </div>
                    <div className={styles.OpinionsTestimonials}>
                        <img src={imgReviewer1} alt="" />
                        <img src={imgReviewer2}  alt="" />
                        <img src={imgReviewer3}  alt="" />
                        <img src={imgReviewer4}  alt="" />
                        <img src={imgReviewer5}  alt="" />
                        <p>See all testimonials</p>
                    </div>
                    <div className={styles.ExperienceProjects}>
                        <div>
                            <img src={imgCorrectIcon} alt="" />
                            <span>Over 30 freelance projects</span>
                        </div>
                        <div>
                            <img src={imgCorrectIcon} alt="" />
                            <span>Collaborative projects with developers</span>
                        </div>
                        <div>
                            <img src={imgCorrectIcon} alt="" />
                            <span>International experience</span>
                        </div>
                        <div>
                            <img src={imgCorrectIcon} alt="" />
                            <span>Big companies projects experience</span>
                        </div>
                        <div>
                            <img src={imgCorrectIcon} alt="" />
                            <span>User centered approach</span>
                        </div>
                    </div>
                </div>
                <Swiper navigation={true} modules={[Navigation]}>
                    <SwiperSlide className={styles.swipperButton}>
                        <div className={styles.RecomendationsCaroussel}>
                            <p>"Felipe worked with me at Escriba for almost 2 years. He was a guy who managed to produce a large volume of screens
                                in a short amount of time. I remember he joined the project with an impossible mission - the development was behind
                                schedule, and we urgently needed a designer to set the pace and provide inputs. With the shortest possible deadline,
                                Felipe managed to create a design system and guide the development through sprints. I can't fail to mention the quality
                                of the design Felipe created for Escriba's products. Many clients praised and noticed how the system evolved significantly
                                in terms of intuitiveness and speed. When Felipe left, his absence was deeply felt in the project, and to this day,
                                the entire design and development team still uses what he built".
                            </p>
                            <div className={styles.RecomendationsInfo}>
                                <img src={recomendation1} alt="" className={styles.ImgPessoa} />
                                <div  className={styles.RecomendationsInfoReviewer}>
                                    <strong>
                                        Alexandre Serapio
                                    </strong>
                                    <small>
                                        Supervisor de UX/UI da Escriba
                                    </small>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.RecomendationsCaroussel}>
                            <p>"Felipe worked with me at Escriba for almost 2 years. He was a guy who managed to produce a large volume of screens
                                in a short amount of time. I remember he joined the project with an impossible mission - the development was behind
                                schedule, and we urgently needed a designer to set the pace and provide inputs. With the shortest possible deadline,
                                Felipe managed to create a design system and guide the development through sprints. I can't fail to mention the quality
                                of the design Felipe created for Escriba's products. Many clients praised and noticed how the system evolved significantly
                                in terms of intuitiveness and speed. When Felipe left, his absence was deeply felt in the project, and to this day,
                                the entire design and development team still uses what he built".
                            </p>
                            <div className={styles.RecomendationsInfo}>
                                <img src={recomendation1} alt="" className={styles.ImgPessoa} />
                                <div  className={styles.RecomendationsInfoReviewer}>
                                    <strong>
                                        Alexandre Serapio
                                    </strong>
                                    <small>
                                        Supervisor de UX/UI da Escriba
                                    </small>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.RecomendationsCaroussel}>
                            <p>"Felipe worked with me at Escriba for almost 2 years. He was a guy who managed to produce a large volume of screens
                                in a short amount of time. I remember he joined the project with an impossible mission - the development was behind
                                schedule, and we urgently needed a designer to set the pace and provide inputs. With the shortest possible deadline,
                                Felipe managed to create a design system and guide the development through sprints. I can't fail to mention the quality
                                of the design Felipe created for Escriba's products. Many clients praised and noticed how the system evolved significantly
                                in terms of intuitiveness and speed. When Felipe left, his absence was deeply felt in the project, and to this day,
                                the entire design and development team still uses what he built".
                            </p>
                            <div className={styles.RecomendationsInfo}>
                                <img src={recomendation1} alt="" className={styles.ImgPessoa} />
                                <div  className={styles.RecomendationsInfoReviewer}>
                                    <strong>
                                        Alexandre Serapio
                                    </strong>
                                    <small>
                                        Supervisor de UX/UI da Escriba
                                    </small>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    </Swiper>
                </div>
            <div className={styles.RecomendationsInsideCard}>
                <div className={styles.RecomendationsExperienceLeft}>
                    <strong>FROM VISION TO MILLIONS</strong>
                    <h2>Thousands of users empowered by the products I helped to build
                    </h2>
                    <p>I am versatile in working with all sorts of frameworks and applications, including Native iOS and Android design, as well as WPA.
                    </p>
                </div>
                <div>
                    <p style={{zIndex:100}}>4+ <br/> Years of design and tech experience</p>
                    <div className={styles.imgRotate} style={{ transform: `rotate(${rotation}deg)` }} >
                        <img src={imgElipse} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
