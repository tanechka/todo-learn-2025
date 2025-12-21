import {useId, memo} from 'react';

const TodoAdd = ({ todoText, setTodoText, onAdd }) => {
    const id = useId();

    return (
        <>
            <input
                type="text"
                id={id}
                value={todoText}
                onChange={(event) => {
                    setTodoText(event.target.value)
                }}
            />
            <button className="delete-btn" onClick={onAdd}>add</button>
        </>

    )
}

export default memo(TodoAdd);