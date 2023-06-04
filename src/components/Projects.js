import React from 'react'
import { Box, Typography } from '@mui/material'
function Projects() {
  return (
    <Box id="projects"
      padding="50px 50px"
      bgcolor="rgb(153,153,153,0.1)"
    >
        <Typography gutterBottom fontWeight={800} letterSpacing={3} fontSize={30} sx={{margin:"auto",width:"220px"}} >PROJECTS</Typography>
        <div style={{margin:"0px auto 5px",width:"50px",borderTop:"8px solid red",borderRadius:"5px"}}></div>
        
    </Box>
  )
}

export default Projects