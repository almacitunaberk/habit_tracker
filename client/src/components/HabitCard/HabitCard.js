import './HabitCard.css';

function HabitCard({ habit }) {
  const { name, days_of_completion } = habit;
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
      <small className="text-muted">Last seen 24 hours</small>
    </div>
  );
}

export default HabitCard;
