const TodoDelete = ({ onDelete, todo }) => {
    return (
        <button
          role="button"
          aria-label="Delete"
          onClick={() => {
            onDelete(todo.id);
        }}>-</button>
    )
}

export default TodoDelete;