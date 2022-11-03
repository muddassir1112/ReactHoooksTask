import React from 'react'
import { useState, useEffect, useRef } from 'react'  

export const Question3 = () => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    const clearTimer = (e) => {    
        setTimer('00:00:00');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds()+ deadline.getSeconds());
        deadline.setMinutes(deadline.getMinutes()+ deadline.getMinutes());
        deadline.setHours(deadline.getHours()+ deadline.getHours());
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
  return (
    <div className='container'>
        <h1><u>Question-3</u></h1>
        <h2>Create a count down clock that starts on a button click with current time as start and decrements second by second.</h2>
        <div className="count">
            <h2>{timer}</h2>
            <button className='btn' onClick={onClickReset}>Start</button>
        </div>
        </div>
  )
}
