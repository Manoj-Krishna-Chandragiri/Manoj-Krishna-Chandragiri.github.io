import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import './Autotext.css'

const Autotext = ({val}) => {
    const [text] = useTypewriter({
        words: val,
        loop: {},
        typeSpeed: 180,
        deleteSpeed: 100,
    });
    
  return (
    <span className='autotext-wrapper'>
      <span className='autotext' style={{color:'#B415FF'}}>{text}</span>
      <span style={{color:'white'}}><Cursor/></span>
    </span>
  )
}

export default Autotext
