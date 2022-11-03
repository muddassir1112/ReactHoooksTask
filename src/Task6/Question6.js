import React, { useState } from 'react'

export const Question6 = () => {
    const [counter,setCounter] = useState("");
    const handleIncreament1=()=>{
       
    }

  return (
    <div className='container'>
        <h1><u>Question6</u></h1>
        <h2> Make a functional component Parent that has two buttons 'increment 1' and 'increment 2'. Both on click, increment count by one. Along with the value of count, it also displays Odd or Even as per the value of count. Now add a loop inside the event handler of increment 1. This loop loops over a big number like 2000000000 just to introduce delay. Now, if you click on first button the delay in display is obvious but on clicking button 2 it is still there but it should not be there. So find a solution for this.</h2>
    <button className='btn' onClick={handleIncreament1}>Increament-1</button>
    {/* <p>{counter%2===0?'Even':'Odd'}</p> */}
    <button className='btn'>Increament-2</button>
    <p></p>
    </div>
  )
}
