import React from 'react'
import HouseOwnerForm from '../../components/Form/HouseOwnerForm'
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardHeader from '../../components/Headers/DashboardHeader/DashboardHeader'
import './OwnerDashboard.css'
import FileUpload from '../../components/Fileupload/FileUpload'

const OwnerGallery = () => {
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
        <FileUpload />
        </div>
      </div>
    </div>
  )
}

export default OwnerGallery