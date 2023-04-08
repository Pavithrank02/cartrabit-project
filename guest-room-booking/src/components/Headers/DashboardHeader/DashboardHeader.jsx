import React from 'react'
import { FaUser } from 'react-icons/fa'
import './Dashboard.css'

const DashboardHeader = () => {
  return (
    <div className='dashheader'>
      <div className='Logo1'>
        Guest.com
      </div>
      <div className='icons1'>
        <FaUser style={{ fontSize: '20px' }} />
        <p>Customer</p>
      </div>
    </div>
  )
}

export default DashboardHeader