import { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoAddButton from '../components/TodoAddButton';
import TodoList from '../components/TodoList';
import TodoFilterButtons from '../components/TodoFilterButtons';
import { FILTERS, METHOD } from './todoConst';
import TodoChooseDifferentID from './TodoChooseDifferentID';
import { nanoid } from 'nanoid';

//TODO: create actions file
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

//TODO: create actions file
const getChooseDifferentIDMethod = (method) => {
    switch (method) {
        case METHOD.CRYPTO:
            return crypto.randomUUID();
        case METHOD.NANOID:
            return nanoid()
        case METHOD.TIMESTAMP:
            return Date.now()
        default:
            return crypto.randomUUID();
    }
}

function TodosApp() {
    const [todos, setTodos] = useState([]);
    const [todoText, setTodoText] = useState('');
    const [filter, setFilter] = useState(FILTERS.ALL);
    const [idMethod, setIdMethod] = useState(METHOD.CRYPTO);

    const toggleTodo = (todo) => {
        const updatedTodos = todos.map((item) => item.id === todo.id ? {...item, completed: !item.completed } : item);
        setTodos(updatedTodos);
    };

    const deleteTodo = (todo) => {
        const updatedTodos = todos.filter((item) => item.id !== todo.id);
        setTodos(updatedTodos);
    };

    const addTodo = () => {
        if(todoText.trim()) {
            setTodos([
                ...todos,
                {
                    id: getChooseDifferentIDMethod(idMethod),
                    text: todoText,
                    done: false,
                }
            ])
            setTodoText('');
        }
    }

    return (
        <div className='app'>
            <h1>Todo List</h1>
            <TodoFilterButtons
                todos={todos}
                setFilter={setFilter}
                activeCount={getFilteredTodos(FILTERS.ACTIVE, todos)?.length}
                completedCount={getFilteredTodos(FILTERS.COMPLETED, todos)?.length}
            />
            <TodoChooseDifferentID
                setIdMethod={setIdMethod}
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
                addTodo={addTodo}
            />
        </div>
    );
}

export default TodosApp;