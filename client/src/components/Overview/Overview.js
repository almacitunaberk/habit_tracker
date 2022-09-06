import './Overview.css';
import HabitCard from '../HabitCard/HabitCard';
import { useEffect } from 'react';

function Overview({ habits }) {
  return (
    <div className="overview__container">
      <h1 className="overview__title">Dashboard</h1>
      <div className="habits__insights">
        {!habits.loading && (
          <>
            {habits.habits.map((habit) => {
              return <HabitCard key={habit.id} habit={habit} />;
            })}
          </>
        )}
      </div>
      <div class="recent__activites"></div>
    </div>
  );
}

export default Overview;
