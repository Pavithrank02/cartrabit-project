
import './App.css';
import Home from './View/Home';
import { Routes, Route } from 'react-router-dom';
import AdminLoginPage from './components/AdminLoginPage';
import CustomerLoginPage from './components/CustomerLoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<CustomerLoginPage />} />
      </Routes>

    </div>
  );
}

export default App;
