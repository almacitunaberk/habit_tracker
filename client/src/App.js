import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchAllHabits } from './redux/slices/habitsSlice';

function App() {
  const habits = useSelector((state) => state.habits);
  console.log(habits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllHabits());
  }, []);
  return (
    <>
      {habits.loading && <h1>Loading...</h1>}
      {habits.habits && (
        <>
          {habits.habits.map((habit) => {
            return <h1 key={habit.id}>{habit.name}</h1>;
          })}
        </>
      )}
    </>
  );
}

export default App;
