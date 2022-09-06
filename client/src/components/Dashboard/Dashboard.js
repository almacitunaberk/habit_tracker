import './Dashboard.css';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/slices/userSlice';

function Dashboard() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
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
      <div className="dashboard__item">
        <span class="material-symbols-sharp dashboard__item__icon">format_list_numbered</span>
        <h3 className="dashboard__item__name">Habits List</h3>
      </div>
      <div className="dashboard__item" onClick={handleLogout}>
        <span class="material-symbols-sharp">logout</span>
        <h3 className="dashboard__item__name">Logout</h3>
      </div>
    </div>
  );
}

export default Dashboard;
