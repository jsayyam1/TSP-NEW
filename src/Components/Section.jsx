import styled from '@emotion/styled';
import { Box, Button, Input, Stack } from '@mui/material';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import React, { useEffect } from 'react';
import myImage from '../Assets/col-md-6.png';
import Savvy from '../Assets/market_savyy.png';
import Stock from '../Assets/tsg.png';
import Dragon from '../Assets/dt.png';
import '../styles/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TiltedImg = motion.img; 

const Img = styled(TiltedImg)({
  position: 'relative',
  top: 280,
  right: '140px',
  height: '400px', 
  width: '400px',  

  '@media (max-width: 768px)': {
    top: 340,
    right: '0px',
    width: '250px', 
    height: '250px',
    left: -320,
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
  '@media (max-width: 720px)': {
    flexDirection: 'column',
    width: '300px',
    justifyContent: 'center',
    gap: '1.2rem',
    alignItems: 'center',
    left: '-50px',
    top: '230px',
    paddingBottom: '120px'
  },
});

const Section = () => {

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);


  return (
    <>
      <Box className="background">
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <div className='container' data-aos="fade-right">
            <h1 className='main-text'>The Stallion Project</h1>
            <p>We create #new-age entrepreneur</p>
          </div>

          <Img
            src={myImage}
            alt=""
            whileHover="hover"
            variants={tiltAnimation}
            transition={{ ease: 'easeOut', duration: 0.3 }}
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
              width: { xs: '370px', sm: '600px' },
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
          ></Input>
        </div>

        <Fielder>
          <legend style={{ color: 'white' }}>Our Companies</legend>
          <a href="#">
            <img src={Savvy} alt="" />
          </a>
          <a href="#">
            <img src={Stock} alt="" />
          </a>
          <a href="#">
            <img src={Dragon} alt="" />
          </a>
        </Fielder>
      </Box>
    </>
  );
};

export default Section;
