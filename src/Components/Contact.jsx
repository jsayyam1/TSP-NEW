import { Box, Stack } from '@mui/material'
import React from 'react'
import Calling from '../Assets/3d rendering of people avatars in a zoom call.png' 
import Email from '../Assets/clarity_email-solid.png'
import Call from '../Assets/material-symbols_call.png'
import Location from '../Assets/mdi_location.png'
import Insta from '../Assets/INSTA ICON.png'
import FB from '../Assets/FB ICON.png'
import Linked from '../Assets/LINKEDIN ICON.png'
import Brand from '../Assets/TSP Branding.png'

const Contact = () => {
  return (
    <Stack direction={'row'} spacing={3} justifyContent={'space-between'}>
        <Box sx={{position: 'relative' , top:'150px' , color: 'white' , left: '200px'}} flex={4} p={2}>
            <img src={Calling} alt=""/>
            <h2>Lets discuss</h2>
            <h2>on something <span style={{color: '#5AF0C3'}}>cool</span></h2>
            <h2>together</h2>

            <div className='abcd'>
            <div className="details_email">

                <img src={Email} alt="" height="20px" width="20px" style={{margin: "-5px 10px"}}></img>
                <span style={{color: 'white'}}>thestallionproject@gmail.com</span>

                
            </div>
            <br />
            <div className="details_contact">
                
                <img src= {Call}  alt="" height="20px" width="20px" style={{margin: "-5px 10px"}}></img>
                <span style={{color: "white"}}>+91 8104917371</span>
                
            </div>
            <br />
            <div className="details_location">

                <img src={Location} alt="" height="20px" width="20px" style={{margin: "-5px 10px"}}></img>
                <span style={{color: "white"}}>Mumbai , MH</span>

            </div>
            </div>

            <div className="socials" style={{display: 'flex' , gap: '2rem' , justifyContent: 'center' ,alignItems: 'center' , marginTop: '60px'}}>
                <a href="https://www.facebook.com" target="_blank"><img src={FB} alt=""></img></a>
                <a href="https://www.instagram.com/thestallionproject/" target="_blank"><img src={Insta} alt=""></img></a>
                <a href="https://www.linkedin.com" target="_blank"><img src={Linked} alt=""></img></a>
            </div>
        </Box>

        <Box sx={{position: 'relative' , top:'150px'}} flex={4} p={2}>
        <div className="right_frame">
           <div className="tsp">
            <img className="d" src={Brand} alt="" width="500px" height="140px" style={{margin: "15px"}}></img>

            <div className="contact_form">
                <form className="ct-form">

                    <div className="name">
                    
                    <input className="name" type="text" name="name" id="name" placeholder="Name"></input>   
                    </div>

                    <div className="contact">
                  
                    <input className="contact" type="text" name="contact" id="contact" placeholder="Contact"></input>
                    </div>


                    <div className="email">
                    
                    <input className="email" type="text" name="email" id="email" placeholder="Email"></input>
                    </div>


                    <div className="message">
                    
                    <input className="message" type="text" name="message" id="message" placeholder="Message"></input>
                    </div>

                    <div>
                        <button className="btn">Send Message</button>
                        <a href="./Landing_Page.html" class="hpg">Go to Homepage</a>
                    </div>

                </form>

            </div>

           </div>

        </div>
        </Box>
    </Stack>
  )
}

export default Contact