import React from 'react'

export default function Letters({word,answer,col}) {
  
  
    function colour(ch){
      if(col){

        if((word.charAt(ch))==(answer.charAt(ch))){
          return "w-10 h-10 mx-1 my-1 bg-green-500 kbd"
        }else if(answer.includes(word.charAt(ch))){
          return "w-10 h-10 mx-1 my-1 bg-yellow-500 kbd"
        }else{
          return "w-10 h-10 mx-1 my-1 bg-gray-400 kbd"
        }
      }
      else{
          return "w-10 h-10 mx-1 my-1 bg-white kbd  "
      }
  }
  
 const myfont = {
  fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,monospace",
  fontSize : "1.5em"
 }
 



  return (
    <div className='my-1 z-10 flex border-bl '>
      
    
      <div className={colour(0)} style={myfont}>{word.charAt(0).toUpperCase()}</div>
      <div className={colour(1)} style={myfont}>{word.charAt(1).toUpperCase()}</div>
      <div className={colour(2)} style={myfont}>{word.charAt(2).toUpperCase()}</div>
      <div className={colour(3)} style={myfont}>{word.charAt(3).toUpperCase()}</div>
      <div className={colour(4)} style={myfont}>{word.charAt(4).toUpperCase()}</div>
      
     
    </div>
  )
}
