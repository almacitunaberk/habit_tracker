import DashboardContainer from './components/DashboardContainer/DashboardContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<DashboardContainer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
