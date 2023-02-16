import React from 'react'
import 'rc-slider/assets/index.css';
import './navbar.css'
import Slider from 'rc-slider';

export default function Navbar({level, handleLevelChange}) {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <a href='/'>React Color Picker</a>
        </div>
        <div className='slider-container'>
            <span>Level: {level}</span>
            <div className='slider'>
        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={handleLevelChange} step={100}/>
        </div>
        </div>
    </nav>
  )
}
