import React from 'react'
import styles from './Recomendations.module.css'
import recomendation1 from '../../assets/img/recomendations/alexandre.png'
import backgroundRadialEffect from '../../assets/img/elipse.png'

export const Recomendations = () => {
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
                    <strong>READY TO START?</strong>
                    <h2>Thousands of people <br />
                        have used the <br />
                        products I helped <br />
                        to build
                    </h2>
                    <p>I can work with all sorts of frameworks and applications. I am <br />
                        Versatile in working on diverse types of digital products, such <br />
                        as Native IOS apps, Native Android apps design and WPA.
                    </p>
                </div>
            </div>
        </div>
    )
}
