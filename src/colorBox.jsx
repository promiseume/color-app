import React from 'react'
import './colorBox.css'

export default function ColorBox({backgroundcolor,name}) {
  return (
    <div style={{background: backgroundcolor}} className='ColorBox'>
      <span>{name}</span>
      <span>More</span>
    </div>
  )
}
