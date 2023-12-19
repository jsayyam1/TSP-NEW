import { Button , Grid, Input , Typography } from '@mui/material'
import React from 'react'
import TSP from '../Assets/TSP Logo.jpg'
import { Mail } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
        {/* <Box>
            <Card sx={{bgcolor: 'black' , position: 'relative' , top: '250px'}}>
            
            <Stack direction="row" spacing={9}>
            <Stack direction={'column'} spacing={0} color={'white'} justifyContent={'space-between'}>

                <ListItem>
                
                    <ListItemText><h3>Company</h3></ListItemText>
                
                </ListItem>
                
                <ListItem>
                
                    <ListItemText><h6 style={{textAlign:'center'}}>About us</h6></ListItemText>
                
                </ListItem>

                <ListItem>
                
                    <ListItemText><h6 style={{textAlign:'center'}}>Why Choose us</h6></ListItemText>
                
                </ListItem>

                <ListItem>
                
                    <ListItemText><h6 style={{textAlign:'center'}}>Pricing</h6></ListItemText>
                
                </ListItem>

            </Stack>

            <Stack direction={'column'} spacing={0} color={'white'} justifyContent={'space-between'}>

                <ListItem>
                
                    <ListItemText><h3>Resources</h3></ListItemText>
                
                </ListItem>
                
                <ListItem>
                
                    <ListItemText><h6 style={{textAlign:'center'}}>About us</h6></ListItemText>
                
                </ListItem>

                <ListItem>
                
                    <ListItemText><h6 style={{textAlign:'center'}}>Why Choose us</h6></ListItemText>
                
                </ListItem>

                <ListItem>
                
                    <ListItemText><h6 style={{textAlign:'center'}}>Pricing</h6></ListItemText>
                
                </ListItem>

                <ListItem>
                
                    <ListItemText><h6 style={{textAlign:'center'}}>Pricing</h6></ListItemText>
                
                </ListItem>

            </Stack>
            </Stack>

            </Card>
        </Box>   */}

        {/* <Container sx={{position: 'relative' , top: '280px' ,color: 'white'}} > */}
            <Grid bgcolor={'#323131'} container spacing={3} sx={{ width: '100%' , height: {xs: '800px'  , sm:'300px'} , position: 'relative' , top: '280px' ,color: 'white'}}>

                <Grid display={'flex'} margin={'50px 10px'} justifyContent={'center'} item xs={12} sm={6} md={4} lg={3} >
                    <img src={TSP} alt='' width={'150px'} height={'150px'} style={{borderRadius: '50%'}}></img>
                </Grid>

                <Grid item >
                    <Typography variant='h4' sx={{textAlign: 'center',margin: '15px' , paddingBottom: '20px '}}>Home</Typography>
                    <Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold', margin: '15px' , paddingBottom: '10px'}} >About Us</Typography>
                    <Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold', margin: '15px' , paddingBottom: '10px'}} >Why Choose us</Typography>
                    <Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold', margin: '15px' , paddingBottom: '10px'}} >Pricing</Typography>
                </Grid>

                <Grid item>
                    <Typography variant='h4' sx={{textAlign: 'center',margin: '15px' , paddingBottom: '20px '}}>Resources</Typography>
                    <Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold' , margin: '15px' , paddingBottom: '10px'}} >Privacy Policy</Typography>
                    <Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold' , margin: '15px' , paddingBottom: '10px'}} >Terms and Conditions</Typography>
                    <Typography variant='h6' sx={{textAlign: 'center' , fontSize: '12px' , fontWeight: 'bold' , margin: '15px' , paddingBottom: '10px'}} >Contact Us</Typography>
                </Grid> 

                <Grid sx={{marginLeft: {xs: '0px' , sm: '60px'}}} item>
                    <Typography variant='h4' sx={{textAlign: 'center',margin: '15px'}}>The Stallion Project</Typography>
                    <Typography variant='h6' sx={{margin: '15px 18px'}}>Get in touch with us</Typography>
                </Grid> 

                <Grid sx={{marginLeft: {xs: '0px' , sm: '60px'}}} item>
                    <Input sx={{position:'relative' , top: {xs : -32, sm: '-150px'} , left: {xs: 18 , sm:779} , bgcolor: 'white' , borderRadius: '10px' , height: '55px' , width: {xs:'290px' , sm:'300px'} , padding: '10px'}}  
             startAdornment = {<Mail sx={{margin: '5px'}}/>} endAdornment={<Button sx={{bgcolor: '#0b151d' , color: 'white' , padding: '8px 25px' , borderRadius: '10px' , '&:hover' : {bgcolor: '#7F56DA'} , width: '120px'}}>Search</Button>}
            placeholder='Enter your email' disableUnderline
                    ></Input>
                </Grid>

                <Grid margin={'50px 10px'} item>
                    <img src={TSP} alt='' width={'90px'} height={'90px'} style={{borderRadius: '50%'}}></img>
                </Grid>

            </Grid>
        {/* </Container> */}

    </>
  )
}

export default Footer