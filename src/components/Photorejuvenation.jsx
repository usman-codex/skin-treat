// src/components/Photorejuvenation.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './Photorejuvenation.css';

const Photorejuvenation = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="photorejuvenation-wrapper" ref={ref}>
      <Container fluid className="main-content-photo">
        <Row>
          <Col lg={6} className="text-col-photo">
            <div className={`text-content-photo ${inView ? 'is-visible' : ''}`}>
              <h2>Photorejuvenation Treatment</h2>
              <p>This skin treatment method <strong>rejuvenates the skin using light</strong> and <strong>laser therapy</strong>. It is an <strong>effective treatment</strong> that makes <strong>the skin smoother</strong> and <strong>younger</strong>.</p>
              <p>It <strong>helps reduce</strong> and treat <strong>common skin problems</strong> such as <strong>melasma, brown spots, liver spots, hyperpigmentation, and rosacea</strong>.</p>
              <ul>
                <li><strong>Reduces hyperpigmentation and skin redness</strong>, creating an even and fairer complexion</li>
                <li><strong>Makes the skin appear more radiant and youthful</strong></li>
                <li><strong>Helps reduce or eliminate wrinkles and fine lines</strong> by stimulating the production of collagen and elastin</li>
                <li><strong>Increases blood circulation</strong> in the target area while reducing inflammation</li>
                <li>Treatments are noninvasive, have minimal side effects and require no recovery time.</li>
                <li><strong>Photorejuvenation</strong> is proven to be an effective treatment for acne, rosacea and hyperpigmentation.</li>
                <li>Photorejuvenation can be used on almost any part of the body.</li>
              </ul>
              <button className="book-btn-photo">BOOK HERE YOUR PHOTOREJUVENATION</button>
            </div>
          </Col>
          <Col lg={6} className="image-col-photo"></Col>
        </Row>
      </Container>
      <div className="bottom-banner-photo">
        <h3 className={`bottom-banner-h3 ${inView ? 'is-visible' : ''}`}>Your Beauty Refined!</h3>
        <p className={`bottom-banner-p ${inView ? 'is-visible' : ''}`}>You're In Good Hands at Eden Aesthetics Clinic Dubai!</p>
      </div>
    </section>
  );
};

export default Photorejuvenation;