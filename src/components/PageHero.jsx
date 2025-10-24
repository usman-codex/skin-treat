// src/components/PageHero.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './PageHero.css';

const PageHero = ({
  backgroundImage,
  heading,
  subheading,
  paragraph,
  buttonText,
  buttonIcon
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className={`page-hero-wrapper ${inView ? 'is-visible' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="page-hero-overlay"></div>
      <Container className="page-hero-content">
        <h1 className="page-hero-heading">{heading}</h1>
        <h2 className="page-hero-subheading">{subheading}</h2>
        <p className="page-hero-paragraph">{paragraph}</p>
        <button className="page-hero-btn">
          {buttonIcon} {buttonText}
        </button>
      </Container>
    </section>
  );
};

export default PageHero;