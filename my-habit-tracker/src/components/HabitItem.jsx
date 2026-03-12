export default function HabitItem({ habit }) {
  return (
    <div className={`habit-card ${habit.completed ? 'completed' : ''}`}>
      <div className="habit-info">
        <h3>{habit.name}</h3>
        <p>🔥 Серія: <strong>{habit.streak}</strong> днів</p>
      </div>
      
      <div className="habit-actions">
        <button className="btn-toggle">
          {habit.completed ? '❌ Скасувати' : '✅ Виконано'}
        </button>
        <button className="btn-delete">
          🗑️
        </button>
      </div>
    </div>
  );
}