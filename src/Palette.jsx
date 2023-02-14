import React, {useEffect} from 'react'
import ColorBox from './colorBox.jsx'
import './palette.css'

export default function Palette({palette}) {
    useEffect(() => { 
   console.log(palette.colors)
    })
  return (
    <div className='Palette'>
       <div className='Palette-color'>
        {palette.colors.map(color => <ColorBox backgroundcolor={color.color} name={color.name} />)}
       </div>
    </div>
  )
}
