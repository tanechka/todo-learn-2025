const TodoDelete = ({ onDelete, todo }) => {
    return <>
        <button onClick={() => {
            onDelete(todo);
        }}>-</button>
    </>
}

export default TodoDelete;