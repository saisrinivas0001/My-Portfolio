import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className='homepage-container'>
      <div id='short-bio'>
        <h1 id='greetings'>Hello! I am Sai Srinivas Bojanapally.</h1>
        <h2 id='sub-heading'>Full-Stack Developer | Innovator | Problem Solver</h2>
        <p id='bio'>
          Welcome to my corner of the internet. I'm a dedicated full-stack developer 
          with a passion for building robust, scalable, and user-friendly applications.
          My expertise lies in crafting efficient and reliable microservices-based solutions 
          that solve real-world problems.
        </p>
      </div>
      <div id='experience-section'>
        <h2>Experience</h2>
        <div id='ust-company'>
          <h3 id='developer-title'>Developer I - Software Engineering</h3>
          <h4 id='ust-title'><img src="/images/UST-logo.png" alt="ust-logo" />UST Global International Pvt Ltd  |  Trivandrum, Kerala, India.</h4>
          <p id='exp-dates'>October 2024 - July 2025</p>
          <div id='role-summary'>
            <p>As a Software Engineering Developer, I focused on building and maintaining scalable and reliable microservices-based applications for enterprise-level solutions.</p>
          </div>
          <div id='ust-jd'>
            <h3 id='ust-achievements-title'>Key Responsibilities & Achievements</h3>
            <ul id='ust-work-details'>
              <li><p>Developed a Personalized LMS using Spring Boot and ReactJS, achieving 99.9% uptime and supporting over 2,000 concurrent users.</p></li>
              <li><p>Integrated an AI chatbot via Google Cloud's Gemini API, improving student query resolution speed by 65% and boosting user engagement by 30%.</p></li>
              <li><p>Streamlined front-end components and CI/CD pipelines, which reduced feature rollout time by 40% and deployment time by 50%.</p></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='skills-section'>
        <h2 id='skills-heading'>My Skills</h2>
        
        <div className='skill-category'>
          <h3 className='category-title'>Programming Languages</h3>
          <ul className='skills-list'>
            <li className='skill-item'><img src="/images/c-programming.png" alt="c-programming-img" />C</li>
            <li className='skill-item'><img src="/images/c++.png" alt="c++-img" />C++</li>
            <li className='skill-item'><img src="/images/java.png" alt="java-img" />JAVA</li>
            <li className='skill-item'><img src="/images/python.png" alt="python-img" />Python</li>
          </ul>
        </div>

        <div className='skill-category'>
          <h3 className='category-title'>Frontend Technologies</h3>
          <ul className='skills-list'>
            <li className='skill-item'><img src="/images/html-5.png" alt="html5-img" />HTML 5</li>
            <li className='skill-item'><img src="/images/css3.png" alt="css3-img" />CSS 3</li>
            <li className='skill-item'><img src="/images/js.png" alt="javascript-img" />JavaScript</li>
            <li className='skill-item'><img src="/images/reactjs.png" alt="reactjs-img" />React JS</li>
          </ul>
        </div>

        <div className='skill-category'>
          <h3 className='category-title'>Backend Technologies</h3>
          <ul className='skills-list'>
            <li className='skill-item'><img src="/images/spring-logo.png" alt="spring-logo-img" />Spring</li>
            <li className='skill-item'><img src="/images/spring-boot.png" alt="spring-boot-logo" />Spring Boot</li>
            <li className='skill-item'><img src="/images/rest-api.png" alt="restapi-img" />REST API</li>
            <li className='skill-item'><img src="/images/cyber-security.png" alt="security-img" />Spring Security</li>
          </ul>
        </div>

        <div className='skill-category'>
          <h3 className='category-title'>Cloud Technologies</h3>
          <ul className='skills-list'>
            <li className='skill-item'><img src="/images/aws-logo.png" alt="aws-img" />AWS</li>
            <li className='skill-item'><img src="/images/docker.png" alt="docker-img" />Docker</li>
            <li className='skill-item'><img src="/images/jenkins.png" alt="jenkins-img" />Jenkins</li>
            <li className='skill-item'><img src="/images/kubernetes.png" alt="kubernetes-img" />Kubernetes</li>
          </ul>
        </div>

        <div className='skill-category'>
          <h3 className='category-title'>Database</h3>
          <ul className='skills-list'>
            <li className='skill-item'><img src="/images/sql-server.png" alt="sql-server-img" />SQL</li>
            <li className='skill-item'><img src="/images/mysql.png" alt="mysql-img" />MySQL</li>
            <li className='skill-item'><img src="/images/mongodb-logo.png" alt="mongodb-img" />MongoDB</li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
