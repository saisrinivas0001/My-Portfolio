import React from 'react';
import './About.css'

function About() {
  return (
    <div id="about-page">
      <div id="about-content-container">
        <div id="about-intro">
          <h1>About Me</h1>
          <p>
            Hello! I'm Sai Srinivas Bojanapally, a dedicated and passionate Full-Stack Developer with a
            focus on building scalable and reliable microservices-based applications. I thrive on
            solving complex problems and creating efficient, user-centric solutions.
          </p>
          <a href="/documents/sai_srinivas_fullstack_dev.pdf" target='_blank' rel="noopener noreferrer" id='resume'>📄My Resume</a>
        </div>
        
        <div id="professional-journey">
          <h2>My Professional Journey</h2>
          <p>
            My journey began as a Web Development Intern at FreeCodeCamp, where I honed my skills in
            crafting responsive and dynamic web experiences. This foundation was instrumental during my
            time as a Software Engineer at UST Global. At UST, I led the development of a personalized
            LMS that achieved 99.9% uptime and supported thousands of concurrent users. I also played a key
            role in integrating an AI chatbot using Google Cloud's Gemini API, which significantly boosted
            user engagement and improved query resolution speed. My passion for efficiency drove me to
            streamline CI/CD pipelines, reducing deployment times by half.
          </p>
        </div>

        <div id="skills-and-expertise">
          <h2>Skills & Expertise</h2>
          <p>
            I specialize in a robust technology stack that allows me to tackle both front-end and back-end
            challenges with confidence. My core skills include <span>Java</span>, <span>Python</span>, and <span>JavaScript</span>. On the front end, I am highly
            proficient with <span>React.js</span>, <span>HTML</span>, and <span>CSS</span>, while my back-end expertise lies in <span>Spring Boot</span>, microservices architecture,
            and RESTful APIs. I also have hands-on experience with cloud technologies like <span>AWS</span>, <span>Docker</span>, and <span>Kubernetes</span>.
          </p>
        </div>

        <div id="beyond-the-code">
          <h2>Beyond the Code</h2>
          <p>
            When I'm not writing code, I enjoy exploring my creative side through cooking, capturing
            the world through photography, and traveling to new places. These hobbies help me stay
            inspired and bring a fresh perspective to my work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
