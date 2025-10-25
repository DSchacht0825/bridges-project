import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <img src="/logo.png" alt="Bridges Project" />
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Building Bridges to <span className="gradient-text">Brighter Futures</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Empowering individuals through vocational training, life skills, and supportive resources.
            <br />
            <strong>A hand up, not a handout.</strong>
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#programs" className="btn btn-primary">
              Explore Our Programs
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get Involved
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="stat-item">
            <motion.div
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
            >
              75%
            </motion.div>
            <div className="stat-label">Employment within 60 days</div>
          </div>
          <div className="stat-item">
            <motion.div
              className="stat-number"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            >
              90%
            </motion.div>
            <div className="stat-label">Housing stability after 6 months</div>
          </div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
