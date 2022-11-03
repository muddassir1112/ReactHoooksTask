import React, { useState } from 'react'

export const Question2 = () => {
    var [counter,setCounter] = useState(0);
  return (
    <div className='container'> 
    <h1><u>Question2</u></h1>
    <h2> Create a counter with increment, decrement and reset functionality.</h2>
    <hr></hr>
    <div className='counter'>
            <h3>Counter</h3>
            <h2>{counter}</h2>
        <button className='btn' onClick={()=>setCounter(counter+=1)}>Increase</button>
        <button className="btn" onClick={()=>setCounter(counter = 0)}>Reset</button>
        <button className='btn' onClick={()=>setCounter(counter-=1)}>Decrease</button> 
    </div>
    </div>
  )
}
