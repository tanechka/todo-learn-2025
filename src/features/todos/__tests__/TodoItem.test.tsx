import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../TodoItem';
import { Todo } from '../todo.types';

const mockTodo: Todo = {
  id: 'test-id-123',
  text: 'Test todo item',
  completed: false,
};

describe('TodoItem', () => {
  let mockOnToggle: jest.Mock;
  let mockOnDelete: jest.Mock;

  beforeEach(() => {
    mockOnToggle = jest.fn();
    mockOnDelete = jest.fn();
  });


  test('renders todo text', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    );

    expect(screen.getByText(mockTodo.text)).toBeInTheDocument();
  });

  test('should call the onToggle handler', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledWith(mockTodo.id);
  });

  test('should call the mockOnDelete handler', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    );

    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(mockTodo.id);
  });
});