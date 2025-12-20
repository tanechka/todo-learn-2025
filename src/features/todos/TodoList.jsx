import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
    if (!todos?.length) {
        console.log('todos', todos)
        return <p className="empty-message">Нет задач</p>;
    }

    return <div className="todo-section">
        {
            todos.map((todo) =>
                <TodoItem
                    todo={todo}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            )
        }
    </div>
}

export default TodoList;