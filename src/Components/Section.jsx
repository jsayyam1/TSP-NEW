import styled from '@emotion/styled';
import { Box, Button, Input, Stack } from '@mui/material';
import { motion } from 'framer-motion'; 
import React from 'react';
import myImage from '../Assets/hero_image.png';
import Savvy from '../Assets/market_savyy.png';
import Stock from '../Assets/tsg.png';
import Dragon from '../Assets/dt.png';
import '../styles/style.css';
import Navbar from './Navbar';

const TiltedImg = motion.img; 

const Img = styled(TiltedImg)({
  position: 'relative',
  top: 280,
  right: '200px',
  height: '440px', 
  width: '440px', 
  '@media (max-width: 1340px)': {
    width: '250px', 
    height: '250px',
  }, 
  '@media (max-width: 1032px)': {
    width: '0px', 
    height: '0px',
  }, 
  '@media (max-width: 768px)': {
    top: 560,
    right: '0px',
    width: '250px', 
    height: '250px',
    left: -540,

  },
});

const tiltAnimation = {
  hover: {
    rotate: 10, 
  },
};

const Fielder = styled('fieldset')({
  position: 'relative',
  top: '220px',
  left: '42px',
  display: 'flex',
  justifyContent: 'start',
  width: '30%',
  gap: '7rem',
  borderRadius: '20px',
  border: '3px solid white',
  padding: '20px',
  marginTop: '30px',
  marginLeft: '75px',
  marginBottom:'50px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    width: '300px',
    justifyContent: 'center',
    gap: '1.2rem',
    alignItems: 'center',
    left: '-50px',
    top: '200px',
    paddingBottom: '30px',
    marginTop:'50px',
    marginBottom:'90px',
    transform:'translateX(15%)',
  },
  '@media (max-width: 720px)': {
    transform:'translateX(10%)',
    marginBottom:'90px',
  },
  '@media (max-width: 592px)': {
    transform:'translateX(10%)',
    marginBottom:'90px',
  },
});

const Section = () => {
  return (
    <>
    <Navbar />
      <Box className="background">
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <div className='container'>
            <p className='main-text' style={{marginBottom: '40px'}}> We Are</p>
            <p className="main-text-two" style={{marginBottom: '60px'}}>The Stallion Project</p>
            <p className='age'>We create the #new-age entrepreneurs!</p>
          </div>

          <Img
            src={myImage}
            alt=""
            whileHover="hover"
            variants={tiltAnimation}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            style={{marginRight:'-120px'}}
          />
        </Stack>

        <div className='search-box'>
          <Input
            sx={{
              position: 'relative',
              top: { xs: 230, sm: 200 },
              left: { xs: 13, sm: 120 },
              bgcolor: 'white',
              borderRadius: '50px',
              height: '65px',
              width: { xs: '380px', sm: '380px', md: '590px', lg: '590px' }, // Adjusted for lg breakpoint
              padding: '20px',
            }}
            endAdornment={
              <Button
                sx={{
                  bgcolor: '#7F56DA',
                  color: 'white',
                  padding: '10px 25px',
                  borderRadius: '50px',
                  '&:hover': { bgcolor: '#7F56DA' },
                  width: '120px',
                }}
              >
                Search
              </Button>
            }
            placeholder='What do you want to find'
            disableUnderline
          />
        </div>


        {/* <Fielder>
          <legend style={{ color: 'white' }}>Our Companies</legend>
          <a href='/MarketSavvyPage'>
            <img src={Savvy} alt="" />
          </a>
          <a href='/StockGyrationsPage'>
            <img src={Stock} alt="" />
          </a>
          <a href='/DragonTalksPage'>
            <img src={Dragon} alt="" />
          </a>
        </Fielder> */}
      </Box>
    </>
  );
};

export default Section;
