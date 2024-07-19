import React from 'react'
import { Box, Typography,Stack,Button } from '@mui/material'
import exerciseImg from "../Assets/exercise.png" ;
import galleryImg from '../Assets/gallery.png';
import reelsImg from '../Assets/reels.png';
import urlImg from '../Assets/url.png'
import boardImg from '../Assets/board.png';
const projects = [
  {
    name:"Exercises Web App",
    url:"https://desiakhada.onrender.com/",
    img:exerciseImg
  },
  {
    name:"Reels Clone",
    url:"https://reels-7303d.firebaseapp.com/",
    img:reelsImg
  },
  {
    name:"URL Shortner",
    url:"https://url-shortner-5jap.onrender.com",
    img:urlImg
  },
  {
    name:"Camera + Gallery",
    url:"https://narendrasinghkhinchi.github.io/camera-gallery/index.html",
    img:galleryImg
  },
  {
    name:"Open Board",
    url:"https://openboard-tjog.onrender.com",
    img:boardImg
  },

  
]
function Projects() {
  return (
    <Box id="projects"
      bgcolor="rgb(153,153,153,0.1)"
      sx={{padding:{xs:"50px 20px",sm:"50px 50px"}}}
    >
      <Typography className='section-heading' gutterBottom fontWeight={800} letterSpacing={3} fontSize={30} sx={{margin:"auto",width:{xs:"150px",sm:"220px"}}} >PROJECTS</Typography>
      <div className='section-heading-underline'></div>


      <div class="card-container">
        {projects.map((project)=>(
          <div class="card" onClick={(e)=>{
            window.open(project.url, '_blank');
          }}>
            <div className='img-wrapper'> 
              <img src={project.img} alt="0"></img>
            </div>
            
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
    </Box>
  )
}

export default Projects