import './HabitCard.css';
import { useDispatch } from 'react-redux';
import { deleteHabit } from '../../redux/slices/habitsSlice';
import NewHabit from '../NewHabit/NewHabit';

function HabitCard({ habit, onEditClick }) {
  const { id, name, description, frequency, days_of_completion, onEditClicked } = habit;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteHabit(id));
  };

  return (
    <div className="habit__card">
      <h3 className="habit__name">{name}</h3>
      <div className="middle">
        <div className="left">
          <h3>Total Days Completed</h3>
          <h1>{days_of_completion ? days_of_completion.length : 0}</h1>
        </div>
        <div className="progress"></div>
      </div>
      <div className="bottom">
        <button className="habit-card__button completed__button">Completed</button>
        <button className="habit-card__button edit__button" onClick={() => onEditClick()}>
          Edit
        </button>
        <button className="habit-card__button delete__button" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <small className="text-muted">Last seen 24 hours</small>
    </div>
  );
}

export default HabitCard;
