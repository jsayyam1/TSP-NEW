import React from 'react';
import logo from '../Assets/TSPNetworkLogo.png';
import '../styles/network.css';
import Navbar from './Navbar'

function StallionNetwork() {
  return (
    <>
    <Navbar/>
    <section className='full-page' style={{marginTop: '150px'}}>

      <header>
        <div className='logo-container'>
          <img src={logo} alt="" />
        </div>
      </header>
      <div className="background-container-1">
        <div className="content-container-1">
          <div className='title'>
            <h1><br />
                Welcome To
                <br />
                <span id="highlight">The Stallion Network</span>
            </h1>
          </div>
          <div className="quote-container-1">
            <p>
              <br /><br />
            🌟 Young visionaries, your moment has arrived 🌟 <br /> <br />
            🚀Embrace the TSP Network, a dynamic haven for budding and established entrepreneurs alike.🚀 <br /> <br />
            
            Engage with peers, exchange innovative ideas, and receive priceless feedback. <br /> Discover new horizons, tap into exclusive materials, and participate in motivational gatherings.
            <br /> <br />
            No matter your experience level, TSP Network is your gateway to entrepreneurial excellence. <br /> Seize this unique opportunity to amplify your business aspirations.
            <br /> <br /><br /> 
            </p>
          </div>
          <div className="quote-container">
            <p>"DON'T LET YOURSELF MAKE EXCUSES FOR NOT DOING THE THINGS YOU WANT TO DO." <br /><i>- Sam Altman</i></p><br /><br />
          </div>
        </div>
      </div>

      <div className="background-container-2">
        <div className="content-container-2">
          <div className='title'>
            <h1 className='text-xl'><br />Perks</h1>
          </div>
          <br />
          <div className='quote-container-1'>
            <p> 
                ➡Connect with Like-Minded entrepreneurs
                <br /><br />
                ➡Learn from Successful entrepreneurs
                <br /><br />
                ➡Grow your Skills & Mindset
                <br /><br />
                ➡Discover newer opportunities
                <br /><br />
                ➡Access Valuable resources for business
                <br /><br />
                ➡Get daily blogs on the entrepreneurial world
                <br /><br /><br />
            </p>
          </div>
          <br />
          <div className="quote-container">
            <p>Hurry, availability is scarce! <br />Complete the form to claim your spot and ascend with us. 📝✨</p>
          </div>
          <a href="https://forms.gle/WpJsSwphjtiUADRS7" className="button" target="_blank" rel="noopener noreferrer">Join Our Community</a>
        </div>
      </div>

      </section>
    </>
  );
}

export default StallionNetwork;
