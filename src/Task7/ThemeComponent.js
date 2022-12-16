import React from 'react'
import { memo } from 'react'

const ThemeComponent = (props) => {
  return (
    <div className='container'>
      <button className="btn" onClick={props.LightTheme} style={props.ButtonTheme}>
          Light
        </button>
        <button className="btn" onClick={props.DarkTheme} style={props.ButtonTheme}>
          Dark
        </button>
    </div>
  )
}

export default memo(ThemeComponent)