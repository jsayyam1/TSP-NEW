import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import img from '../Assets/dtabout.png'
import img2 from '../Assets/dtapproach.png'
import img3 from '../Assets/dtsession.png'
import img4 from '../Assets/dtend.png'
import styled from '@emotion/styled'
import Q24H from '../Assets/24-hours.png'

const Cdf1 = styled('div')({
  '@media (max-width: 768px)': {
    width: '100%',
  },
})

const Services = () => {
  return (
    <>
    
      <Cdf1>
      <div style={{background: 'rgba(170.20, 166.94, 166.94, 0.10)' , position: 'relative' , top: '3rem'}}>
      <Card sx={{ display: 'flex' , bgcolor: 'transparent'}}>
      <CardMedia
        component="img"
        sx={{width: {xs: '400px', sm:'400px'} , height: {xs: '230px',sm:'330px'} , margin: 5 , display: {
          xs: 'none', // Hide on extra small screens
          sm: 'block', // Show on small screens and above
        },}}
        image={img}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' , justifyContent: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' , width: '90%'}}>
          <Typography sx={{color: 'white' , margin: '20px'}} component="div" variant="h4">
            <span style={{color: '#b99eff'}}>About</span> Us
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Box>
      </Card>
      </div>  
      </Cdf1>

      <div style={{background: 'rgba(170.20, 166.94, 166.94, 0.10)' , position: 'relative' , top: '4rem'}}>
      <Card sx={{ display: 'flex' , bgcolor: 'transparent'}}>

      <Box sx={{ display: 'flex', flexDirection: 'column' , justifyContent: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' , width: '90%'}}>
          <Typography sx={{color: '#b99eff' , margin: '20px'}} component="div" variant="h4">
            <p>Our <span style={{color: 'white'}}>Approach</span> to public speaking mastery</p> 
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Box>
      
      <CardMedia
        component="img"
        // sx={{ width: '400px' , height: '330px' , margin: 5  ,display: {xs: 'none' , sm: 'block'}}}
        sx={{
          width: '300px',
          height: '220px',
          margin: 5,
          display: {
            xs: 'none', // Hide on extra small screens
            sm: 'block', // Show on small screens and above
          },
        }}
        image={img2}
        alt="Live from space album cover"
      />
      </Card>
      </div> 

        <div style={{background: 'rgba(170.20, 166.94, 166.94, 0.10)' , position: 'relative' , top: '5rem'}}>
      <Card sx={{ display: 'flex' , bgcolor: 'transparent'}}>
      <CardMedia
        component="img"
        sx={{width: {xs: '400px', sm:'400px'} , height: {xs: '230px',sm:'230px'} , margin: 5 , display: {
          xs: 'none', // Hide on extra small screens
          sm: 'block', // Show on small screens and above
        },}}
        image={img3}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' , justifyContent: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' , width: '90%'}}>
          <Typography sx={{color: '#b99eff' , margin: '20px'}} component="div" variant="h4">
          <p>Unlock financial wisdom: Check out Dragon Talks'<span style={{color: 'white'}}> Session Schedule!</span> </p> 
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Box>
      </Card>
      </div>

      <div style={{background: 'rgba(170.20, 166.94, 166.94, 0.10)' , position: 'relative' , top: '6rem'}}>
      <Card sx={{ display: 'flex' , bgcolor: 'transparent'}}>

      <Box sx={{ display: 'flex', flexDirection: 'column' , justifyContent: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' , width: '90%'}}>
          <Typography sx={{color: '#b99eff' , margin: '20px'}} component="div" variant="h4">
            <p>Get in <span style={{color: 'white'}}>Touch</span></p> 
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Box>
      
      <CardMedia
        component="img"
        // sx={{ width: '400px' , height: '330px' , margin: 5  ,display: {xs: 'none' , sm: 'block'}}}
        sx={{
          width: '300px',
          height: '220px',
          margin: 5,
          display: {
            xs: 'none', // Hide on extra small screens
            sm: 'block', // Show on small screens and above
          },
        }}
        image={img4}
        alt="Live from space album cover"
      />
      </Card>
      </div> 

    </>
  )
}

export default Services