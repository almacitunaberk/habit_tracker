import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewHabit } from '../../redux/slices/habitsSlice';
import './NewHabit.css';

function NewHabit({ formRef, onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState(1);
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
    }
  };

  const handleCreateNewHabit = () => {
    dispatch(
      createNewHabit({
        name,
        description,
        frequency,
      })
    );
    onSubmit();
  };

  return (
    <form className="new-habit-form__container" ref={formRef}>
      <h2 className="form__title">New Habit</h2>
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
      <button type="button" className="create_button" onClick={handleCreateNewHabit}>
        Create New Habit
      </button>
    </form>
  );
}

export default NewHabit;
