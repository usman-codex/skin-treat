
import React from 'react';
import award1 from '../assets/award-1.jpg';
import award2 from '../assets/award-2.jpg';
import './AwardsSection.css';

const AwardsSection = () => {
  
  const awardImages = [award1, award2, award1, award2, award1];
  
  const duplicatedAwards = [...awardImages, ...awardImages];

  return (
    <section className="awards-section-wrapper">
      <h2 className="awards-heading text-center">
        Awards and Certifications that reflect our commitment
      </h2>
      
      <div className="scroller">
        <ul className="scroller-inner">
          {duplicatedAwards.map((award, index) => (
            <li key={index}>
              <img src={award} alt={`Award badge ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AwardsSection;