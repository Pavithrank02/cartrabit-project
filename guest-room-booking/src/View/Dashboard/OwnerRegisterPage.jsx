import React from 'react'
import HouseOwnerForm from '../../components/Form/HouseOwnerForm'
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHeader from '../../components/Headers/DashboardHeader/DashboardHeader'
import './OwnerDashboard.css'

const OwnerRegisterPage = () => {
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

export default OwnerRegisterPage