import HabitItem from './HabitItem';

export default function HabitList({ habits, filter, onToggle, onDelete }) {
  
  if (habits.length === 0) {
    let message = 'Список порожній. Час додати нові звички!';
    if (filter === 'active') message = 'Немає активних звичок. Ви все виконали! 🎉';
    if (filter === 'completed') message = 'Ще немає виконаних звичок. Почніть діяти! 💪';
    
    return <p className="empty-state">{message}</p>;
  }

  return (
    <div className="habits-list">
      {habits.map((habit) => (
        <HabitItem 
          key={habit.id} 
          habit={habit} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}