import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './View/Home/Home';
import CustomerLoginPage from './components/Login/CustomerLoginPage';
import Registration from './components/Registration/Registration';
import CustomerBooking from './View/CustomerBooking/CustomerBooking'
import OwnerRegisterPage from './View/Dashboard/OwnerRegisterPage'
import RoomsView from './View/RoomView/RoomsView';
import OwnerDashboard from './View/Dashboard/OwnerDashboard';
import OwnerRegistration from './components/Registration/OwnerRegistration'
import RoomDetails from './View/RoomView/RoomDetails';
import FileUpload from './components/FileUpload';
import OwnerGallery from './View/Dashboard/OwnerGallery';
import OwnerProfile from './View/Dashboard/OwnerProfile';
import './App.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<CustomerLoginPage />} />
        <Route path="/customerregister" element={<Registration />} />
        <Route path="/ownerregister" element={<OwnerRegistration />} />
        <Route path="/booking/:id" element={<CustomerBooking />} />
        <Route path="/dashboard/:name" element={<OwnerDashboard />} />
        <Route path="/gallery/:name" element={<OwnerGallery />} />
        <Route path="/profile/:name" element={<OwnerProfile/>} />
        <Route path="/registerroom/:name" element={<OwnerRegisterPage />} />
        <Route path="/roomlist" element={<RoomsView />} />
        <Route path="/viewdetails/:id" element={<RoomDetails />} />
        <Route path="/file" element={<FileUpload />} />

      </Routes>

    </div>
  );
}

export default App;
