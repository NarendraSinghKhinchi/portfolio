import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import{ Box, Stack, Avatar }from '@mui/material';
import profileImg from '../Assets/Bana.png' ;

function Navbar() {
  const [menuToggle , setMenuToggle] = useState(false);

  return (
    <Box height="60px"
        bgcolor='#ffffff'
        sx={{display:'flex',
            justifyContent:'space-between',
            position:"fixed",
            top:"0",
            left:"0",
            right:"0",
            zIndex:"5"
        }}
    >
        <Stack direction='row'
            alignItems='center'
            gap={5}
        >
            <Avatar
                alt="Narendra Singh"
                src={profileImg}
                sx={{ width: "50px", height: "50px",marginLeft:"10px" }}
            />
            <h3>NARENDRA&nbsp;SINGH</h3>
        </Stack>
        <Stack 
            // className="medium-screen-menu"
            direction={{sm:"row",xs:"col"}}
            alignItems='center'
            justifyContent="space-evenly"
            bgcolor="white"
            gap={8}
            paddingRight={10}
            display={{sm:"flex", xs:"none"}}
            sx={{
                "& a" : {
                    color:'black',
                    textDecoration:"none",
                    margin:"0 2px 10px 2px",
                    fontWeight:"500",
                },
                    
            }}    
        >   
            {/* <MenuIcon></MenuIcon> */}
            <a  href="#home" >HOME</a>
            <a  href="#about" >ABOUT</a>
            <a  href="#projects" >PROJECTS</a>
            <a  href="#contact" >CONTACT</a>
        </Stack> 
    </Box>
  )
}

export default Navbar