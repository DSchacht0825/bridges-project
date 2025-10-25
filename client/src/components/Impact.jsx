import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import './Impact.css';

const Counter = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const impactStats = [
    { value: 500, suffix: '+', label: 'Lives Transformed', icon: '👥' },
    { value: 75, suffix: '%', label: 'Employment Rate', icon: '💼' },
    { value: 90, suffix: '%', label: 'Housing Stability', icon: '🏠' },
    { value: 15, suffix: '+', label: 'Partner Organizations', icon: '🤝' }
  ];

  return (
    <section id="impact" className="impact section" ref={ref}>
      <div className="impact-background"></div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title" style={{ color: 'white' }}>
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Real results that change lives and strengthen communities
          </p>
        </motion.div>

        <div className="impact-grid">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              className="impact-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="impact-icon">{stat.icon}</div>
              <div className="impact-number">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="impact-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="impact-story"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="story-content">
            <h3>Making a Lasting Difference</h3>
            <p>
              Our holistic approach doesn't just provide temporary relief—we create pathways
              to sustainable independence. Through vocational training, wraparound services,
              and ongoing support, we help individuals build the skills, confidence, and
              resources they need to thrive long-term.
            </p>
            <div className="impact-goals">
              <div className="goal-item">
                <div className="goal-icon">🎯</div>
                <div>
                  <strong>60-Day Goal:</strong> 75% employment placement
                </div>
              </div>
              <div className="goal-item">
                <div className="goal-icon">🏡</div>
                <div>
                  <strong>6-Month Goal:</strong> 90% housing stability
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
