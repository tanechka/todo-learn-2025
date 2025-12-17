import TodoCheckbox from './TodoCheckbox';
import TodoDelete from './TodoDelete';

const TodoList = ({ todos, setTodos}) => {
    const handleToggle = (todo) => {
        const updatedTodos = todos.map((item) => item.id === todo.id ? {...item, completed: !item.completed } : item);
        setTodos(updatedTodos);
    };

    const handleDelete = (todo) => {
        const updatedTodos = todos.filter((item) => item.id !== todo.id);
        setTodos(updatedTodos);
    };

    return <>
        {todos.map((todo) =>
            <div key={todo.id}>
               <TodoCheckbox onToggle={() => handleToggle(todo)} todo={todo} />
                {todo.text}
                <TodoDelete onDelete={() => handleDelete(todo)} todo={todo} />
            </div>
        )}
    </>
}

export default TodoList;