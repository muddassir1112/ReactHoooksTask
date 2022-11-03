import React, { useMemo, useState } from 'react'

export const Question6 = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const handleIncreament1=()=>{
       setCount1 (()=>count1+1);
    }
    const OddEven = () => {
    for(var i = 0; i < 2000000000; i++ ){
      i++;
    }
    if(count1%2===0){
      return "Even"
    }
    else{
      return "ODD"
    }
  }
  const delay = useMemo(()=> OddEven(), [count1])
    const handleIncreament2 = () => {
      setCount2(() => count2+1);
    }
  return (
    <div className='container'>
        <h1><u>Question6</u></h1>
        <h2> Make a functional component Parent that has two buttons 'increment 1' and 'increment 2'. Both on click, increment count by one. Along with the value of count, it also displays Odd or Even as per the value of count. Now add a loop inside the event handler of increment 1. This loop loops over a big number like 2000000000 just to introduce delay. Now, if you click on first button the delay in display is obvious but on clicking button 2 it is still there but it should not be there. So find a solution for this.</h2>
        <h1>{delay}</h1>
    <button className='btn' onClick={handleIncreament1}>Increament1-{'>'} {count1}</button>
    <button className='btn' onClick={handleIncreament2}>Increament2-{'>'} {count2}</button>
    <p></p>
    </div>
  )
}
