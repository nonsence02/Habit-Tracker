import HabitInput from './HabitInput';
import HabitList from './HabitList';

export default function Main({ habits }) {
  return (
    <main className="main-content">
      <h2>Мої звички на сьогодні</h2>
      
      <HabitInput />
    
      <HabitList habits={habits} />
    </main>
  );
}