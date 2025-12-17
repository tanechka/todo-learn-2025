const TodoAddButton = ({setTodos, todos, todoText, setTodoText }) => {
    return <>
        <button onClick={() => {
            setTodos([
                ...todos,
                {
                    id: todos?.length,
                    text: todoText,
                    done: false,
                }
            ])
            setTodoText('');
        }}>add</button>
    </>
};

export default TodoAddButton;