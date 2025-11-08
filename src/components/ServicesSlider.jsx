
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSyringe, FaTooth, FaDna, FaUserMd } from 'react-icons/fa';
import { GiMicroscope, GiHeartBeats, GiNoseSide, GiWeightScale } from 'react-icons/gi';
import './ServicesSlider.css';

const servicesData = [
  [
    { icon: <FaSyringe />, title: "COSMETIC", subtitle: "INJECTABLES" },
    { icon: <GiMicroscope />, title: "LASER", subtitle: "THERAPY" },
    { icon: <GiHeartBeats />, title: "REJUVENATION", subtitle: "ANTI-AGING" },
    { icon: <FaUserMd />, title: "SKIN", subtitle: "CARE" },
  ],
  [
    { icon: <FaTooth />, title: "DENTAL", subtitle: "SERVICES" },
    { icon: <GiNoseSide />, title: "SURGERY", subtitle: "" },
    { icon: <GiWeightScale />, title: "IV", subtitle: "THERAPY" },
    { icon: <FaDna />, title: "DNA", subtitle: "ANALYSIS" },
  ]
];

const ServicesSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % servicesData.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="services-slider-wrapper">
      <Container>
        <div className="slider-inner-container">
          {servicesData.map((slide, index) => (
            <Row 
              key={index} 
              className={`service-slide ${activeSlide === index ? 'active' : ''}`}
            >
              {slide.map((service, serviceIndex) => (
                <Col key={serviceIndex} xs={3} md={3} className="d-flex justify-content-center align-items-center">
                  <div className="service-item">
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-text">
                      <strong>{service.title}</strong>
                      <span>{service.subtitle}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServicesSlider;