import DashboardContainer from './components/DashboardContainer/DashboardContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import React from 'react';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardContainer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
