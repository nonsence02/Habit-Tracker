export default function HabitInput() {
  return (
    <form className="habit-input-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Введіть нову звичку..."
        className="habit-input"
      />
      <button type="button" className="btn-add">➕ Додати</button>
    </form>
  );
}