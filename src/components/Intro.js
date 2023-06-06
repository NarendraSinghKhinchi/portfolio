import React from 'react'
import { Box,Button,Typography } from '@mui/material'
function Intro() {
  return (
    <Box
      id="home"
      bgcolor="rgb(153,153,153,0.1)"
      mt='60px'
      padding={{sm:"100px 50px",xs:"50px 10px"}}
      textAlign="center"
    >
        <Typography className='intro-name' gutterBottom sx={{color:"#111"}} fontWeight={750} fontSize={46} textAlign={'center'} lineHeight="80.64px" letterSpacing={3}>HEY, MY NAME IS NARENDRA SINGH</Typography>
        <Typography className='intro-para' 
          fontSize={18} 
          letterSpacing={0.8} 
          fontFamily="Source Sans Pro" 
          textAlign={'center'} 
          lineHeight="31px" 
          sx={{maxWidth:"700px",margin:"auto"}}
        >
          Highly motivated engineer seeking a challenging role in web development. With strong programming skills and expertise in JavaScript and React, I aim to develop user-centric solutions that optimize functionality and enhance the user experience.
        </Typography>
        <Button className='section-btn'  variant='contained' sx={{backgroundColor:"red",width:"180px",height:"50px",fontWeight:"600",fontSize:"18px",marginTop:"50px","&:hover":{backgroundColor: "red" } }}>
            <a href="#projects" style={{textDecoration:"none",color:"white"}}>PROJECTS</a>
        </Button>
    </Box>
  )
}

export default Intro