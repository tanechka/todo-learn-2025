const TodoCheckbox = ({onToggle, todo}) => {

    return <>
       <input  type='checkbox'
               onChange={()=> {
                   onToggle(todo)
               }}
               checked={todo.completed}
       />
   </>
}

export default TodoCheckbox;