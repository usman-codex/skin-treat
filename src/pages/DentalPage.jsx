// src/pages/DentalPage.jsx

import React from 'react';
import DentalHero from '../components/DentalHero.jsx';
import DentalIntro from '../components/DentalIntro.jsx';
import SmileGallery from '../components/SmileGallery.jsx';

const DentalPage = () => {
  return (
    <>
      <DentalHero />
      <DentalIntro />
      <SmileGallery />
    </>
  );
};

export default DentalPage;