import { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoAddButton from '../components/TodoAddButton';
import TodoList from '../components/TodoList';
import TodoFilterButtons from '../components/TodoFilterButtons';
import FILTERS from './todoConst';

const getFilteredTodos = (filter, todos) => {
    switch (filter) {
        case FILTERS.ACTIVE:
            return todos?.filter(todo => !todo.completed);
        case FILTERS.COMPLETED:
            return todos?.filter(todo => todo.completed);
        default:
            return todos;
    }
};


function TodosApp() {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');
    const [filter, setFilter] = useState(FILTERS.ALL);

    const toggleTodo = (todo) => {
        const updatedTodos = todos.map((item) => item.id === todo.id ? {...item, completed: !item.completed } : item);
        setTodos(updatedTodos);
    };

    const deleteTodo = (todo) => {
        const updatedTodos = todos.filter((item) => item.id !== todo.id);
        setTodos(updatedTodos);
    };

    return (
        <div className='app'>
            <h1>Todo List</h1>
            <TodoFilterButtons
                todos={todos}
                setFilter={setFilter}
                activeCount={getFilteredTodos(FILTERS.ACTIVE, todos)?.length}
                completedCount={getFilteredTodos(FILTERS.COMPLETED, todos)?.length}
            />
            <TodoList
                todos={getFilteredTodos(filter, todos)}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
            <TodoInput
                todoText={todoText}
                setTodoText={setTodoText}
            />
            <TodoAddButton
                todos={todos}
                todoText={todoText}
                setTodos={setTodos}
                setTodoText={setTodoText}
            />
        </div>
    );
}

export default TodosApp;