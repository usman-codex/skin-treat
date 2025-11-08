// src/pages/HomePage.jsx

import React from 'react';

// Homepage ke saare sections import karein
import HeroSection from '../components/HeroSection.jsx';
import ServicesSlider from '../components/ServicesSlider.jsx';
import PremiumDestinationSection from '../components/PremiumDestinationSection.jsx';
import AwardsSection from '../components/AwardsSection.jsx';
import LatestAwardSection from '../components/LatestAwardSection.jsx';
import TeamSection from '../components/TeamSection.jsx';
import DesignedForYouSection from '../components/DesignedForYouSection.jsx';
import GallerySection from '../components/GallerySection.jsx';
import ShapingBeautySection from '../components/ShapingBeautySection.jsx';
import WhyChooseUsSection from '../components/WhyChooseUsSection.jsx';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSlider />
      <PremiumDestinationSection />
      <AwardsSection />
      <LatestAwardSection />
      <TeamSection />
      <DesignedForYouSection />
      <GallerySection />
      <ShapingBeautySection />
      <WhyChooseUsSection />
    </>
  );
};

export default HomePage;