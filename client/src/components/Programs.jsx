import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Programs.css';

const programsData = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Vocational Skills Training',
    description: 'Hands-on experience in construction, trades, and various technical skills that prepare participants for immediate employment opportunities.',
    features: ['Construction fundamentals', 'Safety certification', 'Tool proficiency', 'Real-world projects']
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Scholarship Program',
    description: 'Financial support for hopeful candidates who demonstrate commitment to personal growth and career development.',
    features: ['Tuition assistance', 'Material costs covered', 'No repayment required', 'Merit-based selection']
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Wraparound Services',
    description: 'Comprehensive partnerships providing housing, mental health care, addiction recovery, legal assistance, and mentorship.',
    features: ['Housing support', 'Mental health care', 'Addiction recovery', 'Legal assistance', 'Mentorship programs']
  }
];

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="programs section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Our <span className="gradient-text">Programs</span></h2>
          <p className="section-subtitle">
            Comprehensive services designed to empower individuals and build sustainable futures
          </p>
        </motion.div>

        <div className="programs-grid">
          {programsData.map((program, index) => (
            <motion.div
              key={index}
              className="program-card card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="program-icon">{program.icon}</div>
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <ul className="program-features">
                {program.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="program-cta">
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="program-info"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3>Who We Serve</h3>
          <div className="serve-tags">
            <span className="tag">Poverty Recovery</span>
            <span className="tag">Homelessness Support</span>
            <span className="tag">Domestic Violence Survivors</span>
            <span className="tag">Post-Incarceration Reentry</span>
            <span className="tag">Addiction Recovery</span>
            <span className="tag">Human Trafficking Survivors</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
