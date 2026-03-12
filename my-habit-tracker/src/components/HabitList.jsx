import HabitItem from './HabitItem';

export default function HabitList({ habits, onToggle, onDelete }) {
  if (habits.length === 0) {
    return <p className="empty-state">Усі звички видалено. Час додати нові!</p>;
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