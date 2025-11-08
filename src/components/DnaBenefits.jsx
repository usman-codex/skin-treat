// src/components/DnaBenefits.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { FaPlus } from 'react-icons/fa';
import './DnaBenefits.css';

const benefitsData = [
  "Learn which foods to enjoy and which to avoid based on your genes",
  "Discover which medications are compatible and which to avoid",
  "Identify your weight gain triggers: fat or carbohydrates?",
  "Find the best balance between strength and endurance training",
  "Discover your optimal approach: more exercise or less food?",
  "Receive a lifelong, genetically-adapted nutrition and exercise program",
  "Learn how to increase mental performance, energy, and productivity",
  "Evaluate 1,000 foods based on your genetic profile",
  "Find out how to optimally protect yourself from diseases",
  "Determine your predisposition to high-calorie meals or multiple snacks"
];

const DnaBenefits = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="dna-benefits-wrapper" ref={ref}>
      <Container>
        <div className="text-center">
          <h2 className="benefits-heading">You only have one LIFE, but YOU decide how long!</h2>
          <h3 className="benefits-subheading">Top Benefits of Taking a DNA Genetic Test in Dubai</h3>
        </div>
        <Row className="gy-4 mt-4">
          {benefitsData.map((item, index) => (
            <Col 
              md={6} 
              key={index}
              className={`benefit-item ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className="plus-icon"><FaPlus /></span>
              <p>{item}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DnaBenefits;