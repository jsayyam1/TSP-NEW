import React, { useEffect } from 'react';
import Navbar from './Navbar';
import styled from '@emotion/styled';
import BG from '../Assets/MARKET_LOGO.jpg';
import '../styles/mssection.css'
import img from '../Assets/image 27.png'
import img2 from '../Assets/image 18.png'
import img3 from '../Assets/image 19.png'
import img4 from '../Assets/image 21.png'
import img5 from '../Assets/image 22.png'
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

const MarketSavvyPage = () => {

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
          alt="MarketSavvy"
          style={{ width: '100%', height: 'auto' , opacity: '0.4' }}
        />
        <OverlayText>
          <p style={{ fontWeight: 'bolder' }}>
            <p style={{ color: 'white' }}>Elevate your marketing skills &nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p style={{ color: 'white' }}></p>
            <p style={{ color: '#b99eff' }}>with Market Savvy !!</p>
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
                    The approach to digital marketing mastery is very unique and different. At this market savvy, we aim
                    to improve your business and grow with it. We believe that working together hand-in-hand is the way
                    forward. “Your network is your networth”, is the Moto we live by. Helping you achieve this Moto is
                    one of the foundations of MarketSavvy.
                    <br></br><br></br>
                    To achieve mastery we engage in a very different and unique pathway. Our team studies your business and market conditions, getting out the
                    best budget-friendly outcome. Our unique SM3 package does the work for us. We offer social media
                    management and marketing along with a detailed statistical analysis.
                </p>
                </div>
            </div>
        </div>
    </div>
    
    
    
    <div className="box" id="box2">
        <div className="content-container">
        <img src={img2} alt="" className="side-image" data-aos="fade-right"></img>
            <div className="text-content">
                <h2 className="h-primary center">Our Approach To Marketing Mystery</h2>
                <div data-aos="fade-left">
                <p className="center">
                    In the pursuit of digital marketing mastery, MarketSavvy employs a distinctive and innovative
                    approach. Our mission is not only to enhance your business but also to foster its continuous growth.
                    We firmly believe that collaborative efforts are the key to success, adhering to the philosophy that
                    "Your network is your net worth." This mantra encapsulates our commitment to working closely with
                    you, hand-in-hand, as we consider it fundamental to the core principles of MarketSavvy. Assisting
                    you in realizing and embodying this guiding principle stands as a cornerstone of our dedication to
                    your success.
                </p>
                </div>
            </div>
        </div>
    </div>
    
    
    
    <div className="box" id="box3">
        <div className="content-container">
        <img src={img3} alt="" className="side-image" data-aos="fade-right"></img>
            <div className="text-content">
                <h2 className="h-primary center">Program Highlights</h2>
                <div data-aos="fade-left">
                <p className="center">
                    Discover the unparalleled advantages of Market Savvy's unique approach to digital
                        marketing mastery. Our program stands out with a collaborative ethos, aiming to enhance your
                        business and foster mutual growth. With "Your network is your networth" as our guiding motto, we
                        work hand-in-hand with you to achieve unprecedented success. Dive into our innovative SM3 package,
                        where our team meticulously studies your business and market conditions to deliver budget-friendly
                        solutions. From comprehensive social media management to detailed statistical analysis, our program
                        highlights redefine the landscape of digital marketing.
                </p>
                </div>
            </div>
        </div>
    </div>
    
    
    
    <div className="box" id="box4">
        <div className="content-container">
        <img src={img4} alt="" className="side-image" data-aos="fade-right"></img>
            <div className="text-content">
                <h2 className="h-primary center">Explore Our Marketing Mystery</h2>
                <div data-aos="fade-left">
                <p className="center">
                    Embark on a journey of discovery with Market Savvy's insightful approach to marketing. Our team
                    delves deep into your business and market dynamics to extract the most impactful insights. With a
                    commitment to providing unique perspectives, our marketing insights pave the way for informed
                    decision-making. Uncover the power of our SM3 package, offering not just social media management and
                    marketing but also a meticulous statistical analysis. Explore a new realm of possibilities as you
                    navigate the dynamic landscape of digital marketing with Market Savvy.
                </p>
                </div>
            </div>
        </div>
    </div>
    
    
    <div className="box" id="box5">
        <div className="content-container">
        <img src={img5} alt="" className="side-image" data-aos="fade-right"></img>
            <div className="text-content">
                <h2 className="h-primary center">Ready To Elevate Your Marketing Game</h2>
                <div data-aos="fade-left">
                <p className="center">
                    Are you prepared to elevate your marketing game to new heights? Market Savvy is your partner in this
                        transformative journey. Our collaborative ethos, guided by the mantra "Your network is your
                        networth," ensures a synchronized approach to success. The unique SM3 package, a cornerstone of our
                        methodology, optimizes social media management and marketing while providing in-depth statistical
                        analysis. Ready to soar above the competition? Market Savvy is here to redefine and elevate your
                        marketing game, unlocking a future of unparalleled success for your business.
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

export default MarketSavvyPage;
