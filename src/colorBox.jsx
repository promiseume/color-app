import React from 'react'
import './colorBox.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function ColorBox({backgroundcolor,name}) {
  return (
    <CopyToClipboard text={backgroundcolor}>
    <div style={{background: backgroundcolor}} className='ColorBox'>
   <div className='copy-container'>
   <div className='box-container'> <span>{name}</span></div>
     <button className='copy-button'>Copy</button>
</div>
      <span className='see-more'>More</span>
    </div>
    </CopyToClipboard>
  )
}
