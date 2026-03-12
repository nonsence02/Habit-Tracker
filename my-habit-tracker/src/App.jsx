import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';

export default function App() {
  const habitsData = [
    { id: 1, name: 'Випити склянку води зранку', streak: 12, completed: true },
    { id: 2, name: 'Прочитати 20 сторінок книги', streak: 3, completed: false },
    { id: 3, name: 'Англійська мова (15 хв)', streak: 7, completed: false },
    { id: 4, name: 'Ранкова зарядка', streak: 0, completed: false },
  ];

  const appTitle = "🚀 Habit Tracker";
  const appSubtitle = "Формуй корисні звички щодня!";

  return (
    <>
      <div className="app-container">
        {}
        <Header title={appTitle} subtitle={appSubtitle} />
        
        {}
        <Main habits={habitsData} />
        
        <Footer />
      </div>
    </>
  );
}