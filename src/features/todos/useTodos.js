import { useReducer, useState, useMemo, useCallback } from 'react';
import { TODO_ACTIONS } from './todoActions';
import { getFilteredTodos } from './todoUtils';
import { todoReducer, initialTodosState } from './todoReducer';
import { FILTERS } from './todoConst';

export function useTodos() {
    const [state, dispatch] = useReducer(todoReducer, initialTodosState);
    const [filter, setFilter] = useState(FILTERS.ALL);

    const addTodo = useCallback((text, idMethod) => {
        if(text.trim()) {
            dispatch({
                type: TODO_ACTIONS.ADD,
                payload: {
                    id: Date.now().toString(),
                    text: text.trim(),
                    completed: false,
                }
            });
        }
    }, []);

    const toggleTodo = useCallback(
        (id) => {
            dispatch({
                type: TODO_ACTIONS.TOGGLE,
                payload: { id }
            })
        },
        [dispatch]
    );

    const deleteTodo = useCallback(
        (id) => {
            dispatch({
                type: TODO_ACTIONS.DELETE,
                payload: { id }
            })
        },
        [dispatch]
    );

    const setFilterStatus = useCallback(
        (filter) => {
            setFilter(filter)
        },
        [filter]
    );

    const stats = useMemo(() => ({
        total: state.todos.length,
        completed: state.todos.filter(t => t.completed).length,
        active: state.todos.filter(t => !t.completed).length,
    }), [state.todos]);

    const filteredTodos = useMemo(() =>
            getFilteredTodos(filter, state.todos),
        [filter, state.todos]
    );

    return {
        todos: state.todos,
        filteredTodos: filteredTodos,
        stats,
        addTodo,
        toggleTodo,
        deleteTodo,
        setFilterStatus,
    };
}