import React, { useState, createContext } from 'react'
import {CurrencyConverter}  from './CurrencyConverter';
import './Question5.css'
export const UserContext = createContext();
export const Question5 = () => {
  const [amount, setAmount] = useState(""); //State for user Input
  const [select1, setSelect1] = useState(""); //State for Selecting Option "from"
  const [select2, setSelect2] = useState(""); //State for selecting option "to"
  const handleInput = (e) => {
    setAmount(e.target.value);
    console.log(e.target.value)
  };
  const handleSelect1 = (e) => {
    setSelect1(e.target.value);
    console.log(e.target.value)
  };
  const handleSelect2 = (e) => {
    setSelect2(e.target.value);
    console.log(e.target.value)
  };
  return (
    <>
    <h1 style={{textAlign:"center"}}>
        <u>Question5</u></h1>
        <h2 style={{textAlign:"center"}}>Make the currency converter you made using context,  now with useContext Hook</h2>
        <div className="container1">
      <h2>Currency Converter</h2>
      <div className="main">
        <div className="row1">
          <label htmlFor="amount">Enter Amount</label>
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="Enter Amount"
            className="input"
            onChange={handleInput}
          />
        </div>
        <br></br>
        <br></br>
        <div className="row2">
          <div className="col1">
            <label htmlFor="from"> From</label>
            <br></br>
            <select onChange={handleSelect1} className="select">
              <option value="Country">-Country-</option>
              <option value="USA">🇺🇸USD</option>
              <option value="INDIA">🇮🇳IND</option>
            </select>
          </div>
          <p className="image">⇄</p>
          <div className="col3">
            <label htmlFor="to">To</label>
            <br></br>
            <select onChange={handleSelect2} className="select">
              <option value="Country">-Country-</option>
              <option value="USA">🇺🇸USD</option>
              <option value="INDIA">🇮🇳IND</option>
            </select>
          </div>
        </div>
        </div>
        <UserContext.Provider value={{amount,select1,select2}}>
        <CurrencyConverter/>
        </UserContext.Provider>
        </div>
        </>
   
  )
}
