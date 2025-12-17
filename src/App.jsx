// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './TodoInput';
import TodoAddButton from './TodoAddButton';
import TodoList from './TodoList';
import TodoFilterButtons from './TodoFilterButtons';

function App() {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');
    const [filteredTodos, setFilteredTodos] = useState(todos);

    useEffect(() => {
        setFilteredTodos(todos);
    }, [todos]);

    return (
        <div className="app">
            <h1>Todo List</h1>
            <TodoFilterButtons
                todos={todos}
                setFilteredTodos={setFilteredTodos}
            />
            <TodoList
                filteredTodos={filteredTodos}
                todos={todos}
                setTodos={setTodos}
            />
            <TodoInput
                todoText={todoText}
                setTodoText={setTodoText}
            />
            <TodoAddButton
                setTodos={setTodos}
                todos={todos}
                todoText={todoText}
                setTodoText={setTodoText}
            />
        </div>
    );
}

export default App;