import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Our <span className="gradient-text">Mission</span></h2>
          <p className="section-subtitle">
            Empowering individuals by providing hands-on training, essential life and job skills,
            and access to supportive resources
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3>A Hand Up, Not a Handout</h3>
            <p>
              Bridges Project is a nonprofit organization dedicated to empowering underserved
              communities through comprehensive vocational training and support services. We believe
              in providing opportunities that transform lives.
            </p>
            <p>
              Located in Chula Vista, CA, we transitioned from for-profit to nonprofit status to
              expand our community impact beyond employment alone. Today, we serve individuals
              experiencing poverty, homelessness, domestic violence, post-incarceration reentry,
              addiction recovery, and human trafficking survival.
            </p>

            <div className="values-list">
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div>
                  <h4>Empowerment</h4>
                  <p>Building confidence through hands-on skill development</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h4>Community</h4>
                  <p>Creating a supportive network for lasting change</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div>
                  <h4>Resilience</h4>
                  <p>Helping individuals overcome challenges and thrive</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                alt="Team working together"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="about-highlight">
              <h4>From For-Profit to Nonprofit</h4>
              <p>
                We evolved to better serve our community, focusing on comprehensive
                support that goes beyond just employment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
