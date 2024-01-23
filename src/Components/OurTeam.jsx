import styled from '@emotion/styled'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import img from '../Assets/IMG-20231228-WA0017.jpg'
import img1 from '../Assets/IMG-20231228-WA0016.jpg'
import img2 from '../Assets/Sayyam_Jain.jpg'
import Footer from './Footer'

const Cdf1 = styled('div')({
  '@media (max-width: 768px)': {
    width: '100%',
  },
  marginBottom: '30px'
})

const OurTeam = () => {
  return (
    <>

      <h1 style={{ color: 'white', position: 'relative', top: '150px', textAlign: 'center', fontSize: '50px' }}><i>Presenting to you our ambitious team</i></h1>

      <Cdf1>
        <div style={{ background: 'rgba(170.20, 166.94, 166.94, 0.10)', position: 'relative', top: '250px' }}>
          <Card sx={{ display: 'flex', bgcolor: 'transparent' }}>
            <CardMedia
              component="img"
              sx={{
                width: { xs: '400px', sm: '400px' }, height: { xs: '230px', sm: '330px' }, margin: 5, display: {
                  xs: 'none', // Hide on extra small screens
                  sm: 'block', // Show on small screens and above
                },
              }}
              image={img1}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CardContent sx={{ flex: '1 0 auto', width: '90%' }}>
                <Typography sx={{ color: 'white', margin: '20px' }} component="div" variant="h5">
                  <span style={{ color: '#b99eff' }}>Avyay</span> Tandon
                </Typography>
                <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
                Avyay Tandon (CEO) brings a wealth of experience to help, with a concept of strategic development and commitment to fostering the culture of business. Guided by the vision for the future, he navigates the company throughout the organisation, inspiring every team member to strive for greatness.
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
      </Cdf1>

      <Cdf1>
        <div style={{ background: 'rgba(170.20, 166.94, 166.94, 0.10)', position: 'relative', top: '250px' }}>
          <Card sx={{ display: 'flex', bgcolor: 'transparent' }}>
            <CardMedia
              component="img"
              sx={{
                width: { xs: '300px', sm: '300px' }, height: { xs: '230px', sm: '330px' }, margin: 5, display: {
                  xs: 'none', // Hide on extra small screens
                  sm: 'block', // Show on small screens and above
                },
              }}
              image={img2}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CardContent sx={{ flex: '1 0 auto', width: '90%' }}>
                <Typography sx={{ color: 'white', margin: '20px' }} component="div" variant="h5">
                  <span style={{ color: '#b99eff' }}>Sayyam</span> Jain
                </Typography>
                <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
                Meet Sayyam Jain, the strategic mastermind driving operational excellence at our company. With a keen eye for efficiency and a passion for innovation, Sayyam dynamically looks for operations, ensuring seamless execution and sustainable growth. Apart from an entrepreneur Sayyam is a professional cricketer, a vivid reader and a blog writer
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
      </Cdf1>

      <Cdf1>
        <div style={{ background: 'rgba(170.20, 166.94, 166.94, 0.10)', position: 'relative', top: '250px' }}>
          <Card sx={{ display: 'flex', bgcolor: 'transparent' }}>
            <CardMedia
              component="img"
              sx={{
                width: { xs: '400px', sm: '400px' }, height: { xs: '230px', sm: '330px' }, margin: 5, display: {
                  xs: 'none', // Hide on extra small screens
                  sm: 'block', // Show on small screens and above
                },
              }}
              image={img}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CardContent sx={{ flex: '1 0 auto', width: '90%' }}>
                <Typography sx={{ color: 'white', margin: '20px' }} component="div" variant="h5">
                  <span style={{ color: '#b99eff' }}>Yash</span> Mitra
                </Typography>
                <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
                  Yash Mitra, a versatile CFO skilled in blending technical expertise with marketing, social media, and design. Beyond work, I'm dedicated to fitness, culinary arts, and literature. Committed to excellence and driven by success, I'm eager to apply my diverse skills and contribute meaningfully. I embrace challenges as opportunities, believing success comes from determination and adaptability. Let's team up to innovate and grow!
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
      </Cdf1>
      
      <Footer/>
    </>
  )
}

export default OurTeam