import React, { useState } from 'react'
import styles from './Experiences.module.css'
import setinha from '../../assets/img/setinha.png'
import bradescoDefaultLogo from '../../assets/img/logos/bradesco-cinza.png'
import bradescoColoredLogo from '../../assets/img/logos/bradesco-branco.png'
import escribaDefaultLogo from '../../assets/img/logos/escriba-cinza.png'
import escribaColoredLogo from '../../assets/img/logos/escriba-colorido.png'
import crdcDefaultLogo from '../../assets/img/logos/crdc-cinza.png'
import crdcColoredLogo from '../../assets/img/logos/crdc-colorido.png'
import neoConsigDefaultLogo from '../../assets/img/logos/neoconsig-cinza.png'
import neoConsigColoredLogo from '../../assets/img/logos/neoconsig-colorido.png'
import saasTecDefaultLogo from '../../assets/img/logos/saastec-cinza.png'
import saasTecColoredLogo from '../../assets/img/logos/saastec-colorido.png'
import theBridgeDefaultLogo from '../../assets/img/logos/thebridge-cinza.png'
import theBridgeColoredLogo from '../../assets/img/logos/thebridge-colorido.png'
import mxnTechDefaultLogo from '../../assets/img/logos/mxntech-cinza.png'
import mxnTechColoredLogo from '../../assets/img/logos/mxntech-colorido.png'
import tradeNaMaoDefaultLogo from '../../assets/img/logos/tradenamao-cinza.png'
import tradeNaMaoColoredLogo from '../../assets/img/logos/tradenamao-colorido.png'



