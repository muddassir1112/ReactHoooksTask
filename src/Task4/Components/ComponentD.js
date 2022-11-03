import React, { useContext } from 'react'
import { UserContext } from '../../App'
export const ComponentD = () => {
    const userName = useContext(UserContext)
  return (
    <div className='container'>
        <p>ComponentD</p>
        <p>↓</p>
        <p>Here is the username passed from the App Component -{'>'}{userName}</p>
        </div>
  )
}
