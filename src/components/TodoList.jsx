const TodoList = ({filteredTodos, todos, setTodos}) => {
    return <>
        {filteredTodos?.map((todo) =>
            <div key={todo.id}>
                <input  type='checkbox'
                        onChange={()=> {
                            let checkedItem = todos.map(
                                (item) =>
                                    item.id === todo.id ? {...item, done: !item.done } : item
                                )
                            setTodos(checkedItem)
                        }}
                        checked={todo.done}
                />
                    {todo.text}
                <br />
            </div>
        )
        }
    </>
}

export default TodoList;