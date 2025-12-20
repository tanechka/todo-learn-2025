import { FILTERS, METHOD } from './todoConst';
import { nanoid } from 'nanoid';

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

export const getChooseDifferentIDMethod = (method) => {
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
