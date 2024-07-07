import React from 'react'
import { Box,Typography, Stack} from '@mui/material'
import { Banner } from './Banner';
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
      skill:"Tailwind CSS",
      progress:75
    },
    {
      skill:"AWS",
      progress:75
    },
    {
      skill:"NGINX",
      progress:75
    },
    {
      skill:"PM2",
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
          sx={{paddingTop:"35px"}}
        >
          <Typography variant='body2' 
            color="rgb(153,153,153)" 
            fontSize={18}
            padding="15px"
          >
            Hello, my name is Narendra Singh Khinchi.I am a
            Software Developer Engineer at Medorn Ventures with a strong background in full-stack development, specializing in JavaScript technologies like ReactJS, NodeJS, and React Native. Skilled in building scalable web and mobile applications, optimizing database performance, and implementing CI/CD pipelines. Passionate about solving complex problems and enhancing user experiences through innovative tech solutions. Proven leadership in guiding teams and delivering impactful projects. Open to new opportunities in software development and eager to contribute to dynamic teams driving technological innovation.
            
          </Typography>
        </Box>
        {/* <Box
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
        </Box> */}
        
      </Stack>
      <Typography className='section-heading' gutterBottom fontWeight={600} letterSpacing={2} fontSize={25} sx={{margin:"auto",width:{xs:"150px",sm:"220px"}}} >MY SKILLS</Typography>
      
      <Banner skills={skillsMap} />
    </Box>
  )
}

export default About