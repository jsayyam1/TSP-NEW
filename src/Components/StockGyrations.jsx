import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Aboutus from './sgsections';
import styled from '@emotion/styled';
import BG from '../Assets/STOCK_LOGO.jpg';

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
  return (
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
      <Aboutus />
      <Footer/>


      
    </PageContainer>
  );
};

export default StockGyrationsPage;
