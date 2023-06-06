import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import{ Box, Stack, Avatar ,Typography }from '@mui/material';
import profileImg from '../Assets/Bana.png' ;

function Navbar() {
  const [menuToggle , setMenuToggle] = useState(false);

  
  const handleToggle = ()=>{
    setMenuToggle(!menuToggle);
  }
  
  const menuObj = (
        <Stack
            
        >   
            {menuToggle ? 
                (  <>
                    <a onClick={handleToggle} href="#home" >HOME</a>
                    <a onClick={handleToggle} href="#about" >ABOUT</a>
                    <a onClick={handleToggle} href="#projects" >PROJECTS</a>
                    <a onClick={handleToggle} href="#contact" >CONTACT</a>
                </>
                )
                :<></>
            }
        </Stack>
    )
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
        <div className='menu-cont'>
            <MenuIcon onClick={handleToggle} sx={{boxSizing:"content-box",padding:"15px 22px",cursor:"pointer"}}></MenuIcon>
            <Stack
                direction='column'
                alignItems='center'
                justifyContent="space-evenly"
                bgcolor="white"
                width="150px"
                sx={{
                    "& a" : {
                        color:'black',
                        textDecoration:"none",
                        margin:"0 2px 10px 2px",
                        fontWeight:"500",
                    },
                    
                }}     
                display={menuToggle ? 'flex' : 'none'}           
            >   
                <a onClick={handleToggle} href="#home" >HOME</a>
                <a onClick={handleToggle} href="#about" >ABOUT</a>
                <a onClick={handleToggle} href="#projects" >PROJECTS</a>
                <a onClick={handleToggle} href="#contact" >CONTACT</a>
            </Stack>    
        </div>
        <Stack 
            className="medium-screen-menu"
            direction='row'
            alignItems='center'
            justifyContent="space-evenly"
            bgcolor="white"
            width="500px"
            
            sx={{
                    "& a" : {
                        color:'black',
                        textDecoration:"none",
                        margin:"0 2px 10px 2px",
                        fontWeight:"500",
                    },
                    
                }}    
            >   
                <a  href="#home" >HOME</a>
                <a  href="#about" >ABOUT</a>
                <a  href="#projects" >PROJECTS</a>
                <a  href="#contact" >CONTACT</a>
            </Stack> 
    </Box>
  )
}

export default Navbar