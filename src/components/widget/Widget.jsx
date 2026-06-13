import React from 'react'

import "./widget.scss"

const Widget = () => {
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">CUSTOMERS</span>
        <span className="counter">789</span>
        <span className="link">see details</span>
      </div>
      <div className="right">right</div>
    </div>
  )
}

export default Widget
