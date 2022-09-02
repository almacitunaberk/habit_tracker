import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Protected({ children }) {
  const { isLoggedIn } = useSelector((state) => state.user);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}

export default Protected;
