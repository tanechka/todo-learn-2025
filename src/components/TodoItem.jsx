import { useId } from 'react';
import TodoCheckbox from './TodoCheckbox';
import TodoDelete from './TodoDelete';

const TodoItem = ({ todo , onToggle, onDelete }) => {
    const id = useId();

    return <div key={todo.id}>
        <TodoCheckbox id={id} onToggle={onToggle} todo={todo} />
        <label htmlFor={id}>{todo.text}</label>
        <TodoDelete onDelete={onDelete} todo={todo} />
    </div>
}

export default TodoItem;