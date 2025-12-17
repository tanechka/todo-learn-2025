import TodoCheckbox from './TodoCheckbox';
import TodoDelete from './TodoDelete';

const TodoItem = ({ todo , onToggle, onDelete }) => {
    return <div key={todo.id}>
        <TodoCheckbox onToggle={onToggle} todo={todo} />
        {todo.text}
        <TodoDelete onDelete={onDelete} todo={todo} />
    </div>
}

export default TodoItem;