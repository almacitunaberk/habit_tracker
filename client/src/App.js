import DashboardContainer from './components/DashboardContainer/DashboardContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import React, { useEffect } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Protected from './components/Protected/Protected';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <Protected>
              <DashboardContainer />
            </Protected>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
