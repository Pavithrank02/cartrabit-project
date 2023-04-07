import React from 'react'
import HouseOwnerForm from '../components/HouseOwnerForm'
import Sidebar from '../components/Sidebar'

const OwnerDashboard = () => {
  return (
    <div className='dashboard-container'>
      <Sidebar />
      <HouseOwnerForm />
    </div>
  )
}

export default OwnerDashboard