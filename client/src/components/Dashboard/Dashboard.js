import './Dashboard.css';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(
      logoutUser({
        successCallback: () => {
          navigate('/login');
        },
        failureCallback: () => {
          window.alert('Something went wrong');
        },
      })
    );
  };
  return (
    <div className="dashboard">
      <div className="logo">
        <h2>
          Hab<span>its</span>
        </h2>
      </div>
      <div className="dashboard__item active">
        <span class="material-symbols-sharp dashboard__item__icon">dashboard</span>
        <h3 className="dashboard__item__name">Dashboard</h3>
      </div>
      <div className="dashboard__item" onClick={handleLogout}>
        <span class="material-symbols-sharp">logout</span>
        <h3 className="dashboard__item__name">Logout</h3>
      </div>
    </div>
  );
}

export default Dashboard;
