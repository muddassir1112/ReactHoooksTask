import React, { useContext, useState } from 'react'
import './Question5.css'
import { UserContext } from './Question5'
export const CurrencyConverter = () => {
    const temp = useContext(UserContext);
    const [result, setResult] = useState("");
    const handleConvert = (e) => {
        e.preventDefault();
        let res;
        //Validation to check the correct input
        if (isNaN(temp.amount) || temp.amount === "") {
          alert("Please Enter Amount in Digits");
        } else if (
          temp.select1 === "" ||
          temp.select2 === "" ||
          temp.select1 === "Country" ||
          temp.select2 === "Country"
        ) {
          alert("Please choose Country from list");
        } else if (temp.select1 === "USA" && temp.select2 === "INDIA") {
          res = temp.amount * 82.46;
          setResult(`${temp.amount} USD = ${res} INR`);
        } else if (temp.select1 === "INDIA" && temp.select2 === "USA") {
          res = temp.amount / 82.46;
          setResult(`${temp.amount} INR = ${res} USD`);
        } else if (temp.select1 === "INDIA" && temp.select2 === "INDIA") {
          res = temp.amount * 1;
          setResult(`${temp.amount} INR = ${res}`);
        } else if (temp.select1 === "USA" && temp.select2 === "USA") {
          res = temp.amount * 1;
          setResult(`${temp.amount} USD = ${res}`);
        } else setResult("");
      };
    
  return (
    <div className='main'>
    <div className="result">
          <p>{result}</p>
          <button className="btn2" onClick={handleConvert}>
            Get Exchange Rate
          </button>
        </div>
    </div>
  )
}
