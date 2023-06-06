import React from 'react'
import { Box,Typography, Stack} from '@mui/material'
import SkillCard from './SkillCard';
function About() {
  const skillsMap = [{
      skill:"HTML",
      progress:50
    },
    {
      skill:"CSS",
      progress:60
    },
    {
      skill:"JavaScript",
      progress:80
    },
    {
      skill:"React",
      progress:75
    },
    {
      skill:"Redux",
      progress:30
    },
    {
      skill:"JAVA",
      progress:58
    },
    {
      skill:"NPM",
      progress:85
    },
    {
      skill:"Git",
      progress:25
    },
    {
      skill:"GitHub",
      progress:85
    },
    {
      skill:"Material UI",
      progress:75
    },
  ]
 
  return (
    <Box id="about"
      padding={{sm:"50px 50px",xs:"50px 0px"}}
    >
      <Typography className='section-heading' gutterBottom fontWeight={800} letterSpacing={3} fontSize={30} sx={{margin:"auto",width:{xs:"150px",sm:"220px"}}} >ABOUT ME</Typography>
      <div className='section-heading-underline'></div>
      <Stack
        direction={{md:"row",sm:"col"}}
        gap={2}
        maxWidth="800px"
        margin='auto'
        marginBottom='50px'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          sx={{maxWidth:{md:"350px",sm:"90%"},
          paddingTop:"35px"}}
        >
          <Typography variant='body2' 
            color="rgb(153,153,153)" 
            fontSize={18}
            padding="15px"
          >
            Hello, my name is Narendra Singh Khinchi. 
            I am an aspiring Electronics and Communication engineer with a strong foundation in programming and web development. 
            Currently pursuing a Bachelor of Technology degree at Technocrats Institute of Technology, Bhopal.
            I have a good understanding of web development techonologies like HTML, CSS, JavaScript and React.
            I am well versed with several tools like Git, Github, Material and more.
            I am good at data structures and algorithms my current contest rating on leetcode is 1500.
            I am actively looking for internship opportunities in the development field.
            
          </Typography>
        </Box>
        <Box
          sx={{maxWidth:{md:"450px",sm:"90%"},
          display:'flex' , 
          justifyContent:"space-evenly",
          flexWrap:"wrap",
          margin:'auto',
          position:"relative",
          paddingTop:"35px"}}
        >
        <Typography sx={{position:"absolute",top:"0",left:"10px"}} fontWeight={600} fontSize={24} >My Skills</Typography>
        {
          skillsMap.map(skill=>(
            <SkillCard key={skill.skill} skill={skill}></SkillCard>
          ))
        }
        </Box>
        
      </Stack>
      
    </Box>
  )
}

export default About