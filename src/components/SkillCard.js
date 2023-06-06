import React from 'react'
import { Typography} from '@mui/material'
function SkillCard({skill}) {
//   const [animeWidth , setAnimeWidth] = useState(0);

//   useEffect(()=>{
//     setTimeout(() => {
//         setAnimeWidth(skill.progress);
//     }, 1000);
//   },[]);
  return (
    <Typography className='skill-cont' 
        textAlign="center" 
        key={skill} 
        fontWeight={700} 
        height='50px' 
        fontSize={18} 
        width="150px" 
        component="div"
        sx={{margin:"10px",
        paddingTop:"10px",
        borderRadius:"10px",
        boxSizing:"border-box",
        backgroundColor:"rgb(153,153,153,0.1)",
        position:'relative',
        }}
        >
        {skill.skill}
        
        </Typography>
  )
}

export default SkillCard

{/* <div
    style={{
    position:"absolute",
    backgroundColor:"rgb(255,0,0,0.3)",
    top:"0",
    left:"0",
    width:`${animeWidth}%`,
    height:"100%",
    borderRadius:"10px",
    transition:"1s"
    }}
></div> */}