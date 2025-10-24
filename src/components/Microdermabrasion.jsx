// src/components/Microdermabrasion.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './Microdermabrasion.css';

const Microdermabrasion = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="microdermabrasion-wrapper" ref={ref}>
      <Container fluid className="main-content-micro">
        <Row>
          <Col lg={6} className="text-col-micro">
            <div className={`text-content-micro ${inView ? 'is-visible' : ''}`}>
              <h2>MICRODERMABRASION DIAMOND PEELING</h2>
              <p className="subtitle-micro">Microdermabrasion Gives You a Refreshed, Vibrant and More Youthful Appearance</p>
              <p><strong>Microdermabrasion / Diamond Peeling</strong> is the one of the <strong>most effective non-invasive procedure</strong> that exfoliates and rejuvenates facial skin. A patient is relaxed under comfortable pressure and vacuum when a highly controlled spray of fine crystals is administrated by a therapist to erase all the imperfections without damaging the integrity of the skin.</p>
              <p><strong>The Result Is a Refreshed, Vibrant and More Youthful Appearance.</strong></p>
              <p>The procedure is most effective when combined with Chemical Peels and a professional skin care regime.</p>
              <p><strong>The treatment has zero down time</strong>, it is safe for pregnant women and can be repeated in every 14 days. For <strong>best results we recommend</strong> a series of 6-10 treatments with 14 days interval. If the <strong>microdermabrasion treatment</strong> is done in combination with chemical peeling then less sessions are required. The average duration of one session - 40-50 minutes.</p>
              <p><strong>The specialist at EDEN AESTHETICS Clinic Dubai</strong> will recommend you different combinations of the <strong>microdermabrasion treatment</strong>, depending on the skin needs.</p>
              <button className="book-btn-micro">BOOK HERE YOUR MICRODERMABRASION</button>
            </div>
          </Col>
          <Col lg={6} className="image-col-micro"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Microdermabrasion;