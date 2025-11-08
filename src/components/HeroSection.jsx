
import React from 'react';
import HeroVideo from '../assets/skin-treat-hero.mp4';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" src={HeroVideo} autoPlay loop muted />
    </div>
  );
};

export default HeroSection;