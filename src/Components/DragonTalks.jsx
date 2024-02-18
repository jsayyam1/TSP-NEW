import React, { useEffect } from 'react';
import Navbar from './Navbar';
import '../styles/dragontalks.css';
import styled from '@emotion/styled';
import BG from '../Assets/DRAG_LOGO.jpg';
import dragon1 from '../Assets/dtabout.png';
import dragon2 from '../Assets/dtapproach.png';
import dragon3 from '../Assets/dtsession.png';
import dragon4 from '../Assets/dtend.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PageContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  // backgroundColor: '#2c1f4a',
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
  fontSize: '45px',
  fontWeight: 'bold',
  textAlign: 'left',
  '@media (max-width: 768px)': {
    fontSize: '20px',
    top: '60%',
    left: '20px',
    width: '70%',
  },
});

const DragonTalksPage = () => {

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
            alt="Dragon Talks"
            style={{ width: '100%', height: 'auto', opacity: '0.4' }}
          />
          <OverlayText>
            <p style={{ fontWeight: 'bolder' }}>
              <p style={{ color: 'white' }}>Unleash your inner dragon &nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p style={{ color: 'white' }}></p>
              <p style={{ color: '#b99eff' }}>with Dragon Talks !!</p>
            </p>
          </OverlayText>
        </ImageContainer> 
      </PageContainer>
      <link href="https://fonts.googleapis.com/css2?family=Blinker&family=Sarala:wght@700&display=swap" rel="stylesheet"></link>

<div>
<section id="ms-container"></section>

<div className="box" id="box1">
    <div className="content-container">
        <img src={dragon1} alt="" className="side-image" data-aos="fade-right"></img>
        <div className="text-content" style={{marginTop: '-80px'}}>
            <h2 className="h-primary center">About Us</h2>
            <div data-aos="fade-left">
            <p className='center'>
                At Dragon Talks, we cultivate a vibrant and supportive atmosphere dedicated to refining your public speaking prowess. 
                Led by seasoned trainers, our program covers essential facets such as body language, voice modulation, and presentation 
                structure. Gain skills to engage audiences, conquer nerves, and adeptly handle challenging queries.
              </p>
              <p className='center'>
                Our commitment extends beyond the professional realm—we believe learning should be enjoyable. 
                Balancing informativeness and entertainment, our program facilitates connections among participants, fostering a community where experiences are shared, and insights are gained.
              </p>
              <p className='center'>
                  Embrace a collaborative spirit as you interact with like-minded individuals, drawing inspiration from their triumphs and overcoming challenges together. At Dragon Talks, we redefine the learning experience by infusing enjoyment into every session.
                  And, of course, relish the thrill of delivering impactful presentations that captivate and resonate. With Dragon Talks, turning that vision into reality becomes second nature. Join us in creating a fun, supportive environment where you can truly become the best public speaker you aspire to be!
              </p>
            </div>
        </div>
    </div>
</div>



<div className="box" id="box2">
    <div className="content-container">
    <img src={dragon2} alt="" className="side-image" data-aos="fade-right"></img>
        <div className="text-content">
            <h2 className="h-primary center">Our Approach To Public Speaking Mystery</h2>
            <div data-aos="fade-left">
            <p className="center">
            At Dragon Talks, we craft a unique approach to public speaking mastery, emphasizing a blend of skill development and a 
             supportive atmosphere. Our experienced trainers lead you through the fundamentals, covering essential aspects like body 
             language, voice modulation, and presentation structure. We go beyond the basics, teaching you to engage your audience, conquer
              nervousness, and adeptly navigate challenging questions. Through our distinctive blend of professional guidance and an 
              njoyable learning environment, Dragon Talks ensures you become the best public speaker you can be, making your journey to 
              mastery both rewarding and empowering.
            </p>
            </div>
        </div>
    </div>
</div>



<div className="box" id="box3">
    <div className="content-container">
    <img src={dragon3} alt="" className="side-image" data-aos="fade-right"></img>
        <div className="text-content">
            <h2 className="h-primary center">Unlock Financial Wisdom</h2>
            <div data-aos="fade-left">
            <p className="center">
              Embark on a journey to unlock financial wisdom with Dragon Talks! Explore our session schedule designed to provide insights 
              not only into public speaking mastery but also financial acumen. Our diverse sessions cover topics that bridge the gap 
              between effective communication and financial intelligence. Join us to discover the intersection of eloquence and financial 
              wisdom, setting the stage for a well-rounded and empowered professional journey. Check out our schedule and seize the 
              opportunity to enhance both your speaking skills and financial knowledge with Dragon Talks.
            </p>
            </div>
        </div>
    </div>
</div>



<div className="box" id="box4">
    <div className="content-container">
    <img src={dragon4} alt="" className="side-image" data-aos="fade-right"></img>
        <div className="text-content">
            <h2 className="h-primary center">Get In Touch</h2>
            <div data-aos="fade-left">
            <p className="center">
              Ready to embark on a transformative journey with Dragon Talks? Connect with us to discover how our dynamic programs can 
              elevate your public speaking skills and financial wisdom. Whether you're an aspiring speaker or someone seeking valuable 
              financial insights, our team is here to guide you. Reach out, and let's explore the possibilities together. Get in touch with 
              Dragon Talks, where your path to becoming a confident public speaker and gaining financial wisdom begins.
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

export default DragonTalksPage;