export default function Header({ title, completed, total }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>Формуй корисні звички щодня!</p>
      <div className="stats-badge">
        Виконано сьогодні: <strong>{completed} / {total}</strong>
      </div>
    </header>
  );
}