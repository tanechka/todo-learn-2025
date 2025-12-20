import {useId} from 'react';

const TodoInput = ({ todoText, setTodoText }) => {
    const id = useId();

    return (
        <input
            type="text"
            id={id}
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
        />
    )
}

export default TodoInput;