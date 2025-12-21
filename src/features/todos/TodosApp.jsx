import { useState, useCallback } from 'react';
import { useTodos } from './useTodos';
import { METHOD } from './todoConst';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoFilterButtons from './TodoFilterButtons';
import TodoChooseDifferentID from './TodoChooseDifferentID';

function TodosApp() {
    const {
        stats,
        filteredTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        setFilterStatus,
    } = useTodos();

    const [idMethod, setIdMethod] = useState(METHOD.CRYPTO);
    const [todoText, setTodoText] = useState('');

    const toggle = useCallback((id) => {
        toggleTodo(id);
    }, [toggleTodo]);

    const deleteAction = useCallback((id) => {
        deleteTodo(id);
    }, [deleteTodo]);

    const add = useCallback(() => {
        if (todoText.trim()) {
            addTodo(todoText, idMethod);
            setTodoText('');
        }
    }, [addTodo, todoText, idMethod]);

    const handleSetTodoText = useCallback((value) => {
        setTodoText(value);
    }, []);

    return (
        <div className='app'>
            <h1>Todo List</h1>
            <TodoFilterButtons
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
            <TodoAdd
                todoText={todoText}
                setTodoText={handleSetTodoText}
                onAdd={add}
            />
        </div>
    );
}

export default TodosApp;