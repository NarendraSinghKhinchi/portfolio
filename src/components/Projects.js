import React from 'react'
import { Box, Typography,Stack,Button } from '@mui/material'
import exerciseImg from "../Assets/exercise.png"
import reelsImg from "../Assets/reels.png"
import galleryImg from "../Assets/gallery.png"
function Projects() {
  return (
    <Box id="projects"
      bgcolor="rgb(153,153,153,0.1)"
      sx={{padding:{sm:"20px 20px",md:"50px 50px"}}}
    >
      <Typography gutterBottom fontWeight={800} letterSpacing={3} fontSize={30} sx={{margin:"auto",width:"220px"}} >PROJECTS</Typography>
      <div style={{margin:"0px auto 25px",width:"50px",borderTop:"8px solid red",borderRadius:"5px"}}></div>
      <Stack 
        direction={{sm:"row",xs:"col"}}
        gap={{sm:10 ,xs:2,md:20}}
        maxWidth="800px"
        margin='auto'
        marginBottom='50px'
      >
        <img style={{width:"300px",border:"2px solid rgb(255,0,0,0.2)",borderRadius:"10px",height:"200px"}} src={exerciseImg}></img>
        <Box
          width={{md:"350px",xs:"250px",sm:"300px"}}
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
        direction={{sm:"row",xs:"col"}}
        gap={{sm:10 ,xs:2,md:20}}
        maxWidth="800px"
        margin='auto'
        marginBottom='50px'
      >
        <img style={{width:"300px",border:"2px solid rgb(255,0,0,0.2)",borderRadius:"10px",height:"200px"}} src={reelsImg}></img>
        <Box
          width={{md:"350px",xs:"250px",sm:"300px"}}
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
        direction={{sm:"row",xs:"col"}}
        gap={{sm:10 ,xs:2,md:20}}
        maxWidth="800px"
        margin='auto'
        marginBottom='50px'
      >
        <img style={{width:"300px",border:"2px solid rgb(255,0,0,0.2)",borderRadius:"10px",height:"200px"}} src={galleryImg}></img>
        <Box
          width={{md:"350px",xs:"250px",sm:"300px"}}
          textAlign='center'
        >
          <Typography gutterBottom fontSize={22} fontWeight={600}>Camera + Gallery App</Typography>
          <Typography gutterBottom variant='body2' color="rgb(153,153,153)" fontSize={15}>A web-based camera application where users can click photos.
            They can also try different filters. Users can take videos. The photos and videos are saved automatically in indexedDB storage
          </Typography>
          <Button  variant='contained' sx={{textTransform:"none", backgroundColor:"rgb(153,153,153,0.3)",marginTop:"15px", width:"180px",height:"50px",fontWeight:"600",fontSize:"18px","&:hover":{backgroundColor: "red",color:"white" } }}>
            <a href="https://narendrasinghkhinchi.github.io/camera-gallery/index.html" target='_blank' style={{textDecoration:"none",color:"black"}}>Live Demo</a>
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default Projects