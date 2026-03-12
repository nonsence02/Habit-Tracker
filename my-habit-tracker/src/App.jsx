import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

export default function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Випити склянку води зранку', streak: 12, completed: false },
    { id: 2, name: 'Прочитати 20 сторінок книги', streak: 3, completed: false },
    { id: 3, name: 'Англійська мова (15 хв)', streak: 7, completed: false },
    { id: 4, name: 'Ранкова зарядка', streak: 0, completed: false },
  ]);

  const [filter, setFilter] = useState('all');

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name: name,
      streak: 0,
      completed: false,
    };
    setHabits([newHabit, ...habits]);
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
    return true; // для 'all'
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