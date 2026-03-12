import HabitInput from './HabitInput';
import HabitList from './HabitList';
import ApiList from './ApiList';

export default function Main({ habits, currentFilter, setFilter, onAdd, onToggle, onDelete }) {
  return (
    <main className="main-content">
      <h2>Мої звички на сьогодні</h2>
      
      <HabitInput onAdd={onAdd} />
      
      <div className="filter-panel">
        <button 
          className={currentFilter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          Всі
        </button>
        <button 
          className={currentFilter === 'active' ? 'active' : ''} 
          onClick={() => setFilter('active')}
        >
          Активні
        </button>
        <button 
          className={currentFilter === 'completed' ? 'active' : ''} 
          onClick={() => setFilter('completed')}
        >
          Виконані
        </button>
      </div>
      
      <HabitList 
        habits={habits} 
        filter={currentFilter}
        onToggle={onToggle} 
        onDelete={onDelete} 
      />

      <ApiList />
      
    </main>
  );
}