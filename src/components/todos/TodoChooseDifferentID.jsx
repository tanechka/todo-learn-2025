import { useId } from 'react';

const TodoChooseDifferentID = ({setIdMethod}) => {
    const id = useId();

    return (
        <select id={id} onChange={(e) => setIdMethod(e.target.value)}>
            <option value="crypto">crypto.randomUUID()</option>
            <option value="nanoid">nanoid (simulated)</option>
            <option value="timestamp">Date.now()</option>
        </select>
    )
}

export default TodoChooseDifferentID;