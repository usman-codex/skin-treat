// src/components/DentalServicesGrid.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import './DentalServicesGrid.css';

import service1 from '../assets/service-1.jpg';
import service2 from '../assets/service-2.jpg';
import service3 from '../assets/service-3.jpg';
import service4 from '../assets/service-4.jpg';


const services = [
  { img: service1, title: 'Dental Implants' },
  { img: service2, title: 'Invisalign' },
  { img: service3, title: 'Porcelain Veneers' },
  { img: service4, title: 'Teeth Whitening' },
  
];

const DentalServicesGrid = () => {
  return (
    <section className="services-grid-wrapper">
      <Container>
        <h2 className="services-grid-title">Our Dental Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.img} alt={service.title} className="service-image" />
              <div className="service-overlay">
                <div className="overlay-content">
                  <h3>{service.title}</h3>
                  <a href="#" className="learn-more-btn">Learn More &gt;</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DentalServicesGrid;