import React from 'react'
import { useState,useEffect } from 'react'
function TypingText({text}) {
    const [typedText,setTypedText] = useState('');
    const [index , setIndex] = useState(0);
    useEffect(()=>{
        if(index < text.length){
            const timer = setTimeout(()=>{
                setTypedText(typedText + text[index]);
                setIndex(index+1);
            },150)
            return ()=>{
                clearTimeout(timer);
            }
        }
    },[text,index])
  return (
    <span>{typedText}</span>
  )
}

export default TypingText