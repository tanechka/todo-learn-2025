import { useState, useReducer } from 'react';
import TodoInput from './TodoInput';
import TodoAddButton from './TodoAddButton';
import TodoList from './TodoList';
import TodoFilterButtons from './TodoFilterButtons';
import { FILTERS, METHOD } from './todoConst';
import TodoChooseDifferentID from './TodoChooseDifferentID';
import { initialTodosState, todoReducer } from './todoReducer';
import { getChooseDifferentIDMethod, getFilteredTodos } from './todoUtils';
import { TODO_ACTIONS } from './todoActions';

function TodosApp() {
    const [todoText, setTodoText] = useState('');
    const [filter, setFilter] = useState(FILTERS.ALL);
    const [idMethod, setIdMethod] = useState(METHOD.CRYPTO);
    const [state, dispatch] = useReducer(todoReducer, initialTodosState);

    const toggleTodo = (todo) => {
        dispatch({
            type: TODO_ACTIONS.TOGGLE,
            payload: { id: todo.id }
        })
    };

    const deleteTodo = (todo) => {
        dispatch(({
            type: TODO_ACTIONS.DELETE,
            payload: { id: todo.id }
        }))
    };

    const addTodo = () => {
        if(todoText.trim()) {
            dispatch({
                type: TODO_ACTIONS.ADD,
                payload: {
                    id: getChooseDifferentIDMethod(idMethod),
                    text: todoText,
                    completed: false,
                }
            })
            setTodoText('');
        }
    }

    return (
        <div className='app'>
            <h1>Todo List</h1>
            <TodoFilterButtons
                todos={state.todos}
                setFilter={setFilter}
                activeCount={getFilteredTodos(FILTERS.ACTIVE, state.todos)?.length}
                completedCount={getFilteredTodos(FILTERS.COMPLETED, state.todos)?.length}
            />
            <TodoChooseDifferentID
                setIdMethod={setIdMethod}
            />
            <TodoList
                todos={getFilteredTodos(filter, state.todos)}
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