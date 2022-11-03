import React, { useCallback, useState } from 'react'

export const Question7 = () => {
    const [input, setInput] = useState(""); // User Input Value
    const [Value1,setValue1] = useState(""); // First Succesor
    const [Value2, setValue2] = useState(""); // Second Succesor
    const [divStyle, setDivStyle] = useState(); //DivStyle Change Theme
    const [buttonStyle, setButtonStyle] = useState(); // Button Style Change Theme
    //useCallback Hook
    const handleInput = useCallback((e) => { 
        setInput(Number(e.target.value));
        console.log(input)
        if(e.target.value === ""){
            setValue1("");
            setValue2("");
        }
        else{
            setValue1(Number(e.target.value)+1);
            setValue2(Number(e.target.value)+2);
        } 
    },[input])
    const lightTheme = () => {
        console.log("hi")
        setDivStyle ({
            backgroundColor:"dodgerblue",
            color:"white"
        })
        setButtonStyle ({
            backgroundColor:"gray",
            color:"white"
        })
    }
    const darkTheme = () => {
        setDivStyle ({
            backgroundColor:"gray",
            color:"purple"
        })
        setButtonStyle ({
            backgroundColor:"blue",
            color:"white"
        })
    }
  return (
    <div className='container'>
        <div className='wrapper' style={divStyle}>
        <h1><u>Question-7</u></h1>
        <h2>Create the app as shown using useMemo hook. On changing the number inside the textbox, the number and its next two successors must be printed. On click of Toggle theme, the theme must change.b. Create the same app using useCallback hook.</h2>
        <hr></hr>
        <h3>7(a)</h3>
        <input type="text" className='input' placeholder="Enter Number" onChange={handleInput}/>
        <h3>Your Number : {input}</h3>
        <p className='para'>First Successor : <u>{Value1}</u></p>
        <p className='para'>Second Successor : <u>{Value2}</u></p>
        <button className='btn' onClick={lightTheme} style={buttonStyle}>Light</button>
        <button className='btn' onClick={darkTheme} style={buttonStyle}>Dark</button>
        </div>
    </div>
  )
}
