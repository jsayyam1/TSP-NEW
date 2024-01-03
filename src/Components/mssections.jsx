import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import img from '../Assets/image 27.png'
import img2 from '../Assets/image 18.png'
import img3 from '../Assets/image 19.png'
import img4 from '../Assets/image 21.png'
import img5 from '../Assets/image 22.png'
import styled from '@emotion/styled'
import Q24H from '../Assets/24-hours.png'

const Cdf1 = styled('div')({
  '@media (max-width: 768px)': {
    width: '100%',
  },
})

const MarketServices = () => {
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
          The approach to digital marketing mastery is very unique and different. At this market savvy, we aim to improve your business and grow with it. We believe that working together hand-in-hand is the way forward. “Your network is your networth”, is the Moto we live by. Helping you achieve this Moto is one of the foundations of MarketSavvy. <br></br> <br></br> To achieve mastery we engage in a very different and unique pathway. Our team studies your business and market conditions, getting out the best budget friendly outcome. Our unique SM3 package does the work for us. We offer social media management and marketing along with a detailed statistical analysis.
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
            <p>Our <span style={{color: 'white'}}>Approach</span> to marketing mastery</p> 
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          The approach to digital marketing mastery is very unique and different. At this market savvy, we aim to improve your business and grow with it. We believe that working together hand-in-hand is the way forward. “Your network is your networth”, is the Moto we live by. Helping you achieve this Moto is one of the foundations of MarketSavvy.
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
          <p><span style={{color: 'white'}}>Program </span> Highlights</p> 
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          Discover the unparalleled advantages of Market Savvy's unique approach to digital marketing mastery. Our program stands out with a collaborative ethos, aiming to enhance your business and foster mutual growth. With "Your network is your networth" as our guiding motto, we work hand-in-hand with you to achieve unprecedented success. Dive into our innovative SM3 package, where our team meticulously studies your business and market conditions to deliver budget-friendly solutions. From comprehensive social media management to detailed statistical analysis, our program highlights redefine the landscape of digital marketing.
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
            <p>Explore our <span style={{color: 'white'}}>Marketing Insights</span></p> 
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          Embark on a journey of discovery with Market Savvy's insightful approach to marketing. Our team delves deep into your business and market dynamics to extract the most impactful insights. With a commitment to providing unique perspectives, our marketing insights pave the way for informed decision-making. Uncover the power of our SM3 package, offering not just social media management and marketing but also a meticulous statistical analysis. Explore a new realm of possibilities as you navigate the dynamic landscape of digital marketing with Market Savvy.
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

      <div style={{background: 'rgba(170.20, 166.94, 166.94, 0.10)' , position: 'relative' , top: '7rem'}}>
      <Card sx={{ display: 'flex' , bgcolor: 'transparent'}}>
      <CardMedia
        component="img"
        sx={{width: {xs: '400px', sm:'400px'} , height: {xs: '230px',sm:'230px'} , margin: 5 , display: {
          xs: 'none', // Hide on extra small screens
          sm: 'block', // Show on small screens and above
        },}}
        image={img5}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' , justifyContent: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' , width: '90%'}}>
          <Typography sx={{color: '#b99eff' , margin: '20px'}} component="div" variant="h4">
          <p>Ready to Elevate your<span style={{color: 'white'}}> Marketing Game</span></p> 
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          Are you prepared to elevate your marketing game to new heights? Market Savvy is your partner in this transformative journey. Our collaborative ethos, guided by the mantra "Your network is your networth," ensures a synchronized approach to success. The unique SM3 package, a cornerstone of our methodology, optimizes social media management and marketing while providing in-depth statistical analysis. Ready to soar above the competition? Market Savvy is here to redefine and elevate your marketing game, unlocking a future of unparalleled success for your business.
          </Typography>
        </CardContent>
      </Box>
      </Card>
      </div>

    </>
  )
}

export default MarketServices