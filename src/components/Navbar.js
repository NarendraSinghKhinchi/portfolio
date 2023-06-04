import React from 'react'
import { Link } from "react-router-dom";
import{ Box, Stack, Avatar ,Typography }from '@mui/material';
import profileImg from '../Assets/Bana.png' ;

function Navbar() {
  return (
    <Box height="60px"
        bgcolor='#ffffff'
        sx={{display:'flex',justifyContent:'space-between',position:"fixed",top:"0",left:"0",right:"0",zIndex:"5"}}
    >
        <Stack direction='row'
            alignItems='center'
        >
            <Avatar
                alt="Narendra Singh"
                src={profileImg}
                sx={{ width: "45px", height: "45px",marginLeft:"10px" }}
            />
            <Typography fontSize={15} ml={1} fontWeight={525}> NARENDRA SINGH KHINCHI </Typography>
        </Stack>
        <Stack
            direction='row'
            alignItems='center'
            justifyContent="space-evenly"
            width="500px"
        >
            <a href="#home" style={{color:'black',textDecoration:"none",marginRight:"2px",fontWeight:"500"}}>HOME</a>
            <a href="#about" style={{color:'black',textDecoration:"none",marginRight:"2px",fontWeight:"500"}}>ABOUT</a>
            <a href="#projects" style={{color:'black',textDecoration:"none",marginRight:"2px",fontWeight:"500"}}>PROJECTS</a>
            <a href="#contact" style={{color:'black',textDecoration:"none",marginRight:"2px",fontWeight:"500"}}>CONTACT</a>
        </Stack>
    </Box>
  )
}

export default Navbar