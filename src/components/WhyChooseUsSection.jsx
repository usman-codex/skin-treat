
import React from 'react';
import { Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './WhyChooseUsSection.css';
import { FaDiamond } from 'react-icons/fa6'; 

const listItems = [
  "Elite doctors recognized worldwide in aesthetics, longevity, surgery, dentistry, and advanced gynecology",
  "Scientific longevity therapies for vitality, micronutrient balance, and weight management",
  "Certified therapists ensuring comfort, care, and results",
  "Comprehensive treatments under one roof – from aesthetics to plastic surgery, dental, and gynecology",
  "High-end technology – only the latest FDA- and CE-approved devices for safe, effective outcomes",
  "Internationally awarded for medical excellence",
  "Five-star experience with skyline views and personalized care",
  "Enjoy the easiest access to the clinic from any point in Dubai"
];

const WhyChooseUsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="why-choose-us-wrapper">
      <Container>
        <div className="text-center">
          <h2 className="why-us-heading">
            Why Patients Choose EDEN Clinic Dubai ?
          </h2>
          
          <ul ref={ref} className="why-us-list">
            {listItems.map((item, index) => (
              <li 
                key={index} 
                className={`why-us-list-item ${inView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }} 
              >
                <span className="bullet-icon"><FaDiamond /></span>
                {item}
              </li>
            ))}
          </ul>
          
          <p className="why-us-conclusion">
            At EDEN, treatments go beyond beauty. Lives are transformed with science, artistry, and heart.
          </p>

          <button className="why-us-button">
            BOOK YOUR FREE CONSULTATION
          </button>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;