export const Experiences = () => {
  const companies = [
    { name: 'Bradesco', value: 'bradesco', startDate: 'Aug. 2022', endDate: 'Present', rolePosition: 'Product Designer', jobDescription: 'With the mission to create a new digital channel for the legal audience and replace the Net Empresa application, I worked as a UX/UI Designer and Product Designer in the payments, PIX, and transfers front. I participated in the entire construction and analysis of the user journey through the UX Lean methodology, conceptualizing and creating from wireframes to high-fidelity prototypes. I participated in and conducted usability tests with real users from the MEI and MPE audience, and contributed to decision-making and requirement gathering for these features, from design to follow-up with developers. Additionally, I developed a responsive promotional landing page to advertise the new PDPJ product, using techniques such as TreeJS and Motion Design for interactive mockups. During my journey at Bradesco, I took on leadership roles in different project fronts, leading deliveries that encompassed both the AS IS and the TO BE of the new channel.', defaultLogo: bradescoDefaultLogo, activeLogo: bradescoColoredLogo },
    { name: 'Escriba', value: 'escriba', startDate: 'Mar. 2021', endDate: 'Dec. 2022', rolePosition: 'UX/UI Designer - Design Ops', jobDescription: 'With the challenge of replacing a legacy system in Delphi with a new web platform, I led my design team to maintain a consistent design standard and implement new requirements in the registration modules under development. I created high and low-fidelity prototypes, supervised and collaborated on the production of screens and interaction design for navigable prototypes, working closely with product managers, developers, and scrum masters. At the beginning of the project, I contributed to the standardization of the design system, navigation flow, interaction, and transitions, as well as validating the AS IS and TO BE documentation through wireframes and research.', defaultLogo: escribaDefaultLogo, activeLogo: escribaColoredLogo },
    { name: 'CRDC', value: 'crdc', startDate: 'Mar. 2022', endDate: 'Aug. 2022', rolePosition: 'UX/UI Designer - Design Ops', jobDescription: 'I worked on the development of an MVP for a web platform that simplifies the credit journey for financial agents. As the design frontman, I worked closely with the technical team and the product owner, conceptualizing the platform and producing high-fidelity navigable and functional prototypes. I documented and built a complete design system using the Quasar framework for implementation in Vue.js. I collaborated on responsive design and the creation of sitemaps, user flows, and design thinking best practices. During my involvement in the project, I helped drive the development teams momentum and provided inputs for the initial sprints. I gathered all the requirements for the new platform and divided them into journeys, creating four different modules to accommodate each of the products functionalities.', defaultLogo: crdcDefaultLogo, activeLogo: crdcColoredLogo },
    { name: 'NeoConsig', value: 'neoConsig', startDate: 'Nov. 2021', endDate: 'Mar. 2022', rolePosition: 'UX/UI Designer', jobDescription: 'N Lorem ipsum color dat', defaultLogo: neoConsigDefaultLogo, activeLogo: neoConsigColoredLogo },
    { name: 'SaaSTec', value: 'saasTec', startDate: 'Dec. 2019', endDate: 'Mar. 2021', rolePosition: 'Java FX | Vue.js Frontend Developer', jobDescription: 'Acting in the investigation of the problems that users face in the retail market, I was responsible for user experience design, screen prototyping, wireframes, and sketches in various different projects. I worked closely with the frontend dev team on SaaSReports, where I was responsible for proposing new solutions for the companys reporting application. In the ERP and POS projects, I played a key role in user experience design, redesigning the layout of all reports and receipts in these applications, making them more intuitive, minimalist, attractive, and easy to view. All of this was done in parallel with backend development in Java, where for over a year, I worked on maintenance and feature implementation, and finally, I also managed the PostgreSQL database.', defaultLogo: saasTecDefaultLogo, activeLogo: saasTecColoredLogo },
    { name: 'The Bridge', value: 'theBridge', startDate: 'Aug. 2022', endDate: 'Current job', rolePosition: 'Product Designer', jobDescription: 'T Lorem ipsum color dat', defaultLogo: theBridgeDefaultLogo, activeLogo: theBridgeColoredLogo },
    { name: 'MXNTech', value: 'mxnTech', startDate: 'Aug. 2022', endDate: 'Current job', rolePosition: 'Product Designer', jobDescription: 'M Lorem ipsum color dat', defaultLogo: mxnTechDefaultLogo, activeLogo: mxnTechColoredLogo },
    { name: 'Trade na mão', value: 'tradeNaMao', startDate: 'Mar. 2021', endDate: 'Jul. 2021', rolePosition: 'UX/UI Designer', jobDescription: 'With the mission of developing a Day Trading platform that includes a simulator for the financial market and educational content for students of TnMs courses, I directly work on the visual design of this application. I have been involved since the projects ideation and have been an essential element in the creation of sketches and wireframes, screen prototyping, case studies, and investigation of the needs of users in this niche. Since joining the project, I have actively contributed to providing inputs for the initial sprints of the development team and have developed enough content for analysts to write all the necessary user stories and use cases to keep the project progressing smoothly.', defaultLogo: tradeNaMaoDefaultLogo, activeLogo: tradeNaMaoColoredLogo },
  ]

  const [selectedCompany, setSelectedCompany] = useState(companies[0])

  return (
    <div className={styles.experiencesContainer}>
      <div className={styles.firstRow}>
        <div className={styles.mainTexts}>
          <h2>I design websites, apps <br />
            and products for big or <br />
            small companies up for <br />
            inovative technology</h2>
          <small>These are the companies I have worked with recently:</small>
        </div>
        <div className={styles.setaHolder}>
          <img src={setinha} alt="arrow" />
        </div>
      </div>
      <div className={styles.companies}>
        {companies.map(c =>
          <div className={`${styles.company} ${c.value === selectedCompany.value ? styles[c.value] : ''}`} key={c.value} onClick={() => setSelectedCompany(c)}>
            <img src={c.value === selectedCompany.value ? c.activeLogo : c.defaultLogo} alt="logo" />
          </div>
        )}
      </div>
      <div className={styles.slider}>
        <div className={styles.sliderHeader}>
          <div className={styles.sliderTitle}>
            <strong>{selectedCompany.name}</strong>
            <small>{selectedCompany.startDate} - {selectedCompany.endDate}</small>
          </div>
          <div className={styles.sliderRole}>
            {selectedCompany.rolePosition}
          </div>
        </div>
        <div className={styles.sliderDescription}>
          {selectedCompany.jobDescription}
        </div>
      </div>
    </div>
  )
}
