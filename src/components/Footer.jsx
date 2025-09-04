import React from 'react';

function Footer() {
  const contactInfo = [
    {
      id: 'linkedin',
      icon: '/images/linkedin-logo.png',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sai-srinivas-bojanapally-77214823a/',
      type: 'external'
    },
    {
      id: 'github',
      icon: '/images/github-logo.png',
      label: 'GitHub',
      href: 'https://github.com/saisrinivas0001',
      type: 'external'
    },
    {
      id: 'whatsapp',
      icon: '/images/whatsapp-logo.png',
      label: '+91 9100910740',
      href: 'https://wa.me/+919100910740',
      type: 'external'
    },
    {
      id: 'gmail',
      icon: '/images/gmail-logo.png',
      label: 'bojanapallysaisrinivas001@gmail.com',
      href: 'mailto:bojanapallysaisrinivas001@gmail.com',
      type: 'email'
    }
  ];

  return (
    <footer id="footer">
      {/* Decorative top border */}
      <div className="footer-border"></div>
      
      {/* Main footer content */}
      <div className="footer-content">
        {/* Contact section */}
        <div className="contact-section">
          <h3 className="footer-heading">Let's Connect</h3>
          <ul id="contact-details">
            {contactInfo.map((contact) => (
              <li key={contact.id} className={`contact-item contact-${contact.id}`}>
                <a 
                  href={contact.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label={`Connect via ${contact.label}`}
                >
                  <div className="contact-icon-wrapper">
                    <img 
                      src={contact.icon} 
                      alt={`${contact.id}-logo`}
                      className="contact-icon"
                    />
                  </div>
                  <span className="contact-label">{contact.label}</span>
                  <div className="contact-hover-effect"></div>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Copyright section */}
      <div id="copyright-context">
        <div className="copyright-content">
          <p className="copyright-text">
            © 2025 Sai Srinivas Bojanapally. All rights reserved.
          </p>
          <p className="built-with">
            Built with ❤️ using React & Modern CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;