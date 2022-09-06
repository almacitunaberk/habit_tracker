import Dashboard from '../Dashboard/Dashboard';
import Overview from '../Overview/Overview';
import './DashboardContainer.css';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllHabits } from '../../redux/slices/habitsSlice';

function DashboardContainer() {
  const habits = useSelector((state) => state.habits);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchAllHabits(user.user.id));
    console.log(user.user.id);
    console.log(habits);
  }, []);

  return (
    <div className="container">
      <Dashboard />
      {habits.loading ? <h1>Loading</h1> : <Overview habits={habits} />}
    </div>
  );
}

export default DashboardContainer;
