import React from 'react'
import Filter from '../../components/Filters/Filter'
import Room from '../../components/Rooms/Container/Room'
import RoomHeader from '../../components/Headers/RoomHeader/RoomHeader'
import './RoomList.css'

const RoomsView = () => {
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

export default RoomsView