import React from 'react'
import HomePage from './pages/homepage/HomePage'
import { useNavigate } from 'react-router-dom'
// import './Header.css'

function Header() {
  const navigate = useNavigate();
  return (
    <div id='header-container'>
      <div id='header-logo-container'>
        <img src="/coding.png" alt="logo-image"  onClick={()=>navigate('/')}/>
        <p  onClick={()=>navigate('/')}>Sai Srinivas Bojanapally</p>
      </div>
      <div className="nav-buttons-container">
        <button onClick={()=>navigate('/')}>Home</button>
        <button onClick={()=>navigate('/about')}>About</button>
        <button onClick={()=>navigate('/projects')}>Projects</button>
      </div>
      <div id='social-media-container'>
        <a href="https://www.linkedin.com/in/sai-srinivas-bojanapally-77214823a/" target='_blank'>
            <img src="/images/linkedin-logo.png" alt="linkedin-logo" />
        </a>
        <a href="https://github.com/saisrinivas0001" target='_blank'>
            <img src="/images/github-logo.png" alt="github-logo" />
        </a>
        
      </div>
    </div>
  )
}

export default Header