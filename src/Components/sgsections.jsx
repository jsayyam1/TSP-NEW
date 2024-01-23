import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import img from '../Assets/image 28.png'
import img2 from '../Assets/image 23.png'
import img3 from '../Assets/image 24.png'
import img4 from '../Assets/image 25.png'
import styled from '@emotion/styled'
import Q24H from '../Assets/24-hours.png'

const Cdf1 = styled('div')({
  '@media (max-width: 768px)': {
    width: '100%',
  },
})

const StockGyrations = () => {
  return (
    <>
    
      <Cdf1>
      <div style={{background: 'rgba(170.20, 166.94, 166.94, 0.10)' , position: 'relative' , top: '3rem'}}>
      <Card sx={{ display: 'flex' , bgcolor: 'transparent'}}>
      <CardMedia
        component="img"
        sx={{width: {xs: '400px', sm:'400px'} , height: {xs: '230px',sm:'300px'} , margin: 5 , display: {
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
          Our purpose at Stock Gyrations is to enable people to attain their financial goals by comprehending the true nature of finance. <br></br><br></br>
          We provide financial education as a high priority, making sure that each financial choice is in line with your goals.
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
            <p>Our <span style={{color: 'white'}}>Journey</span> to unveil the world of finance</p> 
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          We encourage you to join us as we begin this thrilling journey to help shape the financial future. Keep an eye out for upcoming announcements as we have a number of ground-breaking projects planned to transform the way you manage, grow, and safeguard your wealth.
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
          <p>Innovating<span style={{color: 'white'}}> Financial Insight </span>and strategy</p> 
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          At Stock Gyrations, we're reshaping financial success through innovation. Leveraging cutting-edge technology, we deliver real-time insights and personalized strategies tailored to your unique financial goals. Our commitment to financial education ensures you make informed decisions, empowering you on your wealth-building journey. With a proactive approach to risk management, we mitigate uncertainties, providing a secure financial environment. At Stock Gyrations, innovation isn't just a goal—it's our foundation for revolutionizing the way you approach and achieve financial success. Join us on this transformative journey toward your financial aspirations.
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
            <p>Connect with <span style={{color: 'white'}}>Stock Gyrations</span> for financial excellence</p> 
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          Connect with Stock Gyrations for unparalleled financial excellence. We leverage cutting-edge technology and personalized strategies to align with your unique goals. Our commitment to financial education empowers you to make informed decisions. With proactive risk management, we ensure a secure path to financial success. Join us at Stock Gyrations and redefine your journey towards financial excellence.
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

export default StockGyrations