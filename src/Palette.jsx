import React, {useState} from 'react';
import ColorBox from './colorBox.jsx';
import 'rc-slider/assets/index.css';
import './palette.css';
import Slider from 'rc-slider';

export default function Palette({palette}) {
  const [level, setLevel] = useState(500);
  const handleLevelChange =(level)=>{
    setLevel(()=>level);
  }
  return (
    <div className='Palette'>
      <div className='slider'>
        <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={handleLevelChange} step={100}/>
        </div>
       <div className='Palette-color'>
        {palette.colors[level].map(color => <ColorBox backgroundcolor={color.hex} name={color.name} />)}
       </div>
    </div>
  )
}
