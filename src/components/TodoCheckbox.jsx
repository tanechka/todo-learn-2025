const TodoCheckbox = ({onToggle, todo}) => {

    return <>
       <input  type='checkbox'
               onChange={()=> {
                   onToggle()
               }}
               checked={todo.completed}
       />
   </>
}

export default TodoCheckbox;