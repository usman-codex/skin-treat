// src/components/DentalHero.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt } from 'react-icons/fa';
import './DentalHero.css';

const DentalHero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const heading = "Dental Services".split(" ");
  const p1 = "Transforming smiles, transforming lives.".split(" ");
  const p2 = "Let us be a part of your journey to a confident and radiant you.".split(" ");

  return (
    <section ref={ref} className={`dental-hero-wrapper ${inView ? 'is-visible' : ''}`}>
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col lg={6}>
            <div className="dental-hero-content">
              <h1 className="dental-hero-heading">
                {heading.map((word, index) => (
                  <span key={index} style={{ transitionDelay: `${index * 0.08}s` }}>{word}&nbsp;</span>
                ))}
              </h1>
              <p className="dental-hero-p">
                {p1.map((word, index) => (
                  <span key={index} style={{ transitionDelay: `${(heading.length + index) * 0.06}s` }}>{word}&nbsp;</span>
                ))}
              </p>
              <p className="dental-hero-p">
                {p2.map((word, index) => (
                  <span key={index} style={{ transitionDelay: `${(heading.length + p1.length + index) * 0.05}s` }}>{word}&nbsp;</span>
                ))}
              </p>
              <button className="dental-hero-btn" style={{ transitionDelay: `${(heading.length + p1.length + p2.length) * 0.05}s` }}>
                <FaCalendarAlt /> Book Online
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DentalHero;