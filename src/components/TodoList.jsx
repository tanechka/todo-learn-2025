import TodoCheckbox from './TodoCheckbox';
import TodoDelete from './TodoDelete';

const TodoList = ({ todos, onToggle, onDelete }) => {
    if (!todos.length) {
        return <p className="empty-message">Нет задач</p>;
    }

    return <>
        {todos.map((todo) =>
            <div key={todo.id}>
               <TodoCheckbox onToggle={() => onToggle(todo)} todo={todo} />
                {todo.text}
                <TodoDelete onDelete={() => onDelete(todo)} todo={todo} />
            </div>
        )}
    </>
}

export default TodoList;