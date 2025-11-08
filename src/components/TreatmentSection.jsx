import React from 'react';
import { Container } from 'react-bootstrap';
import './TreatmentSection.css';

const TreatmentSection = ({ title, subtitle, children }) => {
  return (
    <div className="treatment-section-wrapper">
      <Container>
        <div className="treatment-header">
          <h2 className="treatment-title">{title}</h2>
          {subtitle && <p className="treatment-subtitle">{subtitle}</p>}
        </div>
        <div className="treatment-content">
          {children}
        </div>
      </Container>
    </div>
  );
};

export default TreatmentSection;