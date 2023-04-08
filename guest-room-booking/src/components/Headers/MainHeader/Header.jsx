import React from 'react'
import './Header.css'
import { FaHeart, FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className='rooms-selector1'>
      <div className='Logo'>
        Guest.com
      </div>
      <div className='search'>
        <input type='text' placeholder='search' width='100px'/>
        <button>< FaSearch /></button>
      </div>
      <div className='icons'>
      <FaUser style={{fontSize: '20px'}}/>
      <p>Customer</p>
      </div>
    </div>
  )
}

export default Header