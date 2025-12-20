import { TODO_ACTIONS } from './todoActions';

const initialTodosState = {
    todos: []
};

const todoReducer = (state, actions) => {
    switch (actions.type) {
        case (TODO_ACTIONS.ADD):
            console.log('ac', state)
            return {
                todos: [...state.todos, {
                    id: actions.payload.id,
                    text: actions.payload.text,
                    completed: actions.payload.completed,
                }]
            }
        case (TODO_ACTIONS.DELETE):
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== actions.payload.id)
            }
        case (TODO_ACTIONS.TOGGLE):
            return {
                ...state,
                todos: state.todos.map((item) => {
                    return item.id === actions.payload.id ? {...item, completed: !item.completed } : item
                })
            }
    }
}

export { todoReducer, initialTodosState };