import './App.css';
import TodosApp from './features/todos/TodosApp';
import CounterApp from './features/counter/CounterApp';

function App() {
    return (
        <div className="app">
           <TodosApp />
            <CounterApp />
        </div>
    );
}

export default App;