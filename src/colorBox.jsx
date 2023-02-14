import React from 'react'

export default function ColorBox({backgroundcolor,name}) {
  return (
    <div style={{background: backgroundcolor}} className='ColorBox'>
      <span>{name}</span>
    </div>
  )
}
