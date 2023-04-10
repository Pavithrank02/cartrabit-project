import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHeader from '../../components/Headers/DashboardHeader/DashboardHeader'
import './OwnerDashboard.css'
import UpdateRoomDetails from '../../components/Form/UpdateRoomDetails'

const OwnerProfile = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-container-left'>
        <Sidebar />
      </div>
      <div className='dashboard-container-right'>
        <div className='dashboard-container-right-head'>
        <DashboardHeader />
        </div>
        <div className='dashboard-container-right-body'>
          <UpdateRoomDetails />
        </div>
      </div>
    </div>
  )
}

export default OwnerProfile