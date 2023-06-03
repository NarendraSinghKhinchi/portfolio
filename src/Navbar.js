import React from 'react'
import{ Box, Stack, Avatar ,Typography }from '@mui/material';
import profileImg from './Assets/Bana.png' ;
function Navbar() {
  return (
    <Box height="50px"
        bgcolor='#26f274'
    >
        <Stack direction='row'
            alignItems='center'
        >
            <Avatar
                alt="Narendra Singh"
                src={profileImg}
                sx={{ width: "50px", height: "50px",marginLeft:"10px" }}
            />
            <Typography fontSize={20} ml={1} >Narendra Singh Khinchi</Typography>
        </Stack>
        <Stack>

        </Stack>
    </Box>
  )
}

export default Navbar