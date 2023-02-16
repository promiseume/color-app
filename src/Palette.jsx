import React, {useState} from 'react';
import ColorBox from './colorBox.jsx';
import './palette.css';
import Navbar from './navbar.js';

export default function Palette({palette}) {
  const [level, setLevel] = useState(500);
  const handleLevelChange =(level)=>{
    setLevel(()=>level);
  }
  return (
    <div className='Palette'>
     <Navbar level={level} handleLevelChange={handleLevelChange}/>
       <div className='Palette-color'>
        {palette.colors[level].map(color => <ColorBox backgroundcolor={color.hex} name={color.name} />)}
       </div>
    </div>
  )
}
