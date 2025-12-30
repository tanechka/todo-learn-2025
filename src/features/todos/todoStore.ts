import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { FILTERS } from './todoConst';
import { getFilteredTodos } from './todoUtils';
import { FilterType, Stats, Todo } from './todo.types';
import todoApi from './api/todoApi';

interface TodoActions {
  stats: () => Stats;
  filteredTodos: () => Todo[];
  addTodo: (text: string) => Promise<void>;
  toggleTodo: (id: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  setFilter: (filter: FilterType) => void;
  fetchTodos: () => Promise<void>;
}

interface TodoState {
  todos: Todo[];
  filter: FilterType;
  loading: boolean;
}

type TodoStore = TodoState & TodoActions;

export const useTodoStore = create<TodoStore>()(
    devtools(
        persist(
            (set, get) => ({
                todos: [],
                filter: FILTERS.ALL,
                loading: false,

              fetchTodos: async () => {
                  try {
                    const todos = await todoApi.fetch();
                    set({ todos: todos, loading: false });
                  } catch (error) {
                    set({ loading: false });
                    console.error('Failed to load todo');
                  }
                },

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
                addTodo: async (text) => {
                  try {
                    const newTodo = await todoApi.create(text);
                    set((state) => ({
                      todos: [...state.todos, newTodo]
                    }));
                  } catch (error) {
                    console.error('Failed to add todo:', error);
                  }
                },
                toggleTodo: async (id) => {
                  try {
                    const updatedTodo = await todoApi.toggle(id);
                    console.log('updatedTodo', updatedTodo)

                    set((state) => ({
                      todos: state.todos.map((todo) =>
                        todo.id === updatedTodo.id ? updatedTodo : todo
                      )
                    }));
                  } catch (error) {
                    console.error('Failed to toggle todo:', error);
                  }
                },
                deleteTodo: async (id) => {
                  const ok = await todoApi.delete(id);

                  if (ok) {
                    set((state) => ({ todos: state.todos.filter(t => t.id !== id) }));
                  } else {
                    console.error('Failed to delete todo');
                  }
                },
                setFilter: (filter) => set({ filter }),
            }),
            {
                name: 'todo-storage',
                partialize: (state) => ({
                    todos: state.todos,
                    filter: state.filter,
                }),
            }
        ),
        { name: 'TodoStore' }
    )
);

export default useTodoStore;