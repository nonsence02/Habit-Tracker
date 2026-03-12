import HabitInput from './HabitInput';
import HabitList from './HabitList';

export default function Main({ habits, onAdd, onToggle, onDelete }) {
  return (
    <main className="main-content">
      <h2>Мої звички на сьогодні</h2>
    
      <HabitInput onAdd={onAdd} />
      
      <HabitList 
        habits={habits} 
        onToggle={onToggle} 
        onDelete={onDelete} 
      />
    </main>
  );
}