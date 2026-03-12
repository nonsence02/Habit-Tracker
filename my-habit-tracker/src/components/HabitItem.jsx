export default function HabitItem({ habit, onToggle, onDelete }) {
  return (
    <div className={`habit-card ${habit.completed ? 'completed' : ''}`}>
      <div className="habit-info">
        <h3>
          {habit.name} 
          <span className={`priority-badge ${habit.priority}`}>
            {habit.priority === 'high' ? 'Високий' : habit.priority === 'medium' ? 'Середній' : 'Низький'}
          </span>
        </h3>
        <p>🔥 Серія: <strong>{habit.streak}</strong> днів</p>
      </div>
      
      <div className="habit-actions">
        <button 
          className="btn-toggle" 
          onClick={() => onToggle(habit.id)}
        >
          {habit.completed ? '❌ Скасувати' : '✅ Виконано'}
        </button>
        <button 
          className="btn-delete" 
          onClick={() => onDelete(habit.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}