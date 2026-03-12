import { useState, useEffect } from 'react'; // НОВЕ: Імпортуємо useEffect
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

export default function App() {
  const [habits, setHabits] = useState(() => {
    const storedHabits = localStorage.getItem('habit-tracker-data');
    
    return storedHabits ? JSON.parse(storedHabits) : [
      { id: 1, name: 'Випити склянку води зранку', streak: 12, completed: false, priority: 'high' },
      { id: 2, name: 'Прочитати 20 сторінок книги', streak: 3, completed: false, priority: 'medium' },
      { id: 3, name: 'Англійська мова (15 хв)', streak: 7, completed: false, priority: 'high' },
      { id: 4, name: 'Ранкова зарядка', streak: 0, completed: false, priority: 'low' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('habit-tracker-data', JSON.stringify(habits));
  }, [habits]); 

  const [filter, setFilter] = useState('all');

  const addHabit = (name, priority) => {
    const newHabit = {
      id: Date.now(),
      name: name,
      streak: 0,
      completed: false,
      priority: priority
    };
    setHabits(prev => [newHabit, ...prev]);
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  const filteredHabits = habits.filter((habit) => {
    if (filter === 'completed') return habit.completed;
    if (filter === 'active') return !habit.completed;
    return true; 
  });

  const appTitle = "🚀 Habit Tracker";
  const completedCount = habits.filter(habit => habit.completed).length;
  const totalCount = habits.length;

  return (
    <div className="app-container">
      <Header title={appTitle} completed={completedCount} total={totalCount} />
      
      <Main 
        habits={filteredHabits} 
        currentFilter={filter}
        setFilter={setFilter}
        onAdd={addHabit}
        onToggle={toggleHabit} 
        onDelete={deleteHabit} 
      />
      
      <Footer />
    </div>
  );
}