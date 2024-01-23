import styled from '@emotion/styled'
import { Box, Button, Input, Stack } from '@mui/material'
import React from 'react'
import myImage from '../Assets/col-md-6.png'
import Savvy from '../Assets/market_savyy.png'
import Stock from '../Assets/tsg.png'
import Dragon from '../Assets/dt.png'

const Ptag = styled('p')({
    position: 'relative',
    top: 120,
    left: '130px',
    fontSize: '45px',
    width: "60%",
    '@media (max-width: 768px)': {
      fontSize: "20px",
      left: '20px',
      width: '70%'
    },
})

const Img = styled('img')({
  position:'relative', 
  top: 180 , 
  right: '140px',
  height: '300px',
  width: '300px',
    '@media (max-width: 768px)': {
        top: 140,
        right: '0px',
        width: '200px',
        height: '200px'
    },
})

const Fielder = styled('fieldset')({
  position: 'relative', 
  top: '220px' , 
  left: '42px' , 
  display: 'flex' , 
  justifyContent: 'start' , 
  width: '30%' , 
  gap:'7rem' , 
  borderRadius: '20px' , 
  border: '3px solid white' , 
  padding: '20px' , 
  marginTop: '30px' , 
  marginLeft: '75px',
  '@media (max-width: 720px)': {
    flexDirection: 'column',
    width: '300px',
    justifyContent: 'center',
    gap: '1.2rem',
    alignItems: 'center',
    left: '-50px',
    top: '230px'
},
})

const Section = () => {
  return (
    <>
        <Box>
        
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          
        <Ptag>
        <p style={{fontWeight:"bolder"}}>
            <p style={{color:"#b99eff"}}>We are The Stallion Project</p> 
            <p style={{color:'white'}}>We are crafting &nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p style={{color:'white'}}>#new-age Entrepreneurs</p>
        </p>
        </Ptag>

        <Img src={myImage} alt="" />

        </Stack>

        <Input sx={{position:'relative' , top: {xs : 230 ,sm:200} , left: {xs: 13 , sm:120} , bgcolor: 'white' , borderRadius: '50px' , height: '65px' , width: {xs:'370px' , sm:'600px'} , padding: '20px'}}  
          endAdornment={<Button sx={{bgcolor: '#7F56DA' , color: 'white' , padding: '10px 25px' , borderRadius: '50px' , '&:hover' : {bgcolor: '#7F56DA'} , width: '120px'}}>Search</Button>}
          placeholder='What do you want to find' disableUnderline
        ></Input>

        <Fielder>
          <legend style={{color: 'white'}}>Our Companies</legend>
            <a href="#">
                <img src={Savvy} alt="" />
            </a>
            <a href="#">
                <img src={Stock} alt="" />
            </a>
            <a href="#">
                <img src={Dragon} alt="" />
            </a>
        </Fielder>
            
        </Box>
    </>
  )
}

export default Section