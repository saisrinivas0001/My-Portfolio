import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer id="footer">
      <ul id="contact-details">
        <li id="contact-linkedin">
          <img src="/images/linkedin-logo.png" alt="linkedin-logo" />
          <a href="https://www.linkedin.com/in/sai-srinivas-bojanapally-77214823a/" target="_blank" rel="noopener noreferrer"></a>
          <span className='contacts'>LinkedIn</span>
        </li>

        <li id="contact-github">
          <img src="/images/github-logo.png" alt="github-logo" />
          <a href="https://github.com/saisrinivas0001" target="_blank" rel="noopener noreferrer"></a>
          <span className='contacts'>GitHub</span>
        </li>

        <li id="contact-whatsapp">
          <img src="/images/whatsapp-logo.png" alt="whatsapp-logo" />
          <span className='contacts'>+91 9100910740</span>
        </li>

        <li id="contact-gmail">
          <img src="/images/gmail-logo.png" alt="gmail-logo" />
          <span className='contacts'>bojanapallysaisrinivas001@gmail.com</span>
        </li>
      </ul>

      <div id="copyright-context">
        <p>© Sai Srinivas Bojanapally 2025 Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
