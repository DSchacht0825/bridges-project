# Bridges Project Website

A modern, animated website for Bridges Project - a nonprofit organization dedicated to empowering underserved communities through vocational training and support services.

## Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Framer Motion Animations**: Eye-catching page transitions and scroll-based animations
- **React + Node.js Stack**: Full-stack application with separated client and server
- **Contact Form**: Functional contact form with backend API
- **Mobile Responsive**: Optimized for all device sizes

## Tech Stack

### Frontend
- React 18
- Vite (Build tool)
- Framer Motion (Animations)
- React Router DOM (Navigation)
- CSS3 (Custom styling)

### Backend
- Node.js
- Express
- CORS
- Dotenv

## Project Structure

```
bridges-project/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Programs.jsx
│   │   │   ├── Impact.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── server/                # Node.js backend
    ├── index.js
    ├── .env
    └── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd bridges-project
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

### Running the Application

You need to run both the client and server simultaneously.

**Terminal 1 - Start the backend server:**
```bash
cd server
npm run dev
```
Server will run on http://localhost:5000

**Terminal 2 - Start the frontend:**
```bash
cd client
npm run dev
```
Client will run on http://localhost:5173

### Building for Production

**Build the client:**
```bash
cd client
npm run build
```

**Run the server in production:**
```bash
cd server
npm start
```

## Key Sections

1. **Hero Section** - Eye-catching introduction with animated statistics
2. **About Section** - Mission statement and core values
3. **Programs Section** - Three main service offerings with interactive cards
4. **Impact Section** - Animated statistics showing real-world results
5. **Testimonials** - Carousel of success stories
6. **Contact Section** - Contact form and location information
7. **Footer** - Quick links and social media

## Customization

### Colors
Edit the CSS variables in `/client/src/App.css`:
```css
:root {
  --primary-color: #1bdbdb;
  --secondary-color: #1976d2;
  --dark-bg: #0a192f;
  --light-bg: #f8f9fa;
}
```

### Content
- Update component text directly in each `.jsx` file
- Modify images by changing the Unsplash URLs or replacing with local assets
- Adjust animations in component files using Framer Motion props

## API Endpoints

### POST `/api/contact`
Submit contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "program": "vocational",
  "message": "I'm interested in your programs"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for reaching out! We will get back to you soon."
}
```

## Future Enhancements

- [ ] Add email service integration (SendGrid, Nodemailer)
- [ ] Implement donation payment system
- [ ] Add blog/news section
- [ ] Create admin dashboard
- [ ] Add volunteer registration system
- [ ] Implement program application forms
- [ ] Add image gallery
- [ ] Integrate Google Maps for location
- [ ] Add multilingual support

## License

Copyright © 2024 Bridges Project. All rights reserved.

## Contact

**Bridges Project**
664 Broadway Suite A
Chula Vista, CA
Phone: 619-929-9767
Hours: Monday - Friday, 9:00 AM - 5:00 PM
