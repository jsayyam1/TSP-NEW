import styled from '@emotion/styled'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import img from '../Assets/image-removebg-preview (3) 1.png'

const Cdf1 = styled('div')({
    '@media (max-width: 768px)': {
      width: '100%',
    },
    marginBottom: '30px'
  })

const OurTeam = () => {
  return (
    <>
    
    <h1 style={{color: 'white' , position: 'relative' , top: '150px' , textAlign: 'center' , fontSize: '50px'}}><i>Presenting to you our ambitious team</i></h1>

    <Cdf1>
      <div style={{background: 'rgba(170.20, 166.94, 166.94, 0.10)' , position: 'relative' , top: '250px'}}>
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
          <Typography sx={{color: 'white' , margin: '20px'}} component="div" variant="h5">
            <span style={{color: '#b99eff'}}>Avyay</span> Tandon
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Box>
      </Card>
      </div>  
      </Cdf1>

    <Cdf1>
      <div style={{background: 'rgba(170.20, 166.94, 166.94, 0.10)' , position: 'relative' , top: '250px'}}>
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
          <Typography sx={{color: 'white' , margin: '20px'}} component="div" variant="h5">
            <span style={{color: '#b99eff'}}>Sayyam</span> Jain
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Box>
      </Card>
      </div>  
      </Cdf1>

    <Cdf1>
      <div style={{background: 'rgba(170.20, 166.94, 166.94, 0.10)' , position: 'relative' , top: '250px'}}>
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
          <Typography sx={{color: 'white' , margin: '20px'}} component="div" variant="h5">
            <span style={{color: '#b99eff'}}>Yash</span> Mitra
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Box>
      </Card>
      </div>  
      </Cdf1>
    </>
  )
}

export default OurTeam