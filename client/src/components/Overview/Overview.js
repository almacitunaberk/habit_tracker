import './Overview.css';
import HabitCard from '../HabitCard/HabitCard';
import { useState, useRef } from 'react';
import NewHabit from '../NewHabit/NewHabit';
import EditHabit from '../EditHabit/EditHabit';
import HabitCalendar from '../HabitCalendar/HabitCalendar';

function Overview({ habits }) {
  const [showNewHabitForm, setShowNewHabitForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editFormHabit, setEditFormHabit] = useState(null);
  const [showHabitCalendar, setShowHabitCalendar] = useState(false);
  const [calendarHabit, setCalendarHabit] = useState(null);
  const newHabitFormRef = useRef();
  const editHabitFormRef = useRef();
  const calendarRef = useRef();
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
    if (showEditForm) {
      if (!editHabitFormRef.current.contains(e.target)) {
        setShowEditForm(false);
      }
    }
    if (showHabitCalendar) {
      if (!calendarRef.current.contains(e.target)) {
        setShowHabitCalendar(false);
      }
    }
  };

  const handleSubmit = () => {
    setShowNewHabitForm(false);
  };

  const handleEdit = (habit) => {
    setEditFormHabit(habit);
    setShowEditForm(true);
  };

  const handleSave = () => {
    setShowEditForm(false);
    setEditFormHabit(null);
  };

  const handleCalendar = (habit) => {
    setShowHabitCalendar(true);
    setCalendarHabit(habit);
  };

  return (
    <div className="overview__container" onClick={handleClickOutside}>
      <h1 className="overview__title">Dashboard</h1>
      <div className="habits__insights">
        {!habits.loading && habits.habits && (
          <>
            {habits.habits.map((habit) => {
              return (
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  onEditClick={() => handleEdit(habit)}
                  onInfoClick={() => handleCalendar(habit)}
                />
              );
            })}
          </>
        )}
      </div>
      <button className="new-habit__button" onClick={handleClick} ref={buttonRef}>
        Add New Habit
      </button>
      {showNewHabitForm && <NewHabit formRef={newHabitFormRef} onSubmit={handleSubmit} />}
      {showEditForm && <EditHabit editFormRef={editHabitFormRef} habit={editFormHabit} onSave={handleSave} />}
      {showHabitCalendar && <HabitCalendar habit={calendarHabit} calendarRef={calendarRef} />}
      <div class="recent__activites"></div>
    </div>
  );
}

export default Overview;
