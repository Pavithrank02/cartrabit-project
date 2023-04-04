import React from 'react'
import img from '../assets/image/0x0.jpg'
import './CustomerBooking.css'
import DropDown from '../components/DropDown'

const CustomerBooking = () => {
  return (
    <div className='background'>
      <div className='booking-card'>
        <div className='booking-card-header'>
          <h1>Book Your Stay with Rooms</h1>
          <p>Over 20 Rooms are Available for now</p>
          <img src={img} className='booking-card-img' alt="room" />
        </div>
        <div className='rooms-selector'>
          <DropDown />
        </div>
        <div className='rooms'>
        <input type='text' />
        </div>

      </div>
    </div>
  )
}

export default CustomerBooking