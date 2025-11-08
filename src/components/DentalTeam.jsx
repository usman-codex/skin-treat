// src/components/DentalTeam.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DentalTeam.css';

import doc1 from '../assets/doctor-1.jpg';
import doc2 from '../assets/doctor-2.jpg';
import doc3 from '../assets/doctor-3.jpg';

const teamData = [
  { img: doc1, name: 'Dr. Delaram Rezvan', title: 'Master of Dental Surgery' },
  { img: doc2, name: 'Dr. Abutalib J. Al Tamemi', title: 'General Dentistry' },
  { img: doc3, name: 'Dr. Karam Kurbaj', title: 'Dentist' },
];

const DentalTeam = () => {
  return (
    <section className="dental-team-wrapper">
      <Container>
        <div className="team-intro-text">
          <h2 className="team-title">Our Dental Team</h2>
          <p className="team-subtitle">
            Our team of experienced dentists are passionate about providing our patients with the highest quality of care. Our dentists are committed to providing personalized care, tailored to meet the individual needs of each patient.
          </p>
        </div>

        <Row className="justify-content-center gy-5">
          {teamData.map((member, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="team-card">
                <div className="team-image-container">
                  <img src={member.img} alt={member.name} className="team-image" />
                </div>
                <div className="team-card-body">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-title">{member.title}</p>
                  <a href="#" className="team-learn-more">Learn more &gt;</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DentalTeam;