// src/components/DnaSpecialist.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import './DnaSpecialist.css';
import docImage from '../assets/dr-ann.jpg';

const DnaSpecialist = () => {
  return (
    <section className="dna-specialist-wrapper">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="specialist-profile-card">
              <img src={docImage} alt="Dr. Ann Tsanava" className="specialist-image" />
              <div className="specialist-info">
                <h3>Dr. Ann Tsanava</h3>
                <p>General Practitioner</p>
                <p>Live from Austria</p>
                <p>Genetic counselor for personalized medicine</p>
                <p>Email: dr.tsanava@genetics.ae</p>
                <p>Languages: EN, DE, RU</p>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="specialist-details">
              <h4>DNA Analysis Insights Report: Connecting Dubai with Knowledge from Austria and Europe</h4>
              <p>Dr. Tsanava is a highly accomplished physician with extensive experience at leading hospitals throughout Austria. She earned her medical degree from the renowned Medical University of Vienna and has since built a remarkable academic background, proficiency, and network within her field.</p>
              <p>Through her passion for genetic research and preventive medicine, Dr. Tsanava strives to provide her patients with the highest quality of care. She recognizes the value of addressing potential health concerns before they develop into serious conditions, and is dedicated to helping her patients achieve and maintain optimal health and wellness.</p>
              <p><strong>To streamline the process</strong>, Dr. Tsanava offers consultations with her patients <strong>through a telemedicine video conference</strong> platform. This method enables patients to effortlessly access her expertise from the comfort of their own homes or our clinic. As a result, <strong>patients find it easier to comprehend their DNA analysis reports</strong> and obtain tailored recommendations to enhance their health.</p>
              <p>Dr. Tsanava offers incredible benefits to each patient for a <strong>better, healthier, and longer life</strong>.</p>
              <p>We at EDEN AESTHETICS Clinic are truly honored to have one of the best European specialists by our side as a supporter and valuable advisor.</p>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <button className="specialist-book-btn">
            <FaCalendarAlt /> DNA Test Online Booking
          </button>
        </div>
      </Container>
    </section>
  );
};

export default DnaSpecialist;