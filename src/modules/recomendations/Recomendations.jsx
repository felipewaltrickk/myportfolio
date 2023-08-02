import React, { useEffect, useState } from 'react'
import styles from './Recomendations.module.css'
import recomendation1 from '../../assets/img/recomendations/alexandre.png'
import imgElipse from '../../assets/img/recomendations/elipse.svg'

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
            <div className={styles.RecomendationsCaroussel}>
                <h2>
                    Recomendations
                </h2>
                <img src={recomendation1} alt="" className={styles.ImgPessoa} />
                <p>"Felipe worked with me at Escriba for almost 2 years. He was a guy who managed to produce a large volume of screens
                    in a short amount of time. I remember he joined the project with an impossible mission - the development was behind
                    schedule, and we urgently needed a designer to set the pace and provide inputs. With the shortest possible deadline,
                    Felipe managed to create a design system and guide the development through sprints. I can't fail to mention the quality
                    of the design Felipe created for Escriba's products. Many clients praised and noticed how the system evolved significantly
                    in terms of intuitiveness and speed. When Felipe left, his absence was deeply felt in the project, and to this day,
                    the entire design and development team still uses what he built".
                </p>
                <div className={styles.RecomendationsInfo}>
                    <strong>
                        Alexandre Serapio
                    </strong>
                    <small>
                        Supervisor de UX/UI da Escriba
                    </small>
                </div>
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
