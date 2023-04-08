import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHeader from '../../components/Headers/DashboardHeader/DashboardHeader'
import DisplayRoom from '../../components/DisplayRoom/DisplayRoom'
import './OwnerDashboard.css'

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