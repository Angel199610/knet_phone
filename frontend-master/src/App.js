import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import About from './components/about';
import ProductsPage from './server/ProductsPage';
import Login from './components/signup';
import Navbar from './components/navbar';
import Footer from './components/footer';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './server/ProtectedRoute';
import AdminLogin from './server/AdminLogin';

const App = () => {
  const [userName, setUserName] = useState(''); // Declare state for userName

  useEffect(() => {
    // Check localStorage for username on component mount
    const storedUserName = localStorage.getItem('username');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    setUserName(''); // Clear the username from state
    localStorage.removeItem('username'); // Clear username from local storage
  };

  return (
    <Router>
      <div className="App">
        <Navbar userName={userName} onLogout={handleLogout} /> {/* Pass userName and onLogout to Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/login" 
            element={<Login setUserName={setUserName} />} // Ensure correct component is used
          />
          {/* <Route path="/adminDashboard/*" element={<AdminDashboard />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
