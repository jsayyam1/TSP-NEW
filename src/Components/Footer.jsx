import styled from '@emotion/styled'
import { Box, Card, ListItem,  ListItemText, Stack } from '@mui/material'
import React from 'react'

// ListItemText = styled(ListItemText)({
//     textAlign : 'center'
// })


const Footer = () => {
  return (
    <>
        <Box>
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
        </Box>  
    </>
  )
}

export default Footer