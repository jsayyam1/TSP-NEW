import styled from '@emotion/styled'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import img from '../Assets/IMG-20231228-WA0017.jpg'
import img1 from '../Assets/IMG-20231228-WA0016.jpg'
import img2 from '../Assets/3d rendering of people avatars in a zoom call pt2.png'
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
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              image={img2}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CardContent sx={{ flex: '1 0 auto', width: '90%' }}>
                <Typography sx={{ color: 'white', margin: '20px' }} component="div" variant="h5">
                  <span style={{ color: '#b99eff' }}>Sayyam</span> Jain
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