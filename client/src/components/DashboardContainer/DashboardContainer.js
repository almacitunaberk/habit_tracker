import Dashboard from '../Dashboard/Dashboard';
import Overview from '../Overview/Overview';
import './DashboardContainer.css';

function DashboardContainer() {
  return (
    <div className="container">
      <Dashboard />
      <Overview />
    </div>
  );
}

export default DashboardContainer;
