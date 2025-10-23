// src/components/TestimonialSlider.jsx

import React from 'react';
import { Container } from 'react-bootstrap';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import './TestimonialSlider.css';

const testimonials = [
  {
    text: "Dr. Abu transformed my smile with their Invisalign treatment. The staff was informative and supportive throughout the process, and now I can't stop smiling! If you're considering Invisalign, this is the place to go.",
    author: "Lena Schmidt"
  },
  {
    text: "The best dental experience I've ever had. From the moment I walked in, I felt comfortable and cared for. The results of my teeth whitening are incredible. Highly recommended!",
    author: "John Doe"
  },
  {
    text: "I was nervous about getting dental implants, but the team at EDEN made the entire process painless and easy. My new smile looks and feels completely natural. Thank you!",
    author: "Aisha Ahmed"
  }
];

const TestimonialSlider = () => {
  return (
    <section className="testimonial-wrapper">
      <Container>
        <h2 className="testimonial-title">What Our Patients Are Saying</h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-author">— {testimonial.author}</p>
                <div className="stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialSlider;