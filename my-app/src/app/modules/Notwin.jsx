import React, { useEffect, useRef } from 'react'

export default function Notwin({word,guesses,user}) {
 



  return (
    <div className='h-[91%]'>
      <div className='flex justify-center  align-middle w-full h-[91%] '>

<div className=" w-1/4 flex flex-col justify-center  rounded-md mt-auto mb-auto  h-32 bg-white transition-transform  ml z-50 shadow-lg">
  <h1 className=' text-center  text-4xl font-serif '>You Lost</h1>
  <h1 className=' text-center  text-xl font-serif'>The Word was "{word}"</h1>
  <h1 className=' text-center  text-xl font-serif '></h1>
</div>
</div>
</div>
  )
}
