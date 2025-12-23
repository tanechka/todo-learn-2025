// __tests__/todoStore.test.js
import { act, renderHook } from '@testing-library/react';
import useTodoStore from './todoSotre';

describe('Todo Store', () => {
    beforeEach(() => {
        const { result } = renderHook(() => useTodoStore());
        act(() => {
            result.current.todos = [];
        });
    });

    test('should add todo', () => {
        const { result } = renderHook(() => useTodoStore());

        act(() => {
            result.current.addTodo('Learn Zustand');
        });

        expect(result.current.todos).toHaveLength(1);
        expect(result.current.todos[0].text).toBe('Learn Zustand');
    });

    test('should toggle todo', () => {
        const { result } = renderHook(() => useTodoStore());

        act(() => {
            result.current.addTodo('Test todo');
            const todoId = result.current.todos[0].id;
            result.current.toggleTodo(todoId);
        });

        expect(result.current.todos[0].completed).toBe(true);
    });
});