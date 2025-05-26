import React from "react";
import "./Home.css";
import devImage from "../assets/profilesk2.jpeg";
import GoogleMap from "../assets/googleMap.jpeg";
import Employee from "../assets/employe.jpeg";
import Parent from "../assets/parent.jpeg";
import Chess from "../assets/chess.png";
import AI from "../assets/AI.png";
import StudentForm from "../assets/image.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faMobileAlt,
  faRocket,
  faPalette,
  faLightbulb,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiPython,
  SiMysql,
  SiReact,
  SiHtml5,
  SiCss3
} from "react-icons/si";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation triggers once
    });
  }, []);
const expertiseData = [
  {
    title: 'Full Stack Expertise',
    description:
      'Proficient in React Native for front-end and Spring Boot for backend development. Skilled in API integration and building robust end-to-end solutions.',
      iconColor: '#8e44ad',
      borderClass: 'border-purple',
    icon: faCode,
  },
  {
    title: 'Mobile-First Approach',
    description:
      'Expert in designing and developing mobile-first applications tailored for both Android and iOS platforms with consistent performance.',
      iconColor: '#27ae60',
      borderClass: 'border-green',
    icon: faMobileAlt,
  },
  {
    title: 'Fast & Scalable',
    description:
      'I create fast-loading, scalable applications using modern frameworks and optimized data flow handling for better user experiences.',
      iconColor: '#2980b9',
  borderClass: 'border-blue',
    icon: faRocket,
  },
  {
    title: 'User-Friendly Interface',
    description:
      'Strong UI/UX design focus. Build clean, intuitive, and responsive user interfaces that enhance usability and engagement.',
      iconColor: '#e67e22',
      borderClass: 'border-purple',
    icon: faPalette,
  },
  {
    title: 'Problem Solver',
    description:
      'Adept at analyzing requirements, troubleshooting issues, and implementing effective solutions for complex problems.',
      iconColor: '#c0392b',
      borderClass: 'border-green',
    icon: faLightbulb,
  },
  {
    title: 'Scalable Solutions',
    description:
      'Capable of designing scalable system architectures to accommodate growth and ensure long-term performance and maintainability.',
      iconColor: '#16a085',
      borderClass: 'border-blue',
    icon: faCogs,
  },
];
  return (
    <div className="overallDiv">
      <div className="container">
        <div className="left-section">
          <p className="gradient-text">Hello, I'm AgsaiKrishna Jr Developer</p>
          <p className="web-mobile-dev">
            Web and Mobile Developer (Android \ ios)
          </p>
          <p className="line3">
            Turning Ideas into Digital Reality: SK, a Full Stack Developer
            passionate about building robust backend systems and crafting
            elegant, functional user interfaces. Skilled in both frontend and
            backend technologies, I deliver seamless, high-performance web and
            mobile solutions that provide exceptional user experiences from end
            to end.{" "}
          </p>
        </div>

        <div className="right-section">
          <img
            src={devImage}
            alt="Animated Developer"
            className="animated-photo"
          />
        </div>
       
      </div>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
      <button
  style={{
    padding: '10px 20px',
    backgroundImage: 'linear-gradient(90deg, #a78bfa, #06b6d4)',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '20px',  // Increased gap here
    fontSize: '16px',
    marginLeft: 100,
  }}
  onClick={() => window.open('/Skresume.pdf', '_blank')}
>
  👁️ View Resume
</button>


  <button
    style={{
      padding: '10px 20px',
      backgroundImage: 'linear-gradient(90deg, #a78bfa, #06b6d4)',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '16px',
      marginLeft:60,
    }}
    onClick={() => {
      const link = document.createElement('a');
      link.href = '/Skresume.pdf'; 
      link.download = 'Resume.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); 
    }}
  >
    ⬇️ Download Resume
  </button>
</div>


<div className="expertise-section single-column">
  {expertiseData.map((card, index) => (
    <div
      key={index}
      className={`expertise-card ${card.borderClass}`}
      data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
    >
      <div className="icon-wrapper" style={{ color: card.iconColor }}>
        <FontAwesomeIcon icon={card.icon} size="2x" />
      </div>
      <h3 className="expertise-title">{card.title}</h3>
      {card.image && (
        <div className="card-image">
          <img src={card.image} alt={card.title} />
        </div>
      )}
      <p className="expertise-description">{card.description}</p>
    </div>
  ))}
</div>



      <div className="projectsView">
        <p className="ProjectsText">Projects</p>
        <p className="summary">
          Explore a showcase of my creative and innovative projects — from UI
          design to full-stack development — demonstrating how I bring ideas to
          life and contribute real value to every endeavor.
        </p>

        <p className="MobileText">Mobile Projects</p>
        <div className="NoofprojectsView1">
          <div className="project-card1 border-purple">
            <div className="cardContent">
              <img
                src={Employee}
                alt="Animated Developer"
                className="p1Image"
              />

              <div className="cardText">
                <h3 className="projectName">SC Employee App</h3>
                <p className="projectSummary">
                  An all-in-one mobile solution designed for college management.
                  This app enables employees to check daily student attendance,
                  track employee presence, manage new admissions, and monitor
                  campus cleaning tasks. Built with React Native for Android, it
                  streamlines daily operations and enhances staff productivity
                  within the institution.
                </p>
                <p>Skills: Android, React Native(ios)</p>

                <div className="buttons">
                  <a
                    href="https://play.google.com/store/apps/details?id=apps.srichaitanya.employee&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn1">Live</button>
                  </a>

                  <button className="btn2">GitHub</button>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card1 border-purple">
            <div className="cardContent">
              <img src={Parent} alt="Animated Developer" className="p1Image" />

              <div className="cardText">
                <h3 className="projectName">SC Parent App</h3>
                <p className="projectSummary">
                  A dedicated mobile app for parents to stay connected with
                  their child’s academic journey. It provides real-time access
                  to student data including attendance, marks, performance
                  reports, fee details, and more. Designed with React Native for
                  Android, the app ensures transparent communication between
                  parents and the institution.
                </p>
                <p>Skills: Android, React Native(ios)</p>

                <div className="buttons">
                <a
                    href="https://play.google.com/store/apps/details?id=com.srichaitanya.parent&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn1">Live</button>
                  </a>
                  <button className="btn2">GitHub</button>
                </div>
              </div>
            </div>
          </div>
          <div className="project-card1 border-green">
            <div className="cardContent">
              <img
                src={GoogleMap}
                alt="Animated Developer"
                className="p1Image"
              />

              <div className="cardText">
                <h3 className="projectName">Google Map Directions</h3>
                <p className="projectSummary">
                  A smart location-based tool that uses the Google Maps API to
                  provide real-time directions and calculate the distance
                  between two points. It supports route visualization, travel
                  time estimation, and multiple travel modes like driving,
                  walking, or transit.
                </p>
                <p>Skills: Android, React Native(ios)</p>
                <div className="buttons">
                  <button className="btn1">Live</button>
                  <a
                    href="https://github.com/Gunasaikrishna/GoogleMapLive.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <button className="btn2">GitHub</button>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="MobileText">Web Projects</p>
        <div className="NoofprojectsView">
        <div className="project-card border-blue">
  <img src={Chess} alt="Animated Developer"  />

  <h3 className='projectName'>Chess AI</h3>
    <p className="projectSummary">An interactive chess game built using React JS that allows users to play classic chess with a clean UI and responsive design. The game supports all standard chess rules, legal move validation, check/checkmate detection, and smooth gameplay transitions. Ideal for practicing and enjoying chess in a web environment.</p>

    <p>Skills: React JS</p>
    <div className="liveBt">
  <button className="webbtn1">Live</button>

  <a
    href="https://github.com/Gunasaikrishna/ChessGame.git"
    target="_blank"
    rel="noopener noreferrer"
    className="webbtn2"
  >
    GitHub
  </a>
</div>

  </div>

          <div className="project-card border-green">
  <img src={AI} alt="Animated Developer"   />
  <h3 className='projectName'>Chat & Voice Assistnace AI </h3>
    <p className="projectSummary">A smart AI-powered assistant built with React JS, Python, and FastAPI that mimics Google Assistant functionalities. It can respond to user queries, perform tasks like weather updates, reminders, and general Q&A using integrated AI and NLP capabilities. The assistant provides real-time voice/text interaction, making it a handy tool for productivity and learning.</p>

    <p>Skills: React JS ,Python ,Fast Api and SpeechRecognization</p>
    <div className="liveBt">
      <button className="webbtn1">Live </button>

      <a
          href="https://github.com/Gunasaikrishna/ChatBotGoogleAssistanceAI.git"
                    target="_blank"
                    rel="noopener noreferrer"
                     className="webbtn2"
                  >
      GitHub
      </a>
    </div>
  </div>

          <div className="project-card border-purple">
  <img src={StudentForm} alt="Animated Developer" />

    <h3 className='projectName'>Student Details Form</h3>
    <p className="projectSummary">A modern and dynamic student information form built with React JS, styled using CSS and JavaScript for interactivity. The form captures detailed student data such as name, contact, address, and academic background. It features real-time validation, state management, and a responsive UI, making it ideal for digital admissions and academic record-keeping systems.</p>

    <p>Skills: React Js, Spring Boot</p>
    <div className="liveBt">

      <a
          href="https://srichaitanyaschool.net/users/login"
                    target="_blank"
                    rel="noopener noreferrer"
                          className="webbtn1"
                  >
                          Live

                  </a>
      {/* <button className="webbtn2">GitHub</button> */}

      
    </div>
  </div>
        </div>
      </div>

      <div className="projectsView">
        <p className="ProjectsText">Technologies</p>
        <p className="summary">
          Discover my skills and experience in various technologies through my
          personal website, where I share insights and innovative solutions.
        </p>
        <div className="techContainer">
  <div className="techCard">
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
  <SiTypescript style={{ color: '#3178c6', marginRight: 8, width: 30, height: 30  }} />

    <p className="techTitle">
      TypeScript & JavaScript
    </p>
    </div>
    <p className="techDesc">
      Proficient in JavaScript and TypeScript for writing clean,
      maintainable code with enhanced developer productivity.
    </p>
  </div>

  <div className="techCard">
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
  <SiJavascript style={{ color: '#f7df1e',marginRight: 8, width: 30, height: 30 }} />

    <p className="techTitle">
      UI / UX Design
    </p>
    </div>
    <p className="techDesc">
      Skilled in crafting intuitive and visually appealing user
      experiences and interfaces that align with modern design
      principles.
    </p>
  </div>

  <div className="techCard">
  
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
  <SiSpringboot style={{ color: '#61DAFB', marginRight: 8, width: 30, height: 30 }} />

    <p className="techTitle">
      
      Spring Boot
    </p>
    </div>
    <p className="techDesc">
      Experience in building robust backend APIs and microservices using
      Spring Boot, ensuring scalable and maintainable applications.
    </p>
  </div>
</div>

        <div className="techContainer">
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
          {/* <SiSpringboot style={{ color: '#61DAFB', marginRight: 8, width: 30, height: 30 }} /> */}


            <p className="techTitle">Java
            </p>
            </div>
            <p className="techDesc">
              Strong in object-oriented programming with Java, building scalable
              backend systems and Android applications with clean architecture.
            </p>
          </div>

          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
  <SiPython style={{ color: '#3776AB', marginRight: 8, width: 30, height: 30 }} />
  <p className="techTitle">Python</p>
</div>
            <p className="techDesc">
              Versatile in Python for scripting, data processing, and backend
              development with clean and efficient coding practices.
            </p>
          </div>

          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>

          <SiMysql style={{ color: '#00758F', marginRight: 8, width: 50, height: 50 }} />
            <p className="techTitle">SQL</p>
            </div>
            <p className="techDesc">
              Strong understanding of relational databases and SQL for managing
              and querying structured data effectively.
            </p>
          </div>
        </div>

        <div className="techContainer">
          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>

<SiReact style={{ color: '#61DAFB', marginRight: 8, width: 30, height: 30  }} />
            <p className="techTitle">React JS</p>
            </div>
            <p className="techDesc">
              Experienced in building dynamic web applications using React JS
              and component-based architecture.
            </p>
          </div>

          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>

          <SiReact style={{ color: '#61DAFB', marginRight: 8, width: 30, height: 30  }} />

            <p className="techTitle">React Native</p>
            </div>
            <p className="techDesc">
              Developed cross-platform mobile apps using React Native, ensuring
              native performance and seamless user experiences.
            </p>
          </div>

          <div className="techCard">
          <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center' , justifyContent:'center', marginTop:20, marginBottom:10}}>
          <SiHtml5 style={{ color: '#e34c26', marginRight: 6, width: 30, height: 30 }} />
  <SiCss3 style={{ color: '#1572b6', marginRight: 8, width: 30, height: 30 }} />
  <p className="techTitle" style={{ margin: 0 }}>
    HTML & CSS
  </p>
</div>

            <p className="techDesc">
    Solid foundation in HTML & CSS for structuring and styling web pages with responsive and accessible designs.
  </p>
</div>
        </div>
      </div>

      <div className="projectsView">
        <p className="ProjectsText">Additional technologies and skills</p>
        <p className="summary">
          Discover my additional skills and expertise, elevating projects to new
          heights of quality and efficiency.
        </p>
        <div className="techContainer">
          <div className="techItem">
            <div className="circleDot"></div>
            <p>Git & GitHub</p>
          </div>

          <div className="techItem">
            <div className="circleDot"></div>
            <p>Android Studio</p>
          </div>

          <div className="techItem">
            <div className="circleDot"></div>
            <p>Postman</p>
          </div>

          <div className="techItem">
            <div className="circleDot"></div>
            <p>VS Code</p>
          </div>
        </div>
        <div className="techContainer">
          <div className="techItem">
            <div className="circleDot"></div>
            <p>X Code</p>
          </div>

          <div className="techItem">
            <div className="circleDot"></div>
            <p>Api's</p>
          </div>

          <div className="techItem">
            <div className="circleDot"></div>
            <p>AWS</p>
          </div>

          <div className="techItem">
            <div className="circleDot"></div>
            <p>FireBase Console</p>
          </div>
        </div>
      </div>

      <div className="projectsView">
        <p className="ProjectsText">About me</p>
        <p className="summary">
          Crafting visually stunning and functional experiences - I'm a Frontend
          Developer passionate about turning ideas into digital reality
        </p>
      </div>

      <div className="contact-wrapper">
  <p className="ContactText">Contact Me</p>
  <p className="summary">
    Get in Touch: Let's Collaborate and Create Something Amazing Together
  </p>

  {/* Contact Info Section */}
  <div className="contact-info">
    <p className="contact-item">
      📞  <a href="tel:+91 8297670197">Phone : +91 8297670197</a>
    </p>
    <p className="contact-item">
      📧  <a href="mailto:agskannavarapu40002@gmail.com">agskannavarapu40002@gmail.com</a>
    </p>
  </div>

  {/* Form */}
  {/* <input type="text" placeholder="Name" className="input-field" />
  <input type="number" placeholder="Enter Mobile No" className="input-field" />
  <textarea
    placeholder="Message"
    className="input-field message-field"
  ></textarea>

  <button className="send-button">Send Message</button> */}
</div>

    </div>
  );
};

export default Home;

