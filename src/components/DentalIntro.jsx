// src/components/DentalIntro.jsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import { FaHeart, FaComments, FaChair, FaTooth, FaCouch, FaRegSmile } from 'react-icons/fa';
import './DentalIntro.css';
import signatureImg from '../assets/signature.png';
import manImg from '../assets/dental-man.jpg';
import roomImg from '../assets/dental-room.jpg';

const DentalIntro = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2 });
  const [ref2, inView2] = useInView({ threshold: 0.2 });
  const [ref3, inView3] = useInView({ threshold: 0.2 });

  const heading = "Best Dental Services".split(" ");
  const whyChooseUsData = [
    { icon: <FaChair />, text: "What we offer, make it easier to get all your oral health needs met in one place, without having to go to multiple clinics." },
    { icon: <FaHeart />, text: "Prioritizing patients comfort and safety, we use state-of-the-art technology and the latest techniques." },
    { icon: <FaComments />, text: "We understand that visiting the dentist can be stressful for some, that's why we prioritize education and communication." },
    { icon: <FaCouch />, text: "A warm and welcoming environment, from entrance to every door, to help you feel more relaxed and at ease." },
    { icon: <FaTooth />, text: "Our staff are dedicated to providing personalized care and ensuring that each patient leaves our clinic with a healthy smile." },
    { icon: <FaRegSmile />, text: "The natural feel and end result of our cosmetic services make it thought free, just pass by and see for yourself." },
  ];

  return (
    <section className="dental-intro-wrapper">
      <Container>
        <Row className="align-items-center intro-part-1" ref={ref1}>
          <Col lg={6} className={`intro-heading-col ${inView1 ? 'is-visible' : ''}`}>
            <h2>
              {heading.map((word, i) => (
                <span key={i} style={{ transitionDelay: `${i * 0.1}s` }}>{word}&nbsp;</span>
              ))}
            </h2>
            <button className="learn-more-btn">Learn more &gt;</button>
          </Col>
          <Col lg={6} className={`intro-text-col ${inView1 ? 'is-visible' : ''}`}>
            <p className="intro-paragraph">We believe that a healthy smile is the foundation of a happy life. Our team of experienced dental professionals is dedicated to providing exceptional dental care that is personalized to meet the unique needs of each of our patients</p>
            <div className="signature-block">
              <img src={signatureImg} alt="Signature" />
              <span>Dr. Abutalib, J. Al Tamemi</span>
            </div>
          </Col>
        </Row>

        <div className="intro-part-2" ref={ref2}>
          <div className={`man-image-container ${inView2 ? 'is-visible' : ''}`}>
            <img src={manImg} alt="Smiling man" />
            <div className={`circular-text ${inView2 ? 'is-visible' : ''}`}>
              <svg viewBox="0 0 100 100">
                <path id="circlePath" fill="none" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                <text fill="#00bbb4"><textPath href="#circlePath">• Your Smile • Your Happiness Life</textPath></text>
              </svg>
            </div>
          </div>
          <div className={`room-image-container ${inView2 ? 'is-visible' : ''}`}>
            <img src={roomImg} alt="Dental clinic room" />
          </div>
        </div>

        <div className="intro-part-3" ref={ref3}>
          <h2 className="why-us-title">Why Choose Us?</h2>
          <Row className="gy-5">
            {whyChooseUsData.map((item, index) => (
              <Col key={index} md={4} className={`why-us-item ${inView3 ? 'is-visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s`}}>
                <div className="why-us-icon">{item.icon}</div>
                <p>{item.text}</p>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default DentalIntro;