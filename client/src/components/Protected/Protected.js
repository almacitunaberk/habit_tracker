import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Protected({ children }) {
  //const { isLoggedIn } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);
  if (!user.isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}

export default Protected;
