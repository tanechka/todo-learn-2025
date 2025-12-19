import './App.css';
import TodosApp from './components/todos/TodosApp';
import CounterApp from './components/counter/CounterApp';

function App() {
    return (
        <div className="app">
           <TodosApp />
            <CounterApp />
        </div>
    );
}

export default App;