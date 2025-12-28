import './App.css';
import TodosApp from './features/todos/TodosApp';
import CounterApp from './features/counter/CounterApp';
import DarkModeToggle from './features/themes/DarkModeToggle';

function App() {
    return (
        <div className="app">
          <DarkModeToggle />
          <TodosApp />
          <CounterApp />
        </div>
    );
}

export default App;