// src/components/FutureOfHealth.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './FutureOfHealth.css';
import healthImage from '../assets/personalized-health.jpg';

const FutureOfHealth = () => {
  return (
    <section className="future-health-wrapper">
      <Container>
        <div className="text-center">
          <h2 className="future-health-heading">Welcome to the Future of Personalized Health</h2>
          <p className="future-health-subheading">
            Are you ready to discover new facets of your identity and gain a deeper understanding of who you are? A DNA test can reveal surprising traits and ancestral origins.
          </p>
        </div>

        <Row className="align-items-center mt-5">
          <Col md={6}>
            <div className="info-box">
              <FaArrowLeft className="arrow-icon left-arrow" />
              <p>
                Interested in chronic health issue causes, like migraines or allergies? DNA analysis reveals genetic factors for personalized treatment plans.
              </p>
              <FaArrowRight className="arrow-icon right-arrow" />
            </div>
          </Col>
          <Col md={6}>
            <div className="image-box">
              <img src={healthImage} alt="Doctor consulting a patient" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FutureOfHealth;