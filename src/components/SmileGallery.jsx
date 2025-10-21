// src/components/SmileGallery.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactCompareImage from 'react-compare-image';
import { FaCalendarAlt } from 'react-icons/fa';
import './SmileGallery.css';

import beforeImg from '../assets/before-smile.jpg';
import afterImg from '../assets/after-smile.jpg';

const SmileGallery = () => {
  return (
    <section className="smile-gallery-wrapper">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="smile-text-col">
            <h2 className="smile-heading">
              A Beautiful Smile is Just a Visit Away
            </h2>
            <p className="smile-paragraph">
              Our smile gallery showcases the amazing transformations we've accomplished for our patients, highlighting the power of a beautiful smile. From whitening to orthodontics, we offer a range of tailored solutions to help you achieve your dream smile. Explore our gallery and discover how we can help you transform your smile today!
            </p>
            <button className="smile-button">
              <FaCalendarAlt /> Book Online
            </button>
          </Col>

          <Col lg={7}>
            <div className="image-compare-container">
              <ReactCompareImage leftImage={beforeImg} rightImage={afterImg} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SmileGallery;