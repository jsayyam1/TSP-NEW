import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import img from '../Assets/image-removebg-preview (3) 1.png'
import styled from '@emotion/styled'
import Q24H from '../Assets/24-hours.png'
import Section from './Section'
import Footer from './Footer'

const Cdf1 = styled('div')({
  '@media (max-width: 768px)': {
    width: '100%',
  },
  width: '100%x'
})

const Services = () => {
  return (
    <>

      <Section></Section>
      <Cdf1>
      <div style={{background: 'rgba(170.20, 166.94, 166.94, 0.10)' , position: 'relative' , top: '250px' , width: '100%'}}>
      <Card sx={{ display: 'flex' , bgcolor: 'transparent' , width: '100%'}}>
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
          <Typography sx={{color: 'white' , margin: '20px'}} component="div" variant="h5">
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

      <div style={{background: 'rgba(170.20, 166.94, 166.94, 0.10)' , position: 'relative' , top: '250px'}}>
      <Card sx={{ display: 'flex' , bgcolor: 'transparent'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' , justifyContent: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' , width: '90%'}}>
          <Typography sx={{color: 'white' , margin: '20px'}} component="div" variant="h5">
            <span style={{color: '#b99eff'}}>Our</span> Services
          </Typography>
          <Grid sx={{marginLeft: '-9px' , marginTop: '20px'}} container spacing={3}>

                  <Grid sx={{color: 'white'}} item>
                    <img src={Q24H} height={'50px'} width={'50px'} alt=""/>
                    <span style={{fontWeight: 'bold' , position:'relative' , left: '20px' , bottom: '18px'}} >Consultancy</span>
                    <Typography sx={{margin: '18px 5px'}} >Our prime focus relies on the consultancy services such as Finance planning, PR planning, digital marketing and Social media management.</Typography>
                  </Grid>

                  <Grid sx={{color: 'white'}} item>
                    <img src={Q24H} height={'50px'} width={'50px'} alt=""/>
                    <span style={{fontWeight: 'bold' , position:'relative' , left: '20px' , bottom: '18px'}} >Incubation Space</span>
                    <Typography sx={{margin: '18px 5px'}} >We firmly believe that investing in new-age startups could bring mutual growth and hence we provide incubation space and invest in our client's business in returns of a few percentage of equity.</Typography>
                  </Grid>

                  <Grid sx={{color: 'white'}} item>
                    <img src={Q24H} height={'50px'} width={'50px'} alt=""/>
                    <span style={{fontWeight: 'bold' , position:'relative' , left: '20px' , bottom: '18px'}} >Digital Marketing</span>
                    <Typography sx={{margin: '18px 5px'}} >End to End digital marketing services and Social Media Management Services</Typography>
                  </Grid>

          </Grid>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        // sx={{ width: '400px' , height: '330px' , margin: 5  ,display: {xs: 'none' , sm: 'block'}}}
        sx={{
          width: '400px',
          height: '330px',
          margin: 5,
          display: {
            xs: 'none', // Hide on extra small screens
            sm: 'block', // Show on small screens and above
          },
        }}
        image={img}
        alt="Live from space album cover"
      />
      </Card>
      </div>  
      <Footer/>
    </>
  )
}

export default Services