import styled from '@emotion/styled'
import { AppBar, Avatar, Button, List, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../Assets/TSP Logo.jpg"
import { Link } from 'react-router-dom';

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
  cursor: "pointer",
  transition: '0.5s',
  ":hover": {
    fontSize: '24px', 
    color: 'rgb(185 , 158 , 254)',
  },
})

const Navbar = () => {
  
  const[open,setOpen] = useState(false)

  return (
    <>
        <AppBar>
            <StyledToolbar>
              <Avatar sx={{height:"60px" , width:"60px"}} src={Logo} />

              <List sx={{display:{xs:"none" , sm: "block"}}}>
                <Link style={{textDecoration: 'none' , color: 'white'}} to={'/'}><Type component={"span"}>Home</Type></Link>
                <Link style={{textDecoration: 'none' , color: 'white'}} to={'/OurTeam'}><Type component={"span"}>Our Team</Type></Link>
                <Link style={{textDecoration: 'none' , color: 'white'}} to={'/DragonTalksPage'}><Type component={"span"}>Dragon Talks</Type></Link>
                <Link style={{textDecoration: 'none' , color: 'white'}} to={'/StockGyrationsPage'}><Type component={"span"}>Stock Gyrations</Type></Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={'/MarketSavvyPage'}><Type component={"span"}>Market Savvy</Type></Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} to={'/Payments'}><Type component={"span"}>Payments</Type></Link>
              </List>
              
              <Link style={{textDecoration: 'none'}} to={'/Contact'}><Button sx={{padding: "10px 30px" , borderRadius: "10px" , backgroundColor: "#2c1f4a" , display:{xs:"none" , sm: "block"} , ":hover": {fontSize: '15px',transition: '0.3s',}}} variant='contained'>Contact Us</Button></Link>
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
                <Link style={{textDecoration: 'none' , color: 'black'}} to={'/'}><MenuItem>Home</MenuItem></Link>
                <Link style={{textDecoration: 'none' , color: 'black'}} to={'/OurTeam'}><MenuItem>Our Team</MenuItem></Link>
                <Link style={{textDecoration: 'none' , color: 'black'}} to={'/DragonTalksPage'}><MenuItem>Dragon Talks</MenuItem></Link>
                <Link style={{textDecoration: 'none' , color: 'black'}} to={'/StockGyrationsPage'}><MenuItem>Stock Gyrations</MenuItem></Link>
                <Link style={{textDecoration: 'none' , color: 'black'}} to={'/MarketSavvyPage'}><MenuItem>Market Savvy</MenuItem></Link>
                <Link style={{textDecoration: 'none' , color: 'black'}} to={'/Contact'}><MenuItem>Contact Us</MenuItem></Link>
            </Menu>

        </AppBar>
    </>
  )
}

export default Navbar