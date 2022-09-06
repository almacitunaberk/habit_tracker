import './Overview.css';
import HabitCard from '../HabitCard/HabitCard';
import { useState, useRef, useEffect } from 'react';
import NewHabit from '../NewHabit/NewHabit';

function Overview({ habits }) {
  const [showNewHabitForm, setShowNewHabitForm] = useState(false);
  const newHabitFormRef = useRef();
  const buttonRef = useRef();

  const handleClick = (e) => {
    setShowNewHabitForm(true);
  };

  const handleClickOutside = (e) => {
    if (showNewHabitForm) {
      if (!newHabitFormRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
        setShowNewHabitForm(false);
      }
    }
  };

  const handleSubmit = () => {
    setShowNewHabitForm(false);
  };

  return (
    <div className="overview__container" onClick={handleClickOutside}>
      <h1 className="overview__title">Dashboard</h1>
      <div className="habits__insights">
        {!habits.loading && habits.habits && (
          <>
            {habits.habits.map((habit) => {
              return <HabitCard key={habit.id} habit={habit} />;
            })}
          </>
        )}
      </div>
      <button className="new-habit__button" onClick={handleClick} ref={buttonRef}>
        Add New Habit
      </button>
      {showNewHabitForm && <NewHabit formRef={newHabitFormRef} onSubmit={handleSubmit} />}
      <div class="recent__activites"></div>
    </div>
  );
}

export default Overview;
