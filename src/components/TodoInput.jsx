import {useId} from 'react';

const TodoInput = ({ todoText, setTodoText }) => {
    const id = useId();

    return <>
        <input
            id={id}
            type='text'
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
        />
    </>
}

export default TodoInput;