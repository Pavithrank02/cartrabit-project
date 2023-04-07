import React from 'react'
import Filter from '../components/Filter'
import Room from '../components/Room'
import './RoomList.css'
import RoomHeader from '../components/RoomHeader'

const RoomList = () => {
  return (
    <div className='RoomContainer'>
      <RoomHeader />
    <div className='roomslist'>
      <Filter />
      <Room />
      </div>

    </div>
  )
}

export default RoomList