import React from 'react';
import logo from '../Assets/TSPNetworkLogo.png';
import '../styles/network.css';

function StallionNetwork() {
  return (
    <>
      <header>
        <div className='logo-container'>
          <img src={logo} alt="" />
        </div>
      </header>
      <div className="background-container-1">
        <div className="content-container-1">
          <div className='title'>
            <h1>
                Welcome To
                <br />
                <span id="highlight">The Stallion Network</span>
            </h1>
          </div>
          <div className="quote-container-1">
            <p>
            🌟 Young visionaries, your moment has arrived 🌟 <br /> <br />
            🚀Embrace the TSP Network, a dynamic haven for budding and established entrepreneurs alike.🚀 <br /> <br />
            
            Engage with peers, exchange innovative ideas, and receive priceless feedback. Discover new horizons, tap into exclusive materials, and participate in motivational gatherings.
            <br /> <br />
            No matter your experience level, TSP Network is your gateway to entrepreneurial excellence. Seize this unique opportunity to amplify your business aspirations.
            <br /> <br />
            </p>
          </div>
          <div className="quote-container">
            <p>"DON'T LET YOURSELF MAKE EXCUSES FOR NOT DOING THE THINGS YOU WANT TO DO." ~ Sam Altman</p>
          </div>
        </div>
      </div>

      <div className="background-container-2">
        <div className="content-container-2">
          <div className='title'>
            <h1 className='text-xl'>Perks</h1>
          </div>
          <br />
          <div className='quote-container-1'>
            <p> 
                ➡Connect with Like-Minded entrepreneurs
                <br />
                ➡Learn from Successful entrepreneurs
                <br />
                ➡Grow your Skills & Mindset
                <br />
                ➡Discover newer opportunities
                <br />
                ➡Access Valuable resources for business
                <br />
                ➡Get daily blogs on the entrepreneurial world
                <br />
            </p>
          </div>
          <br />
          <div className="quote-container">
            <p>Hurry, availability is scarce! Complete the form to claim your spot and ascend with us. 📝✨</p>
          </div>
          <a href="https://forms.gle/WpJsSwphjtiUADRS7" className="button" target="_blank" rel="noopener noreferrer">Join Our Community</a>
        </div>
      </div>
    </>
  );
}

export default StallionNetwork;
