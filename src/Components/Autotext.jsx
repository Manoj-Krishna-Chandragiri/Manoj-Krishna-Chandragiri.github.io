import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import './Autotext.css'

const Autotext = ({val}) => {
    const [text] = useTypewriter({
        words:val,
        loop:{},
        typeSpeed:180,
        deleteSpeed:100,
    
      });
  return (
    <h1 className='h1-autotext'><span className='autotext' style={{color:'#B415FF'}}>{text}</span >
    <span style={{color:'white'}}><Cursor/></span></h1>
  )
}

export default Autotext
