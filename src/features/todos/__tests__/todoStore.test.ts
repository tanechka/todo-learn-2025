import { useTodoStore } from '../todoStore';
import {FILTERS, METHOD} from '../todoConst';
import {TodoState, FilterType} from '../todo.types';

describe('todoStore', () => {

  const initialState: TodoState = {
    todos: [],
    filter: FILTERS.ALL
  };

  beforeEach(() => {
    useTodoStore.setState(initialState);
  });

  test('addTodo adds a new todo', () => {
    const store = useTodoStore.getState();

    store.addTodo('task 1');
    const updatedTodos = useTodoStore.getState().todos;

    expect(updatedTodos).toHaveLength(1);
    expect(updatedTodos[0].text).toBe('task 1');
    expect(updatedTodos[0].completed).toBe(false);
  });

  test('deleteTodo deletes correct todo', () => {
    const store = useTodoStore.getState();

    store.addTodo('task 1');
    store.addTodo('task 2');

    const todosBeforeDelete = useTodoStore.getState().todos;
    const firstTodoId = todosBeforeDelete[0].id;

    store.deleteTodo(firstTodoId);

    const todosAfterDelete = useTodoStore.getState().todos;

    expect(todosAfterDelete).toHaveLength(1);
    expect(todosAfterDelete[0].text).toBe('task 2');
  });

  test('toggleTodo changes completion status', () => {
    const store = useTodoStore.getState();
    store.addTodo('Test task');

    const todoId = useTodoStore.getState().todos[0].id;
    const initialCompleted = useTodoStore.getState().todos[0].completed;

    store.toggleTodo(todoId);

    const todoAfterToggle = useTodoStore.getState().todos[0];
    expect(todoAfterToggle.completed).toBe(!initialCompleted);
  });

  test('filteredTodos returns correct todos based on filter', () => {
    const store = useTodoStore.getState();

    store.addTodo('Active task 1');
    store.addTodo('Active task 2');
    store.addTodo('Completed task');

    const todos = useTodoStore.getState().todos;
    store.toggleTodo(todos[2].id);

    store.setFilter(<FilterType>FILTERS.ALL);
    const allTodos = store.filteredTodos();
    expect(allTodos).toHaveLength(3);

    store.setFilter(<FilterType>FILTERS.ACTIVE);
    const activeTodos = store.filteredTodos();
    expect(activeTodos).toHaveLength(2);
    expect(activeTodos.every(t => !t.completed)).toBe(true);

    store.setFilter(<FilterType>FILTERS.COMPLETED);
    const completedTodos = store.filteredTodos();
    expect(completedTodos).toHaveLength(1);
    expect(completedTodos[0].completed).toBe(true);
  });

  test('stats returns correct counts', () => {
    const store = useTodoStore.getState();

    store.addTodo('Task 1');
    store.addTodo('Task 2');
    store.addTodo('Task 3');

    const todos = useTodoStore.getState().todos;
    store.toggleTodo(todos[0].id);

    const stats = store.stats();

    expect(stats.total).toBe(3);
    expect(stats.completed).toBe(1);
    expect(stats.active).toBe(2);
  });
});