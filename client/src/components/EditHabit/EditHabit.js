import { useState } from 'react';
import { useDispatch } from 'react-redux';
import habitsSlice, { editHabit } from '../../redux/slices/habitsSlice';
import './EditHabit.css';

function EditHabit({ editFormRef, onSave, habit }) {
  const [name, setName] = useState(habit.name || '');
  const [description, setDescription] = useState(habit.description || '');
  const [frequency, setFrequency] = useState(habit.frequency || 1);
  const [startingDate, setStartingDate] = useState(Date.now());
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'frequency':
        setFrequency(value);
        break;
      case 'startingDate':
        setStartingDate(value);
        break;
    }
  };

  const handleSave = () => {
    dispatch(
      editHabit({
        ...habit,
        name,
        description,
        frequency,
        startingDate,
      })
    );
    onSave();
  };

  return (
    <form className="edit-habit-form__container" ref={editFormRef}>
      <h2 className="edit-habit-form__title">Edit Habit</h2>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={name} onChange={handleChange} placeholder="Name of the habit" />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Description of the habit"
        required
      />
      <label htmlFor="frequency">How many days in a week</label>
      <input
        type="number"
        name="frequency"
        value={frequency}
        onChange={handleChange}
        placeholder="Number of days in a week"
        required
      />
      <label htmlFor="startingDate">Starting in</label>
      <input
        type="date"
        name="startingDate"
        value={startingDate}
        onChange={handleChange}
        placeholder="When do you want to start?"
        required
      />
      <button type="button" className="edit_button" onClick={handleSave}>
        Save
      </button>
    </form>
  );
}

export default EditHabit;
