const api = {};
api.fetchAllHabits = async (user_id) => {
  const response = await fetch('http://localhost:4000/habits', { credentials: 'include' });
  const data = await response.json();
  return data;
};

api.fetchHabitById = async (id) => {
  const response = await fetch(`http://localhost:4000/habits/${id}`);
  const data = await response.json();
  return data;
};

api.editHabitById = () => {};
api.deleteHabiyById = () => {};
api.createNewHabit = () => {};

export default api;
