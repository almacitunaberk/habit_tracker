const api = {};
api.fetchAllHabits = async () => {
  const response = await fetch('http://localhost:4000/habits');
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
