// src/pages/DentalPage.jsx

import React from 'react';
import DentalHero from '../components/DentalHero.jsx';
import DentalIntro from '../components/DentalIntro.jsx';
import SmileGallery from '../components/SmileGallery.jsx';
import DentalServicesGrid from '../components/DentalServicesGrid.jsx';
import TestimonialSlider from '../components/TestimonialSlider.jsx';
import DentalTeam from '../components/DentalTeam.jsx';

const DentalPage = () => {
  return (
    <>
      <DentalHero />
      <DentalIntro />
      <SmileGallery />
      <DentalServicesGrid />
      <TestimonialSlider />
      <DentalTeam />
    </>
  );
};

export default DentalPage;