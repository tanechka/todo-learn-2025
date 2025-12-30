import { IdMethodType } from '../features/todos/todo.types';

// example pattern
export class TodoFactory {
  static createTodo(text: string, idMethod: IdMethodType) {
    return {
      id:  Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
  }

  static createCompletedTodo(text: string, idMethod: IdMethodType) {
    const todo = this.createTodo(text, idMethod);
    return { ...todo, completed: true };
  }
}

const newTodo = TodoFactory.createTodo('Learn patterns', 'crypto');