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
            <p>Our <span style={{color: 'white'}}>Journey</span> to unveil the world of finance</p> 
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
          <p>Innovating<span style={{color: 'white'}}> Financial Insight </span>and strategy</p> 
          </Typography>
          <Typography margin={'20px'} variant="subtitle1" color="white" component="div">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt elementum ipsum ac scelerisque. Cras sed odio ac nibh iaculis pretium. Fusce sit amet quam odio. Vivamus vel augue facilisis, sagittis arcu eu, interdum nulla. Maecenas tincidunt magna sapien, et sodales lorem maximus ac. 
          Curabitur feugiat posuere ligula, sit amet ullamcorper ligula commodo eu. Praesent dignissim ullamcorper lorem eu hendrerit. Suspendisse at ligula fermentum, vestibulum enim lobortis, finibus diam
          Quisque tincidunt pulvinar orci quis sagittis.
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

export default StockGyrations