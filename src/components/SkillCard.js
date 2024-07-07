import React from 'react'
function SkillCard({skill}) {
//   const [animeWidth , setAnimeWidth] = useState(0);

//   useEffect(()=>{
//     setTimeout(() => {
//         setAnimeWidth(skill.progress);
//     }, 1000);
//   },[]);
  return (
    <div 
      style={{
        fontSize:"18px",
        fontWeight:"500",
        padding:"10px 10px",
        backgroundColor:"rgb(153,153,153,0.1)",
        borderRadius:"5px",
        width:'fit-content',
        flexShrink:0,
        minWidth:"120px",
        textAlign:"center"
      }}
      >
      {skill.skill}
      </div>
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