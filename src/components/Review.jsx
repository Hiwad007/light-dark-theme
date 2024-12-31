import React, { useState } from 'react'

function Review() {
    let arr = new Array(5).fill();
    let [rating ,setRating] = useState()
  return (
    <>
    
    {
        arr.map((currValue , index)=>{
            return(
                <span
                className={index < rating ? "colored" :"uncolor"}
                onClick={()=>setRating(index+1)}><i class="fa-solid fa-star"></i></span>
            )

        })
    }
    </>
  )
}

export default Review