import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
   
    <div>
    <button className="content" onClick={() => {setCount(count+1)}}>
      +
    </button>
    <h2 className="content">COUNT:  {count}</h2>
    <button className="content" onClick={() => {setCount(count-1)}}>
      -
    </button>
  </div>
   
  )
}

export default Counter
