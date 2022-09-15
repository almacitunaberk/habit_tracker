import './HabitCard.css';
import { useDispatch } from 'react-redux';
import { deleteHabit, completedToday } from '../../redux/slices/habitsSlice';
import ProgressCircle from '../ProgressCircle/ProgressCircle';

function HabitCard({ habit, onEditClick }) {
  const { id, name, description, frequency, days_of_completion } = habit;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteHabit(id));
  };

  const handleCompleted = () => {
    dispatch(completedToday(id));
  };

  return (
    <>
      <div className="habit__card">
        <h3 className="habit__name">{name}</h3>
        <div className="middle">
          <div className="left">
            <h3>Total Days Completed</h3>
            <h1>
              {days_of_completion >= 28
                ? `${days_of_completion} - Habit formed`
                : `${days_of_completion} - Have ${28 - days_of_completion} days to go`}
            </h1>
          </div>
          <div className="progress">
            <ProgressCircle value={Math.floor((days_of_completion / 28) * 100)} />
          </div>
        </div>
        <div className="bottom">
          <button className={`habit-card__button completed__button `} onClick={handleCompleted}>
            Completed
          </button>
          <button className="habit-card__button edit__button" onClick={() => onEditClick()}>
            Edit
          </button>
          <button className="habit-card__button delete__button" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <small className="text-muted">Last seen 24 hours</small>
      </div>
    </>
  );
}

export default HabitCard;
