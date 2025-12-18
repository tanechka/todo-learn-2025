const TodoCheckbox = ({id, onToggle, todo}) => {
    return <>
       <input id={id}
            type='checkbox'
            onChange={()=> {
               onToggle(todo)
            }}
            checked={todo.completed}
       />
   </>
}

export default TodoCheckbox;