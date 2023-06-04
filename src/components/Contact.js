import React from 'react'
import {Box,Typography} from "@mui/material"
function Contact() {
  return (
    <Box id="contact"
      padding="50px 50px"
    >
        <Typography gutterBottom fontWeight={800} letterSpacing={3} fontSize={30} sx={{margin:"auto",width:"280px"}} >CONTACT ME</Typography>
        <div style={{margin:"0px auto 5px",width:"50px",borderTop:"8px solid red",borderRadius:"5px"}}></div>
        
    </Box>
  )
}

export default Contact