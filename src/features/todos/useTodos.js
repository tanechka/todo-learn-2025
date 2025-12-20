import { useReducer, useState, useMemo } from 'react';
import { TODO_ACTIONS } from './todoActions';
import { getChooseDifferentIDMethod, getFilteredTodos } from './todoUtils';
import { todoReducer, initialTodosState } from './todoReducer';
import { FILTERS } from './todoConst';

export function useTodos() {
    const [state, dispatch] = useReducer(todoReducer, initialTodosState);
    const [filter, setFilter] = useState(FILTERS.ALL);

    const addTodo = (text, idMethod) => {
        if(text.trim()) {
            dispatch({
                type: TODO_ACTIONS.ADD,
                payload: {
                    id: getChooseDifferentIDMethod(idMethod),
                    text: text,
                    completed: false,
                }
            })
        }
    };

    const toggleTodo = (todo) => {
        dispatch({
            type: TODO_ACTIONS.TOGGLE,
            payload: { id: todo.id }
        })
    };

    const deleteTodo = (todo) => {
        dispatch({
            type: TODO_ACTIONS.DELETE,
            payload: { id: todo.id }
        })
    };

    const setFilterStatus = (filter) => {
        setFilter(filter)
    }

    const filteredTodos = useMemo(() =>
            getFilteredTodos(filter, state.todos),
        [filter, state.todos]
    );

    return {
        todos: state.todos,
        filteredTodos: filteredTodos,
        stats: {
            total: state.todos.length,
            completed: getFilteredTodos(FILTERS.COMPLETED, state.todos)?.length,
            active: getFilteredTodos(FILTERS.ACTIVE, state.todos)?.length,
        },
        addTodo,
        toggleTodo,
        deleteTodo,
        setFilterStatus,
    };
}