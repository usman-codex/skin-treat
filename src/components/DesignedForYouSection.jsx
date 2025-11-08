
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './DesignedForYouSection.css';
import clinicInteriorImage from '../assets/clinic-interior.png';

const DesignedForYouSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="designed-section-wrapper">
      <Container>
        <Row className="align-items-center">
         
          <Col lg={6}>
            <div className="clinic-image-container">
              <img src={clinicInteriorImage} alt="Clinic Interior" className="clinic-image" />
            </div>
          </Col>

          
          <Col lg={6}>
            <div ref={ref} className={`text-content-container ${inView ? 'visible' : ''}`}>
              <h2 className="designed-heading">
                A Clinic Designed Around You
              </h2>
              <p className="designed-paragraph">
                <strong>SKIN TREAT™</strong> is more than a treatment center – it's a state-of-the-art medical sanctuary.
              </p>
              <p className="designed-paragraph">
                Contemporary architecture, luxurious interiors, and skyline views set the stage. From welcoming lounges to discreet treatment suites and complimentary valet parking, every detail is designed for your comfort and privacy.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DesignedForYouSection;