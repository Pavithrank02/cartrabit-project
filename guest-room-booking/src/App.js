
import './App.css';
import Home from './View/Home';
import { Routes, Route } from 'react-router-dom';
import CustomerLoginPage from './components/Login/CustomerLoginPage';
import Registration from './components/Registration/Registration';
import CustomerBooking from './View/CustomerBooking';
import HouseOwnerForm from './View/HouseOwnerForm';
import RoomList from './View/RoomList';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<CustomerLoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/booking" element={<CustomerBooking />} />
        <Route path="/rooms" element={<HouseOwnerForm />} />
        <Route path="/roomlist" element={<RoomList />} />



      </Routes>

    </div>
  );
}

export default App;
