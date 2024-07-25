"use client"
import React, { useEffect, useRef, useState } from 'react'

export default function Rank() {

    
  const rank = useRef(false);
  const [data,setData] = useState([]);
  

  useEffect(() => {
    async function rankFetch() {
      if (rank.current) return;
      rank.current = true;
      console.log("okay");
      const response = await fetch(`https://wordle-vercel-mocha.vercel.app/rank`);
      let value = await response.json();
      setData(value);
    }
    rankFetch();
  }, []);

  return (
    <div>




<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Wins</th>
        <th>Tries</th>
      </tr>
    </thead>
    <tbody>
    {data.map((player,index) => {
        
        return(
            <>
           <tr key={index}>
        <th>{index+1}</th>
        <td>{player.name}</td>
        <td>{player.win}</td>
        <td>{player.try}</td>
      </tr>
     
     
            </>
        ) 
      })}
      
    </tbody>
  </table>
</div>




      
    </div>
  )
}
