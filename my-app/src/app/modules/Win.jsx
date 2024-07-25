"use client"
import React, { useEffect, useRef } from 'react'


export default function Win({word,guesses,user}) {

  const addedwin = useRef(false);

  useEffect(() => {
    async function WIN() {
      if (addedwin.current) return;
      addedwin.current = true;
      console.log("okay");
      const response = await fetch(`https://wordle-vercel-mocha.vercel.app/win/${user}`, {
        method: "PATCH"
      });
    }
    WIN();
  }, [user]);






    
  return (
    <div className='flex justify-center  align-middle w-full h-screen'>
      
    <div className=" w-1/4 flex flex-col justify-center  rounded-md mt-auto mb-auto  h-32 bg-white transition-transform  ml z-50 shadow-lg">
      <h1 className=' text-center  text-4xl font-serif '>You Won</h1>
      <h1 className=' text-center  text-xl font-serif'>The Word was "{word}"</h1>
      <h1 className=' text-center  text-xl font-serif '>You guessed it in {guesses-1} guesses</h1>
    </div>
    </div>
  )
}
