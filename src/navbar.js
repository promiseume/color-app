import React,{useState} from 'react'
import 'rc-slider/assets/index.css';
import './navbar.css'
import Slider from 'rc-slider';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar({level, handleLevelChange,handleColorFormat}) {
    const [format, setFormat] = useState('hex');
    const handleFormatChange =(e)=>{
        setFormat(e.target.value);
        handleColorFormat(e.target.value);
      }
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
        <div className='select-container'>
            <Select value={format} onChange={handleFormatChange}>
                <MenuItem value='hex'>Hex : #fffff</MenuItem>
                <MenuItem value='rgb'>RGB : (255,255,255) </MenuItem>
                <MenuItem value='rgba'>RGBA : (255,255,255, 0.1)</MenuItem>
            </Select>
        </div>
    </nav>
  )
}
