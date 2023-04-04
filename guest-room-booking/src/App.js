
import './App.css';
import Home from './View/Home';
import { Routes, Route } from 'react-router-dom';
import CustomerLoginPage from './components/Login/CustomerLoginPage';
import Registration from './components/Registration/Registration';
import CustomerBooking from './View/CustomerBooking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<CustomerLoginPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/booking" element={<CustomerBooking />} />
      </Routes>

    </div>
  );
}

export default App;
