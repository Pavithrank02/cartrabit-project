import React from 'react'
import img from '../assets/image/0x0.jpg'
import './CustomerBooking.css'
import CalenderComponent from '../components/CalenderComponent'

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
        <div className='calendar'>
          <CalenderComponent />
        </div>
      </div>
    </div>
  )
}

export default CustomerBooking