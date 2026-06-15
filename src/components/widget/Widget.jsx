import React from 'react'

import "./widget.scss"

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const Widget = () => {
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">CUSTOMERS</span>
        <span className="counter">789</span>
        <span className="link">see details</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpOutlinedIcon />
          44%
           </div>
          <Person2OutlinedIcon className='icon'/>
        
      </div>
    </div>
  )
}

export default Widget 
