import { useState } from 'react';

export default function HabitInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (text.trim() === '') return; 
    
    onAdd(text); 
    setText(''); 
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
      <button type="submit" className="btn-add">➕ Додати</button>
    </form>
  );
}