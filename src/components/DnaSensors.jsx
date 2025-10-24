// src/components/DnaSensors.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DnaSensors.css';

import bgImage from '../assets/dna-sensors-bg.jpg';
import sensor1 from '../assets/sensor-1.jpg';
import sensor2 from '../assets/sensor-2.jpg';
import sensor3 from '../assets/sensor-3.jpg';
import sensor4 from '../assets/sensor-4.jpg';

const sensorsData = [
  { img: sensor1, title: 'DNA Beauty Sensor in Dubai' },
  { img: sensor2, title: 'DNA Nutrition Sensor in Dubai' },
  { img: sensor3, title: 'DNA Weight Sensor Test in Dubai' },
  { img: sensor4, title: 'DNA Pharmaco Sensor' },
];

const DnaSensors = () => {
  return (
    <section className="dna-sensors-wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
      <Container className="text-center">
        <h2 className="sensors-heading">Discover Our DNA Test Sensors</h2>
        <Row className="justify-content-center gy-4 mt-4">
          {sensorsData.map((sensor, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="sensor-card">
                <img src={sensor.img} alt={sensor.title} className="sensor-image" />
                <div className="sensor-card-body">
                  <h3 className="sensor-title">{sensor.title}</h3>
                  <a href="#" className="sensor-link">Learn More &gt;</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <button className="load-more-btn">Load More about our DNA Analysis</button>
      </Container>
    </section>
  );
};

export default DnaSensors;