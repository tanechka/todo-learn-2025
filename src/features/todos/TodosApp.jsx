import { useCallback, useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoFilterButtons from './TodoFilterButtons';
import TodoChooseDifferentID from './TodoChooseDifferentID';
import useTodoStore from './todoSotre';
import useUIStore from './uiStore';
import {getFilteredTodos} from './todoUtils';

function TodosApp() {
    const {
        todos,
        filter,
        idMethod,
        toggleTodo,
        deleteTodo,
        addTodo,
        setFilter,
        setIdMethod,
    } = useTodoStore(useShallow((state) => ({
        todos: state.todos,
        filter: state.filter,
        idMethod: state.idMethod,
        todoText: state.todoText,
        toggleTodo: state.toggleTodo,
        deleteTodo: state.deleteTodo,
        addTodo: state.addTodo,
        setFilter: state.setFilter,
        setIdMethod: state.setIdMethod,
    })));

    const { todoText, setTodoText } = useUIStore();

    const filteredTodos = useMemo(() => {
        // Логика фильтрации xx
        return getFilteredTodos(filter, todos);
    }, [todos, filter]);

    const stats = useMemo(() => {
        const total = todos.length;
        const completed = todos.filter(t => t.completed).length;

        return { total, completed, active: total - completed };
    }, [todos]);

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
                onFilter={setFilter}
                allCount={stats.total}
                activeCount={stats.active}
                completedCount={stats.completed}
            />
            <TodoChooseDifferentID
                setIdMethod={setIdMethod}
            />
            <TodoList
                todos={filteredTodos}
                onToggle={toggleTodo}
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