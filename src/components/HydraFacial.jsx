// src/components/HydraFacial.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './HydraFacial.css';

const HydraFacial = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="hydrafacial-wrapper" ref={ref}>
      <div className="top-banner">
        <h1 className={`top-banner-h1 ${inView ? 'is-visible' : ''}`}>HydraFacial Treatments for Your Skin Care</h1>
        <p className={`top-banner-p ${inView ? 'is-visible' : ''}`}>Keep Your Skin Healthy and Glowing!</p>
      </div>
      <Container fluid className="main-content">
        <Row>
          <Col lg={6} className="text-col">
            <div className={`text-content ${inView ? 'is-visible' : ''}`}>
              <h2>HYDRAFACIAL TREATMENT</h2>
              <p className="subtitle">Hydrafacial Is a Technology to Cleanse, Extract, and Hydrate Your Skin.</p>
              <p>The <strong>HydraFacial Treatment</strong> is an innovative procedure that combines <strong>cleansing, exfoliation, extraction, hydration,</strong> and <strong>antioxidant application</strong> to help produce <strong>gleaming, glowing skin</strong>. By combining these actions, the <strong>HydraFacial removes dead skin cells</strong>, extracts dirt and impurities, and hydrates ageing, dull skin. The end result is skin that <strong>looks fresh, renewed</strong>, and <strong>years younger</strong>.</p>
              <ul>
                <li><strong>HydraFacial CLEANSE + PEEL</strong> – bring a new layer of skin to life with relaxing resurfacing and gentle exfoliation</li>
                <li><strong>HydraFacial EXTRACT + HYDRATE</strong> – cleanse the debris from your skin pores using a painless suction. Nourish your skin with intense moisturizers and eliminate dry skin.</li>
                <li><strong>HydraFacial FUSE + PROTECT</strong> – keep your skin surface saturated with peptides and antioxidants to enhance your glow.</li>
              </ul>
              <p>You could be a <strong>good candidate for Hydrafacial</strong> if you have</p>
              <ul>
                <li>Wrinkles and fine lines</li>
                <li>Loss of elasticity and firmness</li>
                <li>Uneven skin tone and texture</li>
                <li>Hyperpigmentation</li>
                <li>Oily / Congested skin</li>
                <li>Large pores</li>
                <li>Advanced aging</li>
              </ul>
              <button className="book-btn">BOOK HERE YOUR HYDRAFACIAL TREATMENT</button>
            </div>
          </Col>
          <Col lg={6} className="image-col"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default HydraFacial;