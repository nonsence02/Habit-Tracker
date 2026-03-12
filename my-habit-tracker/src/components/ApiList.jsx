import { useState, useEffect } from 'react';

export default function ApiList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch('https://dummyjson.com/todos?limit=5');
        
        if (!res.ok) {
          throw new Error(`Помилка сервера: ${res.status}`);
        }

        const data = await res.json();
        setItems(data.todos); 
        
      } catch (e) {
        setError(e.message || 'Невідома помилка під час завантаження');
      } finally {
        setLoading(false);
      }
    }

    fetchRecommendations();
  }, []); 

  return (
    <section className="api-section">
      <h3>💡 Рекомендовані завдання (з API)</h3>
      
      {loading && <p className="api-loading">⏳ Шукаємо цікаві звички...</p>}
      
      {error && <p className="api-error">⚠️ Помилка: {error}</p>}
  
      {!loading && !error && (
        <ul className="api-list">
          {items.map((todo) => (
            <li key={todo.id} className="api-item">
              <span className="api-icon">📌</span> {todo.todo}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}