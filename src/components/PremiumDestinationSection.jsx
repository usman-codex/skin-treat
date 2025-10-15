
import React from 'react';
import { Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer'; 
import './PremiumDestinationSection.css';

const PremiumDestinationSection = () => {
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  return (
    <section className="premium-section-wrapper">
      <Container>
        <div className="text-center">
          <h2 className="section-heading">
            Dubai's Premium Destination for 
            <br />
            Aesthetics & Longevity
          </h2>
          
          
          <p ref={ref} className={`section-paragraph ${inView ? 'is-visible' : ''}`}>
            Welcome to <strong>SKIN TREAT™</strong> – Dubai's leading and award-winning clinic for advanced aesthetic
            medicine, beauty, and longevity. More than just a clinic, TREAT is a sanctuary where world-class expertise,
            scientific innovation, and state-of-the-art design come together – so that you feel safe, confident, and cared
            for.
          </p>

          <button className="section-button">
            Request Information
          </button>
        </div>
      </Container>
    </section>
  );
};

export default PremiumDestinationSection;