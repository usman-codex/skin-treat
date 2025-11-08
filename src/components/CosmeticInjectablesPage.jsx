// src/pages/CosmeticInjectablesPage.jsx

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TreatmentSection from '../components/TreatmentSection.jsx';
import './CosmeticInjectablesPage.css';

import botoxAreasImg from '../assets/botox-areas.jpg';
// Yahan baaki images import karein

const CosmeticInjectablesPage = () => {
  return (
    <div className="cosmetic-page-wrapper">
      <TreatmentSection 
        title="BOTOX ANTI WRINKLE INJECTIONS" 
        subtitle="look fresh and beautiful"
      >
        <p><strong>Botox is a popular cosmetic treatment</strong> that can help to reduce the appearance of wrinkles and fine lines. The treatment uses small injections of a purified protein to temporarily paralyze the muscles that cause wrinkles, resulting in a smoother and more youthful appearance.</p>
        <p>One of the main benefits of Botox is that it can be used to target specific areas of the face, such as frown lines, crow's feet, and forehead wrinkles. This allows for a more customized treatment that addresses individual concerns. <strong>Another benefit of Botox</strong> is that it is a non-surgical procedure, meaning there is no downtime or recovery period. This makes it a convenient option for people who want to improve their appearance without going under the knife.</p>
        <h4>The advantages of Botox Treatments are numerous and include:</h4>
        <ul>
          <li>The procedure is non-invasive.</li>
          <li>Results are authentic and can be seen promptly.</li>
          <li>It is a reliable and established method to address common ageing indicators.</li>
          <li>No recovery period is necessary.</li>
        </ul>
        <Row className="align-items-center my-5">
          <Col md={6}>
            <img src={botoxAreasImg} alt="Botox Treatment Areas" className="img-fluid rounded" />
          </Col>
          <Col md={6}>
            <h4>Common Botox Treatment Areas:</h4>
            <ul>
              <li>Frown Lines, Glabelar Lines</li>
              <li>Botox for Forehead Lines</li>
              <li>Botox for Crow’s Feet</li>
              <li>Bunny Lines (nose wrinkles)</li>
              <li>And more...</li>
            </ul>
          </Col>
        </Row>
        <a href="#" className="book-btn">BOOK HERE your Botox Treatment</a>
      </TreatmentSection>

      <TreatmentSection 
        title="DERMAL FILLERS INJECTIONS" 
        subtitle="Extreme Rejuvenation, Face Sculpting"
      >
        <p><strong>Dermal filler injections are a popular cosmetic treatment</strong> that can be used to add volume and fullness to the skin. The treatment uses a gel-like substance that is injected into the skin to fill in wrinkles, fine lines, and hollow areas.</p>
        {/* ... Yahan baaki Dermal Fillers ka content daalein ... */}
        <a href="#" className="book-btn">BOOK HERE your Filler Treatment</a>
      </TreatmentSection>

      {/* ... PROFHILO, PLUMP LIPS, etc. ke liye bhi alag TreatmentSection components banayein ... */}

    </div>
  );
};

export default CosmeticInjectablesPage;