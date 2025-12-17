import TodoCheckbox from './TodoCheckbox';
import TodoDelete from './TodoDelete';

const TodoList = ({ todos, onToggle, onDelete }) => {
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