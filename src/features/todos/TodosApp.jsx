import { useCallback, useMemo, useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import TodoFilterButtons from './TodoFilterButtons';
import useTodoStore from './todoStore';
import useUIStore from './uiStore';
import { getFilteredTodos } from './todoUtils';

function TodosApp() {
    const {
        todos,
        filter,
        loading,
        toggleTodo,
        deleteTodo,
        addTodo,
        setFilter,
        fetchTodos,
    } = useTodoStore(useShallow((state) => ({
        todos: state.todos,
        filter: state.filter,
        loading: state.loading,
        toggleTodo: state.toggleTodo,
        deleteTodo: state.deleteTodo,
        addTodo: state.addTodo,
        setFilter: state.setFilter,
        fetchTodos: state.fetchTodos,
    })));

    const { todoText, setTodoText } = useUIStore();

    const filteredTodos = useMemo(() => {
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
            addTodo(todoText);
            setTodoText('');
        }
    }, [addTodo, todoText]);

    const handleSetTodoText = useCallback((value) => {
        setTodoText(value);
    }, []);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className='app'>
            <h1>Todo List</h1>
            <TodoFilterButtons
                onFilter={setFilter}
                allCount={stats.total}
                activeCount={stats.active}
                completedCount={stats.completed}
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