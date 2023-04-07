
import './App.css';
import Home from './View/Home';
import { Routes, Route } from 'react-router-dom';
import CustomerLoginPage from './components/Login/CustomerLoginPage';
import Registration from './components/Registration/Registration';
import CustomerBooking from './View/CustomerBooking';
import HouseOwnerForm from './View/HouseOwnerForm';
import RoomsView from './View/RoomsView';
import OwnerRegistration from './components/Registration/OwnerRegistration';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<CustomerLoginPage />} />
        <Route path="/customerregister" element={<Registration />} />
        <Route path="/ownerregister" element={<OwnerRegistration />} />
        <Route path="/booking/:id" element={<CustomerBooking />} />
        <Route path="/rooms" element={<HouseOwnerForm />} />
        <Route path="/roomlist" element={<RoomsView />} />



      </Routes>

    </div>
  );
}

export default App;
