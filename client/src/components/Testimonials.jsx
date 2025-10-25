import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    name: 'Marcus Johnson',
    role: 'Construction Program Graduate',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Bridges Project gave me more than just skills—they gave me hope and a purpose. After struggling with homelessness, I now have a stable job and my own apartment. This program truly changed my life.',
    impact: 'Employed within 45 days'
  },
  {
    name: 'Sarah Martinez',
    role: 'Program Participant',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'The wraparound services made all the difference. While learning construction skills, I also received mental health support and housing assistance. I feel empowered and ready for my future.',
    impact: 'Achieved housing stability'
  },
  {
    name: 'David Chen',
    role: 'Scholarship Recipient',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    quote: 'Coming from incarceration, I never thought I\'d have opportunities like this. The scholarship program and mentorship helped me build a new life. I\'m now working full-time and giving back to my community.',
    impact: 'Successfully reintegrated'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="testimonials section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Success <span className="gradient-text">Stories</span></h2>
          <p className="section-subtitle">
            Hear from the individuals whose lives have been transformed
          </p>
        </motion.div>

        <div className="testimonial-container">
          <button className="testimonial-nav prev" onClick={prevTestimonial} aria-label="Previous testimonial">
            ‹
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-quote">{testimonialsData[currentIndex].quote}</p>
                <div className="testimonial-impact">
                  {testimonialsData[currentIndex].impact}
                </div>
              </div>

              <div className="testimonial-author">
                <img
                  src={testimonialsData[currentIndex].image}
                  alt={testimonialsData[currentIndex].name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4>{testimonialsData[currentIndex].name}</h4>
                  <p>{testimonialsData[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className="testimonial-nav next" onClick={nextTestimonial} aria-label="Next testimonial">
            ›
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
