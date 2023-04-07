import React from 'react'
import Sidebar from '../components/Sidebar'
import './OwnerDashboard.css'
import DashboardHeader from '../components/DashboardHeader'
import DisplayRoom from '../components/DisplayRoom'

const OwnerDashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-container-left'>
        <Sidebar />
      </div>
      <div className='dashboard-container-right'>
        <div className='dashboard-container-right-top'>
          <DashboardHeader />

        </div>
        <div className='dashboard-container-right-bot'>

          <DisplayRoom />
        </div>
      </div>
    </div>
  )
}

export default OwnerDashboard