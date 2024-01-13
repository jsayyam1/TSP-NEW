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
          At Dragon Talks, we cultivate a vibrant and supportive atmosphere dedicated to refining your public speaking prowess. Led by seasoned trainers, our program covers essential facets such as body language, voice modulation, and presentation structure. Gain skills to engage audiences, conquer nerves, and adeptly handle challenging queries. <br></br><br></br> Our commitment extends beyond the professional realm—we believe learning should be enjoyable. Balancing informativeness and entertainment, our program facilitates connections among participants, fostering a community where experiences are shared, and insights are gained. <br></br><br></br> Embrace a collaborative spirit as you interact with like-minded individuals, drawing inspiration from their triumphs and overcoming challenges together. At Dragon Talks, we redefine the learning experience by infusing enjoyment into every session. <br></br> And, of course, relish the thrill of delivering impactful presentations that captivate and resonate. With Dragon Talks, turning that vision into reality becomes second nature. Join us in creating a fun, supportive environment where you can truly become the best public speaker you aspire to be!
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
          At Dragon Talks, we craft a unique approach to public speaking mastery, emphasizing a blend of skill development and a supportive atmosphere. Our experienced trainers lead you through the fundamentals, covering essential aspects like body language, voice modulation, and presentation structure. We go beyond the basics, teaching you to engage your audience, conquer nervousness, and adeptly navigate challenging questions. Through our distinctive blend of professional guidance and an enjoyable learning environment, Dragon Talks ensures you become the best public speaker you can be, making your journey to mastery both rewarding and empowering.
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
          Embark on a journey to unlock financial wisdom with Dragon Talks! Explore our session schedule designed to provide insights not only into public speaking mastery but also financial acumen. Our diverse sessions cover topics that bridge the gap between effective communication and financial intelligence. Join us to discover the intersection of eloquence and financial wisdom, setting the stage for a well-rounded and empowered professional journey. Check out our schedule and seize the opportunity to enhance both your speaking skills and financial knowledge with Dragon Talks.
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
          Ready to embark on a transformative journey with Dragon Talks? Connect with us to discover how our dynamic programs can elevate your public speaking skills and financial wisdom. Whether you're an aspiring speaker or someone seeking valuable financial insights, our team is here to guide you. Reach out, and let's explore the possibilities together. Get in touch with Dragon Talks, where your path to becoming a confident public speaker and gaining financial wisdom begins.
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