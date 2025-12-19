import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete }) => {
    if (!todos.length) {
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