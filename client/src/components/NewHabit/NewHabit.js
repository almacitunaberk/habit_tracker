import { useEffect, useState, useRef } from 'react';
import './NewHabit.css';

function NewHabit({ formRef }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState(0);
  const [startingDate, setStartingDate] = useState(Date.now());

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
      />
      <label htmlFor="frequency">How many days in a week</label>
      <input
        type="number"
        name="frequency"
        value={frequency}
        onChange={handleChange}
        placeholder="Number of days in a week"
      />
      <label htmlFor="startingDate">Starting in</label>
      <input
        type="date"
        name="startingDate"
        value={startingDate}
        onChange={handleChange}
        placeholder="When do you want to start?"
      />
      <button type="button" className="create_button">
        Create New Habit
      </button>
    </form>
  );
}

export default NewHabit;
