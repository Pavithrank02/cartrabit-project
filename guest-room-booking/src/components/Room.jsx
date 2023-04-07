import React from 'react'
import './Rooms.css'
import RoomList from './RoomList'

const Room = () => {
  return (
    <div className='rooms'>
      <div className='room-head'>
        <div>
          <h2>33 Rooms in Coimbatore, Tamil Nadu, India</h2>
        </div>
        <div className='frame3'>
          <p>Sort By</p>
          <select id="field" name="Owners">
            <option value="John">Relevance</option>
            <option value="Andrew">Price</option>
            <option value="John">Distance</option>
            <option value="Andrew">Date</option>
          </select>
        </div>
      </div>
      <div className='list'>

      </div>
      <RoomList />
    </div>
  )
}

export default Room