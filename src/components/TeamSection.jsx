
import React from 'react';
import { Container } from 'react-bootstrap';
import PartnersScroller from './PartnersScroller.jsx'; 
import teamPhoto from '../assets/team-photo.jpg';
import './TeamSection.css';

const TeamSection = () => {
  return (
    <section className="team-section-wrapper">
      <Container className="text-center">
        <p className="team-subheading">About EDEN AESTHETICS CLINIC™</p>
        <h2 className="team-heading">
          International Team of board-certified
          <br />
          Doctors and Specialists
        </h2>
        <div className="team-image-container">
          <img src={teamPhoto} alt="Team of doctors and specialists" className="team-image" />
        </div>
      </Container>
      
      
      <PartnersScroller />
    </section>
  );
};

export default TeamSection;