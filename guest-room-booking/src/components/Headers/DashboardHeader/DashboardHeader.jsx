import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './Dashboard.css'

const DashboardHeader = () => {
  const params = useParams()
  const navigate = useNavigate()
  return (
    <div className='dashheader'>
      <div className='Logo1'>
        Guest.com
      </div>
      <div className='icons1'>
        <FaUser style={{ fontSize: '20px' }} onClick={() => navigate('/')}/>
        <p >{params.name}</p>
      </div>
    </div>
  )
}

export default DashboardHeader