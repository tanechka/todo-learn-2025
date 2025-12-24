import { useId, memo } from 'react';
import { Todo } from './todo.types';
import TodoCheckbox from './TodoCheckbox';
import TodoDelete from './TodoDelete';

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem = ({ todo , onToggle, onDelete }: TodoItemProps) => {
    const id = useId();

    return <div key={todo.id} className="todo-item" >
        <TodoCheckbox id={id} onToggle={onToggle} todo={todo} />
        <label className="todo-text" htmlFor={id}>{todo.text}</label>
        <TodoDelete onDelete={onDelete} todo={todo} />
    </div>
}

export default memo(TodoItem);