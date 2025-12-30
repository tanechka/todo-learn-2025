import { FILTERS } from './todoConst';

export const getFilteredTodos = (filter, todos) => {
    switch (filter) {
        case FILTERS.ACTIVE:
            return todos?.filter(todo => !todo.completed);
        case FILTERS.COMPLETED:
            return todos?.filter(todo => todo.completed);
        default:
            return todos;
    }
};
