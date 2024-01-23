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
          The Stallion Project(TSP) is a new- age business consultancy and incubation space where we help young entrepreneurs find a path to success. Unlike other consultancy firms, TSP is solely committed to the success of its clients. We at TSP work with a unique business model where we don't charge money from our clients! Rather we get personally involved in the success of the company by taking small equity! <br></br><br></br> We at TSP are also highly invested into creating and expanding new-age E-businesses under our company. If you feel like you have an idea that's unique, then TSP will help you get on the path of making your idea a reality
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
                    <Typography sx={{margin: '18px 5px'}} >Our consultancy services are designed to empower businesses with strategic planning in key areas. From meticulous finance planning to impactful PR strategies, we specialize in providing comprehensive solutions. Our expertise extends to the dynamic realm of digital marketing, where we craft campaigns that resonate with your target audience. Social media management is another forte, ensuring a strong online presence and engagement.</Typography>
                  </Grid>

                  <Grid sx={{color: 'white'}} item>
                    <img src={Q24H} height={'50px'} width={'50px'} alt=""/>
                    <span style={{fontWeight: 'bold' , position:'relative' , left: '20px' , bottom: '18px'}} >Incubation Space</span>
                    <Typography sx={{margin: '18px 5px'}} >Embracing innovation, we offer incubation space for budding startups. Recognizing the potential for mutual growth, we not only provide physical infrastructure but also invest in our client's ventures, forging a partnership that goes beyond conventional support. In return for our investment, we acquire a percentage of equity, aligning our interests with the success of the startups we nurture.</Typography>
                  </Grid>

                  <Grid sx={{color: 'white'}} item>
                    <img src={Q24H} height={'50px'} width={'50px'} alt=""/>
                    <span style={{fontWeight: 'bold' , position:'relative' , left: '20px' , bottom: '18px'}} >Digital Marketing</span>
                    <Typography sx={{margin: '18px 5px'}} >Our end-to-end digital marketing services are tailored to elevate your brand in the digital landscape. From crafting compelling content to implementing SEO strategies, we cover all facets of online visibility. Social media management is a cornerstone of our approach, ensuring your brand's voice is amplified across various platforms, fostering engagement and building a loyal audience.</Typography>
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