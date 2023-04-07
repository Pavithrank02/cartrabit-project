import React from 'react'
import HouseOwnerForm from '../components/HouseOwnerForm'
import Sidebar from '../components/Sidebar'
import './OwnerDashboard.css'
import DashboardHeader from '../components/DashboardHeader'

const OwnerDashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-container-left'>
        <Sidebar />
      </div>
      <div className='dashboard-container-right'>
        <DashboardHeader />
        <HouseOwnerForm />
      </div>
    </div>
  )
}

export default OwnerDashboard