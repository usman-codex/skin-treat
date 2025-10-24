// src/components/DnaControl.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { FaHeartbeat, FaBaby } from 'react-icons/fa';
import { IoIosNutrition } from "react-icons/io";
import { RiPsychotherapyLine } from "react-icons/ri";
import './DnaControl.css';

const controlData = [
  { icon: <FaHeartbeat />, text: "DNAHealthControl aids in disease prevention, early detection, and treatment, assisting you in mitigating hereditary health risks.", buttonText: "DNA Health Tests" },
  { icon: <IoIosNutrition />, text: "DNAnutriControl supports your journey towards healthy nutrition, weight loss, and athletic performance, helping you achieve your objectives in these domains.", buttonText: "DNA Nutrition Tests" },
  { icon: <FaBaby />, text: "DNAbabyControl primarily examines gene variations applicable to healthcare from family planning to early childhood.", buttonText: "DNA Baby Tests" },
  { icon: <RiPsychotherapyLine />, text: "DNAbeautyControl analyzes over 20 genetic variations that, based on current research, may impact your skin.", buttonText: "DNA Beauty Tests" },
];

const DnaControl = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="dna-control-wrapper" ref={ref}>
      <Container>
        <Row className="gy-5">
          {controlData.map((item, index) => (
            <Col 
              md={6} lg={3} 
              key={index}
              className={`control-card-col ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="control-card">
                <div className="control-icon-container">
                  {item.icon}
                </div>
                <p className="control-text">{item.text}</p>
                <button className="control-button">{item.buttonText}</button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DnaControl;