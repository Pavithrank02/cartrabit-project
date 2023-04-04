
import './App.css';
import Home from './View/Home';
import { Routes, Route } from 'react-router-dom';
import CustomerLoginPage from './components/CustomerLoginPage';
import Registration from './components/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<CustomerLoginPage />} />
        <Route path="/register" element={<Registration />} />
      </Routes>

    </div>
  );
}

export default App;
