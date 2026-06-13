import React from 'react'
import "./navbar.scss"

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbarContainer">
        <div className="search">
          <input type="text" placeholder='search' />
          <SearchOutlinedIcon />

        </div>
        <div className="items">items</div>
      </div>
    </div>
  )
}

export default Navbar
