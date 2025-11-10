import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css';

// Animation variants for Framer Motion
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

const cardContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // This makes cards appear one by one
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};


export default function App() {
  const [projects, setProjects] = useState([]);

  // Fetch project data from the JSON file
  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="container">
      
      {/* --- HEADER / HERO --- */}
      <motion.header 
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img 
          src="/profile.jpg" 
          alt="Tanishq Kavlekar" 
          className="hero-image"
        />
        <div className="hero-content">
          <div className="hero-text">
            <h1>Tanishq Kavlekar</h1>
            <h2>Computer Engineering Student & FIDE Arbiter</h2>
            <p>Curchorem, Goa</p>
          </div>
          <div className="hero-contact">
            <a href="mailto:kavlekartanishq@gmail.com">kavlekartanishq@gmail.com</a>
            <a href="tel:9373843024">9373843024</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/tanishq205" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/tanishqkav" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/tan_ishq.__" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </motion.header>

      {/* --- ABOUT ME --- */}
      <motion.section 
        className="about"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>About Me</h2>
        <p>
          I am a logical Computer Engineering student with a Diploma background and hands-on experience in the MERN stack and Python.
          As a certified FIDE (International Chess Federation) Arbiter, I have proven abilities in strategic thinking, problem-solving, and decision-making under pressure.
          Eager to apply my development skills and analytical acumen to a challenging software internship.
        </p>
      </motion.section>

      {/* --- PROJECTS --- */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2>Projects & Hackathons</h2>
        <motion.div 
          className="project-grid"
          variants={cardContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} className="project-card" variants={cardVariant}>
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* --- EXPERIENCE & EDUCATION --- */}
      <div className="grid-2-col">
        {/* --- EXPERIENCE --- */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Working Experience</h2>
          <div className="timeline-item">
            <h4>Intern - Mograsys Technologies</h4>
            <span className="date">Sept 2023 - Oct 2023</span>
            <ul>
              <li>Developed School Management System using Angular JS, Node Js and MYSQL.</li>
              <li>Resolved existing tickets for international clients.</li>
            </ul>
          </div>
        </motion.section>

        {/* --- EDUCATION --- */}
        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Education</h2>
          <div className="timeline-item">
            <h4>B.E. in Computer Engineering</h4>
            <p>Don Bosco College of Engineering, Fatorda</p>
            <span className="date">Expected to graduate in May 2028</span>
          </div>
          <div className="timeline-item">
            <h4>Diploma in Computer Engineering</h4>
            <p>Government Polytechnic Curchorem</p>
            <span className="date">2021 - 2024</span>
          </div>
        </motion.section>
      </div>

    </div>
  );
}