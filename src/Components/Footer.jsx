import React from 'react';
import Logo from "../Assets/TSP Logo.jpg";
import { Link } from 'react-router-dom';
import '../styles/style.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/footer.css';

const Footer = () => {

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/', '_blank');
      };
    
      const handleInstagramClick = () => {
        window.open('https://www.instagram.com/thestallionproject/', '_blank');
      };

  return (
    <>
      <div className='footer'>
        <div className="grid-footer">
          <div className='container'>
            <img src={Logo} alt="" className='tsp-img' />
            <h1 className='footer-text'>The Stallion Project</h1>
          </div>
          <div className="footer-pages">
            <Link to="/" className='link'>Home</Link>
            <Link to="/OurTeam" className='link'>Our Team</Link>
            <Link to="/DragonTalksPage" className='link'>Dragon Talks</Link>
            <Link to="/StockGyrationsPage" className='link'>Stock Gyrations</Link>
            <Link to="/MarketSavvyPage" className='link'>Market Savvy</Link>
            <Link to="/Payments" className='link'>Payments</Link>
            <Link to="/Contact" className='link'>Contact</Link>
            <div className='subscribe'>
                <input type="text" placeholder='Enter your email address' />
                <button type="submit">Submit</button>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-container">
            <h2 className="footer-copyright">&copy; 2024 The Stallion Project | All Rights Reserved</h2>
            <div className="social-icons">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" onClick={handleLinkedInClick} className="social-icon">
                    <LinkedInIcon sx={{ position: 'relative', color: 'white' }} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" onClick={handleInstagramClick} className="social-icon">
                    <InstagramIcon sx={{ position: 'relative', color: 'white' }} />
                </a>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
