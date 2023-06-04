import React from 'react'
import { Box,Typography} from '@mui/material'
function About() {
  const skillsMap = ["HTML","CSS","JavaScript","React","Redux","JAVA","NPM","Git","GitHub","Material UI"] ;
  return (
    <Box id="about"
      padding="50px 50px"
      
    >
        <Typography gutterBottom fontWeight={800} letterSpacing={3} fontSize={30} sx={{margin:"auto",width:"220px"}} >ABOUT ME</Typography>
        <div style={{margin:"0px auto 5px",width:"50px",borderTop:"8px solid red",borderRadius:"5px"}}></div>
        <Box
          sx={{maxWidth:"700px",display:'flex' , justifyContent:"flex-start",flexWrap:"wrap",alignItems:"center",margin:'auto',position:"relative",paddingTop:"35px"}}
        >
        <Typography sx={{position:"absolute",top:"0",left:"10px"}} fontWeight={600} fontSize={24} >My Skills</Typography>
          {
            skillsMap.map(skill=>(
              <Typography textAlign="center" key={skill} fontWeight={700} height='50px' fontSize={18} width="150px" sx={{margin:"10px",paddingTop:"10px",borderRadius:"10px",boxSizing:"border-box",backgroundColor:"rgb(153,153,153,0.1)"}}>{skill}</Typography>
            ))
          }
        </Box>
    </Box>
  )
}

export default About