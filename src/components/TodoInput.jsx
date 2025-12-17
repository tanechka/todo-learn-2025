const TodoInput = ({ todoText, setTodoText }) => {
    return <>
        <input type='text'
               value={todoText}
               onChange={(event) => {
                setTodoText(event.target.value);
            }}
        />
    </>
}

export default TodoInput;