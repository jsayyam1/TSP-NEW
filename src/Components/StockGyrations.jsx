import React, { useEffect } from 'react';
import Navbar from './Navbar';
import styled from '@emotion/styled';
import BG from '../Assets/STOCK_LOGO.jpg';
import img from '../Assets/image 28.png'
import img2 from '../Assets/image 23.png'
import img3 from '../Assets/image 24.png'
import img4 from '../Assets/image 25.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PageContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const ImageContainer = styled.div({
  position: 'relative',
  '@media (max-width: 768px)': {
    width: '100%',
    paddingTop: '90px', 
  },
});

const OverlayText = styled.div({
  position: 'absolute',
  top: '50%',
  left: '10%',
  transform: 'translateY(-50%)',
  fontSize: '50px',
  fontWeight: 'bold',
  textAlign: 'left',
  '@media (max-width: 768px)': {
    fontSize: '20px',
    top: '60%',
    left: '20px',
    width: '70%',
  },
});

const StockGyrationsPage = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
    <PageContainer>
      <Navbar />
      <ImageContainer>
        <img
          src={BG}
          alt="Stock Gyrations"
          style={{ width: '100%', height: 'auto' , opacity: '0.4' }}
        />
        <OverlayText>
          <p style={{ fontWeight: 'bolder' }}>
            <p style={{ color: 'white' }}>Empowering financial prosperity &nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p style={{ color: 'white' }}></p>
            <p style={{ color: '#b99eff' }}>with Stock Gyrations !!</p>
          </p>
        </OverlayText>
      </ImageContainer>  
    </PageContainer>
    <link href="https://fonts.googleapis.com/css2?family=Blinker&family=Sarala:wght@700&display=swap" rel="stylesheet"></link>

    <div>
    <section id="ms-container"></section>
    
    <div className="box" id="box1">
        <div className="content-container">
            <img src={img} alt="" className="side-image" data-aos="fade-right"></img>
            <div className="text-content" style={{marginTop: '-80px'}}>
                <h2 className="h-primary center">About Us</h2>
                <div data-aos="fade-left">
                <p className="center">
                  Our purpose at Stock Gyrations is to enable people to attain their financial goals by comprehending the true nature of finance. <br></br><br></br>
                  We provide financial education as a high priority, making sure that each financial choice is in line with your goals.
                </p>
                </div>
            </div>
        </div>
    </div>
    
    
    
    <div className="box" id="box2">
        <div className="content-container">
        <img src={img2} alt="" className="side-image" data-aos="fade-right"></img>
            <div className="text-content">
                <h2 className="h-primary center">Our Journey To Unveil The World Of Finance</h2>
                <div data-aos="fade-left">
                <p className="center">
                  We encourage you to join us as we begin this thrilling journey to help shape the financial future. 
                  Keep an eye out for upcoming announcements as we have a number of ground-breaking projects planned to transform the way you manage,
                  grow, and safeguard your wealth.
                </p>
                </div>
            </div>
        </div>
    </div>
    
    
    
    <div className="box" id="box3">
        <div className="content-container">
        <img src={img3} alt="" className="side-image" data-aos="fade-right"></img>
            <div className="text-content">
                <h2 className="h-primary center">Innovating Financial Insight and strategy</h2>
                <div data-aos="fade-left">
                <p className="center">
                At Stock Gyrations, we're reshaping financial success through innovation. Leveraging cutting-edge technology, we deliver 
                real-time insights and personalized strategies tailored to your unique financial goals. Our commitment to financial 
                education ensures you make informed decisions, empowering you on your wealth-building journey. With a proactive approach 
                to risk management, we mitigate uncertainties, providing a secure financial environment. At Stock Gyrations, innovation 
                isn't just a goal—it's our foundation for revolutionizing the way you approach and achieve financial success. Join us on 
                this transformative journey toward your financial aspirations.
                </p>
                </div>
            </div>
        </div>
    </div>
    
    
    
    <div className="box" id="box4">
        <div className="content-container">
        <img src={img4} alt="" className="side-image" data-aos="fade-right"></img>
            <div className="text-content">
                <h2 className="h-primary center">Connect with Stock Gyrations for financial excellence</h2>
                <div data-aos="fade-left">
                <p className="center">
                  Connect with Stock Gyrations for unparalleled financial excellence. We leverage cutting-edge technology and personalized 
                  strategies to align with your unique goals. Our commitment to financial education empowers you to make informed decisions.
                   With proactive risk management, we ensure a secure path to financial success. Join us at Stock Gyrations and redefine your
                  journey towards financial excellence.
                </p>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div style={{marginTop: '-200px'}}></div>
    </>
  );
};

export default StockGyrationsPage;
