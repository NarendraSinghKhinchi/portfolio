import React from 'react'
import {Box,Typography,Button} from "@mui/material"
function Contact() {
  return (
    <Box id="contact"
      sx={{padding:{xs:"50px 20px",sm:"50px 50px"}}}
    >
        <Typography className='section-heading' gutterBottom fontWeight={800} letterSpacing={3} fontSize={30} sx={{margin:"auto",width:{xs:"180px",sm:"280px"}}} >CONTACT ME</Typography>
        <div className='section-heading-underline'></div>
        <Typography variant='body2' color="rgb(153,153,153)" textAlign='center' fontSize={18}>You can reach me by submitting the form below and I will get back to you as soon as possible </Typography>
        <Box
            mt="40px"
            sx={{
                "& input":{
                    display:'block',
                    width:"99%",
                    height:"50px",
                    backgroundColor:"rgb(153,153,153,0.1)",
                    outline:"none",
                    border:"none",
                    fontSize:"18px",
                    marginBottom:"12px",
                    paddingLeft:"10px"
                },
                "& label":{
                    fontSize:"18px",
                    paddingLeft:"10px"
                },
                "& textarea":{
                    display:'block',
                    width:"99%",
                    height:"150px",
                    backgroundColor:"rgb(153,153,153,0.1)",
                    outline:"none",
                    border:"none",
                    fontSize:"18px",
                    paddingLeft:"10px",
                    resize:"none"
                }
            }}
            border="2px solid rgb(255,0,0,0.2)"
        >   
            {/* https://formsubmit.co/el/dugaye */}
            <form action="https://formsubmit.co/narendrasingh30324@gmail.com" method="POST">
                <input type="hidden" name="_next" value="https://narendra-singh-khinchi.onrender.com/" />
                <input type="hidden" name="_captcha" value="false"></input>
                <label>Name<br></br>
                    <input name="name" type='text'placeholder='Enter Your Name' ></input>
                </label>
                <label>Email<br></br>
                    <input name="email" type='text'placeholder='Enter Your Email' ></input>
                </label>
                <label>Message<br></br>
                    <textarea name="message" type='text'placeholder='Enter Your Message'></textarea>
                </label>
                <Box
                    textAlign='center'
                    padding="50px 0px 50px 0"
                >
                    <Button className='section-btn' type='submit'  variant='contained' sx={{backgroundColor:"red",width:"180px",height:"50px",fontWeight:"600",fontSize:"18px",margin:"auto !important","&:hover":{backgroundColor: "red" } }}>
                        submit
                    </Button>
                </Box>
            </form>
        </Box>
    </Box>
  )
}

export default Contact