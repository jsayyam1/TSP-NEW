import { Box, Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'
import Calling from '../Assets/3d rendering of people avatars in a zoom call.png' 
import Emails from '../Assets/clarity_email-solid.png'
import Call from '../Assets/material-symbols_call.png'
import Location from '../Assets/mdi_location.png'
import Insta from '../Assets/INSTA ICON.png'
import FB from '../Assets/FB ICON.png'
import Linked from '../Assets/LINKEDIN ICON.png'
import Brand from '../Assets/TSP Branding.png'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_urygq98', 'template_5toihln', form.current, 'JhY339hk-jJGezTXP')
        .then((result) => {
            console.log(result.text);
            window.location.href = <Link to={'/Services'}></Link>;
            alert("Mail Submitted Successfully")
        }, (error) => {
            console.log(error.text);
        });

        emailjs.sendForm('service_urygq98', 'template_ok92hlu', form.current, 'JhY339hk-jJGezTXP')
        .then((result) => {
            console.log("Success");
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <Stack direction={'row'} spacing={3} justifyContent={'space-between'}>

        <Box sx={{position: 'relative' , top: '150px' , color:'white' , display: {xs: 'block' , sm: 'none'} , left: {xs: '100px'} , width: '1500px'}}>
        <img style={{position: 'relative' , right: '40px'}} src={Calling} width={250} height={160} alt=""/>
            <h2>Lets delve into</h2>
            <h2>an intriguing <span style={{color: '#5AF0C3'}}>conversation</span></h2>
            <h2>together !</h2>
        </Box>

        <Box sx={{position: 'relative' , top:'150px' , color: 'white' , left: '200px' , display: {xs: 'none' , sm: 'block'}}} flex={4} p={2} >
            <img src={Calling} alt=""/>
            <h2>Lets delve into</h2>
            <h2>an intriguing <span style={{color: '#5AF0C3'}}>conversation</span></h2>
            <h2>together !</h2>

 

<div className='abcd'>
    <div className="details_email" style={{ marginBottom: '15px',marginTop:'25px' }}>
        <img src={Emails} alt="" height="20px" width="20px" style={{ margin: "-5px 10px" }} />
        <span style={{ color: 'white' }}>thestallionproject@gmail.com</span>
    </div>

    <div className="details_contact" style={{ marginBottom: '15px' }}>
        <img src={Call} alt="" height="20px" width="20px" style={{ margin: "-5px 10px" }} />
        <span style={{ color: "white" }}>+91 8104917371</span>
    </div>

    <div className="details_location" style={{ marginBottom: '15px' }}>
        <img src={Location} alt="" height="20px" width="20px" style={{ margin: "-5px 10px" }} />
        <span style={{ color: "white" }}>Mumbai , MH</span>
    </div>
</div>



    <div className="socials" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', marginTop: '120px' }}>
        <a href="https://www.facebook.com" target="_blank" style={{ marginLeft:'-410px',marginRight:'20px', padding: '5px' }}><img src={FB} alt=""></img></a>
        <a href="https://www.instagram.com/thestallionproject/" target="_blank" style={{ margin: '0 20px', padding: '5px' }}><img src={Insta} alt=""></img></a>
        <a href="https://www.linkedin.com" target="_blank" style={{ margin: '0 20px', padding: '5px' }}><img src={Linked} alt=""></img></a>
    </div>

        </Box>

        <Box sx={{position: 'relative' , top:{xs: '350px' , sm: '150px'} , scale: {xs: '0.65' , sm: '1'} , left: {xs: '-450px' , sm: '0px'}}} flex={4} p={2}>
        <div className="right_frame">
           <div className="tsp">
            <img className="d" src={Brand} alt="" width="500px" height="140px" style={{margin: "15px"}}></img>

            <div className="contact_form">
                <form ref={form} onSubmit={sendEmail} className="ct-form">

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
                        <button type='submit' className="btn">Send Message</button>
                        {/* <Link to={'/Services'}><Typography>Go to Homepage</Typography></Link> */}
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