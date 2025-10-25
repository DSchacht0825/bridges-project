const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Bridges Project API is running' });
});

// Contact form endpoint (to be implemented)
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  // TODO: Add email sending functionality
  console.log('Contact form submission:', { name, email, phone, message });

  res.json({
    success: true,
    message: 'Thank you for reaching out! We will get back to you soon.'
  });
});

// Program inquiry endpoint
app.post('/api/program-inquiry', (req, res) => {
  const { name, email, phone, program, message } = req.body;

  // TODO: Add email sending functionality
  console.log('Program inquiry:', { name, email, phone, program, message });

  res.json({
    success: true,
    message: 'Thank you for your interest! We will contact you shortly.'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
