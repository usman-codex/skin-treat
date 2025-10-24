// src/pages/DnaAnalysisPage.jsx

import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import PageHero from '../components/PageHero.jsx';
import DnaInsights from '../components/DnaInsights.jsx';
import FutureOfHealth from '../components/FutureOfHealth.jsx';
import DnaBenefits from '../components/DnaBenefits.jsx';
import DnaSensors from '../components/DnaSensors.jsx';
import DnaControl from '../components/DnaControl.jsx';
import DnaSpecialist from '../components/DnaSpecialist.jsx';
import dnaHeroBg from '../assets/dna-hero-bg.jpg';

const DnaAnalysisPage = () => {
  return (
    <>
      <PageHero
        backgroundImage={dnaHeroBg}
        heading="DNA Test in Dubai - Genetics Analysis"
        subheading="Your DNA, Your Story - Personalized Genetic Testing in Dubai"
        paragraph="Empower Your Future with Our State-of-the-Art DNA Genetics Analysis. Get targeted weight loss plans, healthier nutrition, and increased performance information. Experience the best DNA test in Dubai, UAE, with detailed ancestry testing."
        buttonText="Book Online Your DNA Test"
        buttonIcon={<FaCalendarAlt />}
        
      />
      <DnaInsights />
      <FutureOfHealth />
        <DnaBenefits />
           <DnaSensors />
           <DnaControl />
           <DnaSpecialist />
    </>
  );
};

export default DnaAnalysisPage;