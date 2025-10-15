
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './LatestAwardSection.css';

import awardBanner1 from '../assets/award-banner-1.png';
import awardBanner2 from '../assets/award-banner-2.png';

const awardImages = [awardBanner1, awardBanner2];

const LatestAwardSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % awardImages.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="latest-award-wrapper">
      <Container>
        <h2 className="award-main-heading">
          Our Latest & Newly Achieved Award
        </h2>
        <div className="award-slider-container">
          {awardImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Award banner ${index + 1}`}
              className={`award-image ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LatestAwardSection;