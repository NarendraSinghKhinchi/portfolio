import React from 'react'
import { Box, Typography,Stack,Button } from '@mui/material'
import exerciseImg from "../Assets/exercise.png"
import reelsImg from "../Assets/reels.png"
import galleryImg from "../Assets/gallery.png"
function Projects() {
  return (
    <Box id="projects"
      bgcolor="rgb(153,153,153,0.1)"
      sx={{padding:{xs:"50px 20px",sm:"50px 50px"}}}
    >
      <Typography className='section-heading' gutterBottom fontWeight={800} letterSpacing={3} fontSize={30} sx={{margin:"auto",width:{xs:"150px",sm:"220px"}}} >PROJECTS</Typography>
      <div className='section-heading-underline'></div>
      <Stack 
        direction={{md:"row",sm:"col"}}
        gap={{xs:2,md:20}}
        maxWidth="800px"
        margin='auto'
        marginBottom='50px'
        justifyContent='center'
        alignItems='center'
      >
        <img className='image-card' src={exerciseImg}></img>
        <Box
          minWidth="300px"
          textAlign='center'
        >
          <Typography gutterBottom fontSize={22} fontWeight={600}>Exercises Web App</Typography>
          <Typography gutterBottom variant='body2' color="rgb(153,153,153)" fontSize={15}>A modern Web application built using React where users can choose from a variety of around 900+ exercises</Typography>
          <Button  variant='contained' sx={{textTransform:"none", backgroundColor:"rgb(153,153,153,0.3)",marginTop:"15px", width:"180px",height:"50px",fontWeight:"600",fontSize:"18px","&:hover":{backgroundColor: "red",color:"white" } }}>
            <a href="https://desiakhada.onrender.com/" style={{textDecoration:"none",color:"black"}}>Live Demo</a>
          </Button>
        </Box>
      </Stack>
      <Stack 
        direction={{md:"row",sm:"col"}}
        gap={{xs:2,md:20}}
        maxWidth="800px"
        margin='auto'
        marginBottom='50px'
        justifyContent='center'
        alignItems='center'
      >
        <img className='image-card' src={reelsImg}></img>
        <Box
          minWidth="300px"
          textAlign='center'
        >
          <Typography gutterBottom fontSize={22} fontWeight={600}>Reels Clone</Typography>
          <Typography gutterBottom variant='body2' color="rgb(153,153,153)" fontSize={15}>I made clone of Instagram Reels tried to implement the same features provided by it</Typography>
          <Button  variant='contained' sx={{textTransform:"none", backgroundColor:"rgb(153,153,153,0.3)",marginTop:"15px", width:"180px",height:"50px",fontWeight:"600",fontSize:"18px","&:hover":{backgroundColor: "red",color:"white" } }}>
            <a href="https://reels-7303d.firebaseapp.com/" target='_blank' style={{textDecoration:"none",color:"black"}}>Live Demo</a>
          </Button>
        </Box>
      </Stack>
      <Stack 
        direction={{md:"row",sm:"col"}}
        gap={{xs:2,md:20}}
        maxWidth="800px"
        margin='auto'
        marginBottom='50px'
        justifyContent='center'
        alignItems='center'
      >
        <img className='image-card' src={galleryImg}></img>
        <Box
          minWidth="300px"
          textAlign='center'
        >
          <Typography gutterBottom fontSize={22} fontWeight={600}>Camera + Gallery App</Typography>
          <Typography gutterBottom variant='body2' color="rgb(153,153,153)" fontSize={15}>A web-based camera application where users can click photos.
            They can also try different filters. Users can take videos. The photos and videos are saved automatically in indexedDB storage
          </Typography>
          <Button className='section-btn'  variant='contained' sx={{textTransform:"none", backgroundColor:"rgb(153,153,153,0.3)",marginTop:"15px", width:"180px",height:"50px",fontWeight:"600",fontSize:"18px","&:hover":{backgroundColor: "red",color:"white" } }}>
            <a href="https://narendrasinghkhinchi.github.io/camera-gallery/index.html" target='_blank' style={{textDecoration:"none",color:"black"}}>Live Demo</a>
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default Projects