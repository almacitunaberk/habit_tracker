import './HabitCalendar.css';
import Calendar from 'react-calendar';

function HabitCalendar({ habit, calendarRef }) {
  return (
    <div className="calendar__container" ref={calendarRef}>
      <Calendar />
    </div>
  );
}

export default HabitCalendar;
