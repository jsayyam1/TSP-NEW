import { Box, Button , Grid, Input , Typography } from '@mui/material'
import React from 'react'
import TSP from '../Assets/TSP Logo.jpg'
import { Mail } from '@mui/icons-material'
import FTLG from '../Assets/3d rendering of people avatars in a zoom call.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Icon = styled(Grid)(()=>({
    display: "flex",
    gap: "15px",
    alignItems: "center",
    justifyContent:'center'
}));

const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/thestallionproject/', '_blank');
  };

const Footer = () => {
  return (
    <>
            <Grid bgcolor={'#323131'} container spacing={3} sx={{ width: '100%' , height: {xs: '600px'  , sm:'300px'} , position: 'relative' , top: '280px' ,color: 'white'}}>

                <Grid sx={{display: {xs: 'none' , sm: 'block'} , position: 'relative' , left: '20px'}} display={'flex'} margin={'70px 20px'} justifyContent={'center'}>
                    <img src={TSP} alt='' width={'150px'} height={'150px'} style={{borderRadius: '50%'}}></img>
                </Grid>

                <Grid item >
                    <Typography variant='h4' sx={{textAlign: 'center',margin: '15px' , paddingBottom: '20px '}}>Home</Typography>
                    <Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold', margin: '15px' , paddingBottom: '10px'}} >About Us</Typography>
                    <Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold', margin: '15px' , paddingBottom: '10px'}} >Why Choose us</Typography>
                    <Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold', margin: '15px' , paddingBottom: '10px'}} >Pricing</Typography>
                </Grid>

                <Grid item>
                    <Typography variant='h4' sx={{textAlign: 'center',margin: '15px' , paddingBottom: '20px '}}>Resources</Typography>
                    <Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold' , margin: '15px' , paddingBottom: '10px'}} >Privacy Policy</Typography>
                    <Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold' , margin: '15px' , paddingBottom: '10px'}} >Terms and Conditions</Typography>
                    <Link style={{textDecoration: 'none' , color: 'white'}} to={'/Contact'}><Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold' , margin: '15px' , paddingBottom: '10px'}} >Contact Us</Typography></Link>
                </Grid> 

                <Grid sx={{marginLeft: {xs: '0px' , sm: '60px'}}} item>
                    <Typography variant='h4' sx={{textAlign: 'center',margin: '15px'}}>The Stallion Project</Typography>
                    <Typography variant='h6' sx={{margin: '15px 18px'}}>Get in touch with us</Typography>
                </Grid> 

                <Grid sx={{marginLeft: {xs: '0px' , sm: '60px'}}} item>
                    <Input sx={{position:'relative' , top: {xs : -60, sm: '120px'} , left: {xs: 18 , sm:-396} , bgcolor: 'white' , borderRadius: '10px' , height: '55px' , width: {xs:'300px' , sm:'300px'} , padding: '10px'}}  
             startAdornment = {<Mail sx={{margin: '5px'}}/>} endAdornment={<Button sx={{bgcolor: '#0b151d' , color: 'white' , padding: '8px 25px' , borderRadius: '10px' , '&:hover' : {bgcolor: '#7F56DA'} , width: '120px'}}>Search</Button>}
            placeholder='Enter your email' disableUnderline
                    ></Input>
                </Grid>

            </Grid>

            <Typography color={'white'} position={'relative'} fontWeight={'bolder'} top={'300px'} textAlign={'center'}>Copyright @ 2023 : - The Stallion Project</Typography>
            <Icon>

            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" onClick={handleLinkedInClick}>
                <LinkedInIcon sx={{ position: 'relative', top: '330px', color: 'white' }} />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" onClick={handleInstagramClick}>
                <InstagramIcon sx={{ position: 'relative', top: '330px', color: 'white' }} />
            </a>

            </Icon>

    </>
  )
}

export default Footer