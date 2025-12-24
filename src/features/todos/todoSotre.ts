import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { FILTERS, METHOD } from './todoConst';
import { getChooseDifferentIDMethod, getFilteredTodos } from './todoUtils';
import {FilterType, IdMethodType, Stats, Todo} from './todo.types';

interface TodoActions {
  stats: () => Stats;
  filteredTodos: () => Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter(filter: FilterType): () => void;
  setIdMethod(method: IdMethodType): () => void;
}

interface TodoState {
  todos: Todo[];
  filter: FilterType;
  idMethod: IdMethodType;
}

type TodoStore = TodoState & TodoActions;

export const useTodoStore = create<TodoStore>()(
    devtools(
        persist(
            (set, get) => ({
                todos: [],
                filter: FILTERS.ALL,
                idMethod: METHOD.CRYPTO,

                filteredTodos: () => {
                    const { todos, filter } = get();

                    return getFilteredTodos(filter, todos);
                },

                stats: () => {
                    const { todos } = get();
                    const total = todos.length;
                    const completed = todos.filter(t => t.completed).length;

                    return { total, completed, active: total - completed };
                },

                addTodo: (text) => set((state) => ({
                    todos: [...state.todos, {
                        id: getChooseDifferentIDMethod(state.idMethod),
                        text: text.trim(),
                        completed: false,
                    }],
                })),

                toggleTodo: (id) => set((state) => ({
                    todos: state.todos.map(item =>
                        item.id === id ? { ...item, completed: !item.completed } : item
                    )
                })),

                deleteTodo: (id) => set((state) => ({
                    todos: state.todos.filter(item => item.id !== id)
                })),

                setFilter: (filter) => set({ filter }),
                setIdMethod: (method) => set({ idMethod: method }),
            }),
            {
                name: 'todo-storage',
                partialize: (state) => ({
                    todos: state.todos,
                    idMethod: state.idMethod,
                    filter: state.filter,
                }),
            }
        ),
        { name: 'TodoStore' }
    )
);

export default useTodoStore;