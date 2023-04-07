import React from 'react'
import './RoomHeader.css'
import { FaHeart, FaSearch, FaUser } from "react-icons/fa";

const RoomHeader = () => {
  return (
    <div className='rooms-selector2'>
      <div className='Logo'>
        Guest.com
      </div>
      <div className='search'>
        <div className='frame'>
          <p>Owner Name</p>
          <select id="field" name="Owners">
            <option value="John">John</option>
            <option value="Andrew">Andrew</option>
          </select>
        </div>
        <div className='frame2'>
          <div className='container'>
            <p>Adults</p>
            <select id="field1" name="Owners">
              <option value="John">1</option>
              <option value="Andrew">2</option>
              <option value="Andrew">3</option>
            </select>
          </div>
          <div className='container'>
            <p>Childrens</p>
            <select id="field1" name="Owners">
              <option value="John">1</option>
              <option value="Andrew">2</option>
            </select>
          </div>
        </div>
        <div className='frame3'>
          <p>Rooms</p>
          <select id="field" name="Owners">
            <option value="John">1</option>
            <option value="Andrew">2</option>
            <option value="John">1</option>
            <option value="Andrew">2</option>
          </select>
        </div>
      </div>
      <div className='icons'>
        <FaUser style={{ fontSize: '20px' }} />
        <p>Customer</p>
      </div>
    </div>
  )
}

export default RoomHeader