const TodoCheckbox = ({id, onToggle, todo}) => {
    return (
        <input id={id}
               aria-label="checkbox"
               type="checkbox"
               onChange={()=> {
                   onToggle(todo.id)
               }}
               checked={todo.completed}
        />
    )
}

export default TodoCheckbox;