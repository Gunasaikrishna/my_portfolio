// src/components/About.js
import React from 'react';
import './AboutMe.css'; 
import devImage from '../assets/profilesk3.jpeg'; 

function AboutMe() {
  return (
    <div className="overallDiv">
      <div className="projectsView">
        <p className="ProjectsText">About Me</p>
        <p className="summary">
        I graduated from Sri Vani Institute  with a Bachelor of Technology (B.Tech) in Electrical and Electronics Engineering (EEE). This academic background has equipped me with a strong foundation in engineering principles, problem-solving, and analytical thinking, which I effectively apply to software development and system design.          </p>
      </div>

      <div className="container">
        <div className="right-section">
          <img src={devImage} className="animated-photos" />
        </div>

        <div className="left-section">
          <p className="line3">
            Hi there! I'm **SaiKrishna**, a passionate full-stack developer with a strong background in frontend and mobile app development. Let me introduce myself and tell you more about my journey in tech.

            I am from India, where I cultivated a deep interest in software and systems from a young age. My fascination with building interactive applications led me to pursue a career in development.

            Besides coding, I enjoy learning about new tech trends, exploring the outdoors, and occasionally gaming or reading tech blogs to stay sharp. I’m also passionate about building practical solutions that solve real-world problems and make users' lives easier.
          </p>
        </div>
      </div>

      <div className="skillscontiner">
        <div className='left'>
          <div className="profissinalContiner">
            <div className="circleDot"></div>
            <p className="eductionText">Eduction and Skills</p>
          </div>
          <p className="summary">
          I graduated from Sri Vani Institute with a Bachelor of Technology (B.Tech) in Electrical and Electronics Engineering (EEE). This academic background has equipped me with a strong foundation in engineering principles, problem-solving, and analytical thinking, which I effectively apply to software development and system design.          </p>
        </div>

        <div className='left'>
          <div className="profissinalContiner">
            <div className="circleDot"></div>
            <p className="eductionText">Professional Experience</p>
          </div>
          <p className="summary">
            I have worked as a React Native developer and full-stack engineer, contributing to multiple mobile and web projects. I specialize in building scalable apps using modern tech stacks like React, React Native, Node.js, and AWS.
          </p>
        </div>
      </div>

      <div className="skillscontiner">
        <div className='left'>
          <div className="profissinalContiner">
            <p className="eductionText">Skills</p>
          </div>
          <p className="summary">
            I have expertise in Git/GitHub, UI/UX Design, Spring Boot, AWS & Lambda, Python, SQL, React JS, React Native, HTML & CSS, TypeScript, and JavaScript. My skills enable me to create robust, user-friendly, and high-performing digital solutions.
          </p>
        </div>

        <div className='left'>
          <div className="profissinalContiner">
            <p className="eductionText">Current Role</p>
          </div>
          <p className="summary">
            Currently, I am working as a React Native developer, focusing on scalable mobile application development. I collaborate with cross-functional teams to deliver engaging and performant mobile experiences that align with business goals.
          </p>
        </div>
      </div>

      <div className="skillscontiner">
        <div className='left'>
          <div className="profissinalContiner">
            <div className="circleDot"></div>
            <p className="eductionText">Continuous Learning and Specialization</p>
          </div>
          <p className="summary">
            I’m committed to continuous learning, currently diving deeper into Cloud technologies, API integrations, and AI-based systems to stay up-to-date and future-proof my development skills.
          </p>
        </div>

        <div className='left'>
          <div className="profissinalContiner">
            <div className="circleDot"></div>
            <p className="eductionText">Get in Touch</p>
          </div>
          <p className="summary">
            If you're looking for a motivated and versatile developer with strong problem-solving skills, feel free to reach out. I'm excited to collaborate and bring your ideas to life with high-quality code and thoughtful user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
