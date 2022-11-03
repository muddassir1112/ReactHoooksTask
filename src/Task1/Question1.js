import React, { useState } from 'react'

export const Question1 = () => {
    var [count,setCount] = useState(0); //Count State 
  return (
    <div className='container'>
        <h1><u>Question1</u></h1>
        <h2>Create a Button that counts no of clicks and displays on button itself</h2>
        <hr></hr>
        <div className='count'>
    <button className='btn' onClick={()=>setCount(count+=1)}>Clicked {count} number of times</button>
    {/* <p className='para'>{count%2===0?'Clicked Even Times':'Clicked Odd Times'}</p> */}
    </div>
        </div>
  )
}
