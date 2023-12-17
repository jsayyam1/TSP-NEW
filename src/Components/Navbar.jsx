import styled from '@emotion/styled'
import { AppBar, Avatar, Button, List, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../Assets/TSP Logo.jpg"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#3f0844",
  height: "100px"
})

const Type = styled(Typography)({
  margin: 20,
  fontWeight: "bold",
  fontSize: "22px",
  padding: "5px",
  '&:hover': "scale(2.5)",
  cursor: "pointer"
})

const Navbar = () => {

  
  const[open,setOpen] = useState(false)

  return (
    <>
        <AppBar>
            <StyledToolbar>
              <>
              <Avatar sx={{height:"60px" , width:"60px"}} src={Logo} />
              </>
              <List sx={{display:{xs:"none" , sm: "block"}}}>
                <Type component={"span"}>Home</Type>
                <Type component={"span"}>Our Team</Type>
                <Type component={"span"}>Dragon Talks</Type>
                <Type component={"span"}>Stock Gyrations</Type>
                <Type component={"span"}>Market Savvy</Type>
              </List>
              <Button sx={{padding: "10px 30px" , borderRadius: "10px" , backgroundColor: "#2c1f4a" , display:{xs:"none" , sm: "block"}}} variant='contained'>Contact Us</Button>
              <MenuIcon sx={{display:{xs:"block" , sm:"none"}}} onClick={()=> setOpen(true)}/>
            </StyledToolbar>
            
            <Menu open={open} onClose={(e) => setOpen(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}>
                <MenuItem>Home</MenuItem>
                <MenuItem>Our Team</MenuItem>
                <MenuItem>Dragon Talks</MenuItem>
                <MenuItem>Stock Gyrations</MenuItem>
                <MenuItem>Market Savvy</MenuItem>
            </Menu>

        </AppBar>
    </>
  )
}

export default Navbar