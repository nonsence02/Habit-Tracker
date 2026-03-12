import { useState } from 'react';

export default function HabitInput({ onAdd }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (!text.trim()) return; 
    
    onAdd(text.trim(), priority); 
  
    setText(''); 
    setPriority('medium');
  };

  return (
    <form className="habit-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введіть нову звичку..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="habit-input"
      />
      
      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)}
        className="habit-select"
      >
        <option value="low">🟢 Низький</option>
        <option value="medium">🟡 Середній</option>
        <option value="high">🔴 Високий</option>
      </select>

      <button type="submit" className="btn-add">➕ Додати</button>
    </form>
  );
}