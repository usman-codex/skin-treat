// src/components/DnaInsights.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { FaDna, FaPills, FaHeartbeat, FaCalendarAlt } from 'react-icons/fa';
import { IoIosFitness } from 'react-icons/io';
import { RiPsychotherapyLine } from 'react-icons/ri';
import './DnaInsights.css';

const insightsData = [
  { icon: <FaDna />, text: "Explore your ancestry and heritage, revealing your unique story." },
  { icon: <FaPills />, text: "Make informed decisions about potential treatments, supplements, and preventive measures." },
  { icon: <RiPsychotherapyLine />, text: "Understand how your genes impact your mental health and overall wellness." },
  { icon: <IoIosFitness />, text: "Optimize your diet and fitness routine based on your genetic makeup." },
  { icon: <FaHeartbeat />, text: "Uncover your genetic predispositions to various health conditions and traits." },
  { icon: <FaCalendarAlt />, text: "Enjoy Live longer and better! Get a result-based plan." },
];

const DnaInsights = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="dna-insights-wrapper" ref={ref}>
      <Container>
        <div className="text-center">
          <h2 className="insights-heading">Life-Changing Insights from Our DNA Genetic Test in Dubai</h2>
          <p className="insights-subheading">Your DNA holds the keys to understanding your unique genetic blueprint. Our advanced analysis provides you with personalized insights, enabling you to make informed decisions about your health, lifestyle, and well-being.</p>
        </div>
        <Row className="gy-5 mt-4">
          {insightsData.map((item, index) => (
            <Col 
              md={6} lg={4} 
              key={index}
              className={`insight-item ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="icon-container">
                {item.icon}
              </div>
              <p>{item.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DnaInsights;