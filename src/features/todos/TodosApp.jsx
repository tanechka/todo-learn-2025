import { useState } from 'react';
import { useTodos } from './useTodos';
import { METHOD } from './todoConst';
import TodoInput from './TodoInput';
import TodoAddButton from './TodoAddButton';
import TodoList from './TodoList';
import TodoFilterButtons from './TodoFilterButtons';
import TodoChooseDifferentID from './TodoChooseDifferentID';

function TodosApp() {
    const {
        todos,
        stats,
        filteredTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        setFilterStatus,
    } = useTodos();

    const [idMethod, setIdMethod] = useState(METHOD.CRYPTO);
    const [todoText, setTodoText] = useState('');

    const toggle = (todo) => {
        toggleTodo(todo);
    };

    const deleteAction = (todo) => {
        deleteTodo(todo)
    };

    const add = () => {
        addTodo(todoText, idMethod);
        setTodoText('');
    }

    return (
        <div className='app'>
            <h1>Todo List</h1>
            <TodoFilterButtons
                todos={todos}
                onFilter={setFilterStatus}
                allCount={stats.total}
                activeCount={stats.active}
                completedCount={stats.completed}
            />
            <TodoChooseDifferentID
                setIdMethod={setIdMethod}
            />
            <TodoList
                todos={filteredTodos}
                onToggle={toggle}
                onDelete={deleteAction}
            />
            <TodoInput
                todoText={todoText}
                setTodoText={setTodoText}
            />
            <TodoAddButton
                onAdd={add}
            />
        </div>
    );
}

export default TodosApp;