import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div id="major-projects">
        <h1>My Projects</h1>

        <div className="project">
          <img
            src="/images/ecommerce-img.jpg"
            alt="ecommerce-img"
            className="project-img"
          />
          <h2 className="project-title">E-commerce Web Application</h2>
          <h3 className="sub-heading">Technologies and Skills</h3>
          <ul className="tools-used">
            <li>
              <strong>Frontend: </strong>React.js, Vite, CSS 3
            </li>
            <li>
              <strong>Backend: </strong>Spring Boot, Microservices Architecture,
              OAuth, JWT, Eureka, Load Balancer, Circuit Breaker, Resilience4j,
              Role-Based Authentication
            </li>
            <li>
              <strong>Cloud & DevOps: </strong>AWS, Netlify
            </li>
          </ul>
          <div className="project-details">
            <h3>Project Details</h3>
            <p>
              This e-commerce web application is a comprehensive clone of Myntra,
              designed to showcase a robust and scalable full-stack system. The
              platform features role-based dashboards to provide tailored
              experiences for administrators, sales executives, and users.
            </p>
          </div>
          <a
            href="https://project-under-process.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>

        <div className="project">
          <img
            src="/images/blogging-platform.png"
            alt="blogging-platform-img"
            className="project-img"
          />
          <h2 className="project-title">Blogging Platform</h2>
          <h3 className="sub-heading">Technologies and Skills</h3>
          <ul className="tools-used">
            <li>
              <strong>Frontend: </strong>React.js, Vite, CSS 3
            </li>
            <li>
              <strong>Backend: </strong>Java 17, Spring Boot 3.x, Spring Security
              with JWT, Hibernate ORM, BCrypt, Validation API, H2 or RDBMS
            </li>
          </ul>
          <div className="project-details">
            <h3>Project Details</h3>
            <p>
              A secure full-stack blogging platform with role-based dashboards,
              user authentication, and advanced search features.
            </p>
          </div>
          <a
            href="https://project-under-process.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>

        <div className="project">
          <img
            src="/images/rms-img.jpg"
            alt="rms-img"
            className="project-img"
          />
          <h2 className="project-title">Restaurant Management System</h2>
          <h3 className="sub-heading">Technologies and Skills</h3>
          <ul className="tools-used">
            <li>
              <strong>Frontend: </strong>React.js, CSS 3
            </li>
            <li>
              <strong>Backend: </strong>Spring Boot, JWT, Role-based
              Authentication
            </li>
          </ul>
          <div className="project-details">
            <h3>Project Details</h3>
            <p>
              Full-stack system for order management, sales monitoring, and food
              management with secure role-based access.
            </p>
          </div>
          <a
            href="https://project-under-process.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>
      </div>

      <div id="mini-projects">
        <h1>Mini Projects</h1>

        <div className="project">
          <img
            src="/images/Quick-Bite.png"
            alt="quickbite-img"
            className="project-img"
          />
          <h2 className="project-title">Quick Bite (Recipe Suggestion App)</h2>
          <h3 className="sub-heading">Technologies and Skills</h3>
          <p>JavaScript, HTML, CSS, REST API</p>
          <div className="project-details">
            <h3>Project Details</h3>
            <p>
              Suggests recipes based on available ingredients using an external
              REST API. Helps reduce food waste and inspires cooking ideas.
            </p>
          </div>
          <a
            href="https://saisrinivasbojanapally-quickbite.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>

        <div className="project">
          <img
            src="/images/weather-app.jpg"
            alt="weatherApp-img"
            className="project-img"
          />
          <h2 className="project-title">Weather App</h2>
          <h3 className="sub-heading">Technologies and Skills</h3>
          <p>JavaScript, HTML, CSS, REST API</p>
          <div className="project-details">
            <h3>Project Details</h3>
            <p>
              Provides real-time weather updates including temperature, humidity,
              and wind speed using a weather API.
            </p>
          </div>
          <a
            href="https://project-under-process.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
