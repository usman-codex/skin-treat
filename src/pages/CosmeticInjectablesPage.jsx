import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TreatmentSection from '../components/TreatmentSection.jsx';
import './CosmeticInjectablesPage.css';

import botoxAreasImg from '../assets/botox-areas.jpg';
import fillersAreasImg from '../assets/dermal-fillers-areas.jpg';
import noseCorrectionImg from '../assets/nose-correction.jpg';
import profhiloImg from '../assets/profhilo-treatment.jpg';
import plumpLipsImg from '../assets/plump-lips.jpg';

const CosmeticInjectablesPage = () => {
  return (
    <div className="cosmetic-page-wrapper">
      <TreatmentSection title="BOTOX ANTI WRINKLE INJECTIONS" subtitle="look fresh and beautiful">
        <p><strong>Botox is a popular cosmetic treatment</strong> that can help to reduce the appearance of wrinkles and fine lines. The treatment uses small injections of a purified protein to temporarily paralyze the muscles that cause wrinkles, resulting in a smoother and more youthful appearance.</p>
        <p><strong>Another benefit of Botox</strong> is that it is a non-surgical procedure, meaning there is no downtime or recovery period. This makes it a convenient option for people who want to improve their appearance without going under the knife.</p>
        <h4>The advantages of Botox Treatments are numerous and include:</h4>
        <ul>
          <li>The procedure is non-invasive.</li>
          <li>Results are authentic and can be seen promptly.</li>
          <li>No recovery period is necessary.</li>
          <li>The entire process is quick, typically completed in 15 minutes.</li>
        </ul>
        <Row className="align-items-center my-5 gy-4">
          <Col md={6}><img src={botoxAreasImg} alt="Botox Treatment Areas" className="img-fluid rounded shadow-sm" /></Col>
          <Col md={6}>
            <h4>Common Botox Treatment Areas:</h4>
            <ul>
              <li>Frown Lines, Glabelar Lines</li>
              <li>Botox for Forehead Lines</li>
              <li>Botox for Crow’s Feet</li>
              <li>Bunny Lines (nose wrinkles)</li>
              <li>Botox for Lip Flip</li>
              <li>Smile Lift / Happy Smile</li>
              <li>Neck Rings & Platysmal Bands</li>
            </ul>
          </Col>
        </Row>
        <a href="#" className="book-btn">BOOK HERE your Botox Treatment</a>
      </TreatmentSection>

      <TreatmentSection title="DERMAL FILLERS INJECTIONS" subtitle="Extreme Rejuvenation, Face Sculpting">
        <p><strong>Dermal filler injections are a popular cosmetic treatment</strong> that can be used to add volume and fullness to the skin. One of the <strong>main benefits of dermal fillers</strong> is that they can provide immediate results.</p>
        <Row className="align-items-center my-5 gy-4">
          <Col md={6} className="order-md-2"><img src={fillersAreasImg} alt="Dermal Fillers Areas" className="img-fluid rounded shadow-sm" /></Col>
          <Col md={6} className="order-md-1">
            <h4>Common Dermal Filler Treatment Areas:</h4>
            <ul>
              <li>Dermal Fillers for Lip Augmentation</li>
              <li>Jawline Contouring</li>
              <li>Cheek Enhancement</li>
              <li>Dermal Fillers for Naso-labial Folds</li>
              <li>Tear Trough Treatment</li>
            </ul>
          </Col>
        </Row>
        <a href="#" className="book-btn">BOOK HERE your Filler Treatment</a>
      </TreatmentSection>

      <TreatmentSection title="PERFECT YOUR NOSE WITHIN MINUTES" subtitle="Rhinoplasty Without Surgery">
        <Row className="align-items-center my-5 gy-4">
          <Col md={5}><img src={noseCorrectionImg} alt="Nose Correction" className="img-fluid rounded shadow-sm" /></Col>
          <Col md={7}>
            <p>The treatment is carried out with a <strong>certain type of dermal filler</strong> - <strong>Hyaluronic acid</strong>. This non-surgical minimally invasive procedure is quick and effective to reshape your nose, hide bumps, lift nose tip and make the nose to look smaller and smoother.</p>
          </Col>
        </Row>
        <a href="#" className="book-btn">BOOK HERE your Nose Correction</a>
      </TreatmentSection>

      <TreatmentSection title="PROFHILO TREATMENT IN DUBAI" subtitle="Skin Rejuvenating Treatment">
        <Row className="align-items-center my-5 gy-4">
          <Col md={7}>
            <p>Profhilo is a <strong>new and innovative cosmetic treatment</strong> that can be used to improve the overall quality and appearance of the skin. It is a <strong>hyaluronic acid-based injectable treatment</strong> that is designed to hydrate, firm, and rejuvenate the skin.</p>
          </Col>
          <Col md={5}><img src={profhiloImg} alt="Profhilo Treatment" className="img-fluid rounded shadow-sm" /></Col>
        </Row>
        <a href="#" className="book-btn">BOOK HERE your Profhilo Treatment</a>
      </TreatmentSection>
      
      <TreatmentSection title="PLUMP LIPS, NASO-LABIAL FOLDS & HAPPY SMILE IN DUBAI" subtitle="Advanced Techniques to resume more Beautiful You">
        <Row className="align-items-center my-5 gy-4">
          <Col md={5}><img src={plumpLipsImg} alt="Plump Lips" className="img-fluid rounded shadow-sm" /></Col>
          <Col md={7}>
            <p>This cosmetic procedure helps to <strong>increase the volume in the lips</strong>, makes them fuller and plumper... Lip enhancement includes a number of treatments:</p>
            <ul>
              <li>Restore and add volume with Dermal Fillers</li>
              <li>Smooth vertical lines around the lips and mouth</li>
              <li>Improve symmetry between the upper and lower lip</li>
            </ul>
          </Col>
        </Row>
        <a href="#" className="book-btn">BOOK HERE your Happy Smile</a>
      </TreatmentSection>
    </div>
  );
};

export default CosmeticInjectablesPage;